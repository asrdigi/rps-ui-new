import React, { useState } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios';
import { useNavigate } from 'react-router';

export default function Create() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [checkbox, setCheckbox] = useState(false);

    let navigate = useNavigate();

    // const postData = () => {


    //     console.log(firstName);
    //     console.log(lastName);
    //     console.log(checkbox);
    // }

    //https://66a39ba544aa63704581df17.mockapi.io/fakeData

    // const postData = () => {
    //     axios.post(`https://66a39ba544aa63704581df17.mockapi.io/fakeData`, {
    //         firstName,
    //         lastName,
    //         checkbox
    //     })
    // }

    const postData = () => {
        axios.post(`https://66a39ba544aa63704581df17.mockapi.io/fakeData`, {
            firstName,
            lastName,
            checkbox
        }).then(() => {
            // React Router Version < 6
            //import { useHistory } from 'react-router';
            //let history = useHistory();
            //history.push('/read') 
            navigate('/read')
        })
    }

    return (
        <div>
            <Form className="create-form">
                <Form.Field>
                    <label>First Name</label>
                    <input placeholder='First Name' onChange={(e) => setFirstName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input placeholder='Last Name' onChange={(e) => setLastName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                <Checkbox label='I agree to the Terms and Conditions' onChange={(e) => setCheckbox(!checkbox)}/>
                </Form.Field>
                <Button onClick={postData} type='submit'>Submit</Button>
            </Form>
        </div>
    )
}





