import { useState } from "react"
import axios from "axios";
export default function User() {
    const [name, setName] = useState("");
    const [email, setemail] = useState("");
    const [UserName, setUserName] = useState("");
    const [message, setMessage] = useState("");
    const [Number, setNumber] = useState("");
    const [Address, setAddress] = useState("");
    async function handleSubmit(e) {
        e.preventDefault();
        const newUser = {
            name: name,
            email: email,
            username: UserName
        };
        const res = await axios.post(
            "http://localhost:5000/api/users",
            newUser

        );
        console.log(res.data);
        console.log(name);
        console.log(email);
        console.log(UserName);
        setMessage("User added successfully!");
    }
    return (
        <>
            <h1>Add new Users</h1>

            <p>{message}</p>
        </>
    )
}