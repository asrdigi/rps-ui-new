import Navbar from "./Navbar";
import { useParams } from "react-router-dom";

const User =  (props)  => {
    const {userId} = useParams();
    return (
        <>
        <Navbar/>
        <div>User ID: {userId}</div>
        </>
    )

  }

  export default User;