import { Table, Button} from 'semantic-ui-react'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';


export default function Read() {
    const [APIData, setAPIData] = useState([]);
    

    useEffect(() => {
        axios.get(`https://66a39ba544aa63704581df17.mockapi.io/fakeData`)
            .then((response) => {
                setAPIData(response.data);
            })
    }, []);

    // const setData = (data) => {
    //     console.log(data);
    //  }

    const setData = (data) => {
        let { id, firstName, lastName, checkbox } = data;
        localStorage.setItem('ID', id);
        localStorage.setItem('First Name', firstName);
        localStorage.setItem('Last Name', lastName);
        localStorage.setItem('Checkbox Value', checkbox)
        console.log(data);
    }

    const onDelete = (id) => {
        axios.delete(`https://66a39ba544aa63704581df17.mockapi.io/fakeData/${id}`)
     .then(() => {
        getData();
        })
    }
    //In the onDelete function, to re-load the updated data after we delete a field, call getData()
    const getData = () => {
        axios.get(`https://66a39ba544aa63704581df17.mockapi.io/fakeData`)
            .then((getData) => {
                 setAPIData(getData.data);
             })
    }

    return (
        <div>
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>First Name</Table.HeaderCell>
                        <Table.HeaderCell>Last Name</Table.HeaderCell>
                        <Table.HeaderCell>Checked</Table.HeaderCell>
                        <Table.HeaderCell>Update</Table.HeaderCell>
                        <Table.HeaderCell>Delete</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {APIData.map((data) => {
                        return (
                        <Table.Row>
                            <Table.Cell>{data.firstName}</Table.Cell>
                            <Table.Cell>{data.lastName}</Table.Cell>
                            <Table.Cell>{data.checkbox ? 'Checked' : 'Unchecked'}</Table.Cell>
                            <Link to='/update'>
                                <Table.Cell> <Button onClick={() => setData(data)}>Update</Button></Table.Cell>
                            </Link>
                            <Table.Cell><Button onClick={() => onDelete(data.id)}>Delete</Button></Table.Cell>
                            </Table.Row>
                    )})}
                </Table.Body>
            </Table>
        </div>
    )
}