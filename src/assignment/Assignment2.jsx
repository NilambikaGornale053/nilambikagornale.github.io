import { useState } from "react"

export default function Assign2() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("")
    const savedData = localStorage.getItem("usersData")
    const [users, setUsers] = useState(() => {
        return savedData ? JSON.parse(savedData) : [];
    });
    function handleSubmit() {
        // setUsers((prev)=> [...prev, name])
        const newUser = [...users, { name, email }];
        setUsers(newUser)
        localStorage.setItem("usersData", JSON.stringify(newUser))
    }
    console.log(users)
    return (
        <>
            <div>
                <div><label htmlFor="name">Name</label></div>
                <div><input type="text" value={name} onChange={(e) => setName(e.target.value)} /></div>
            </div>
            <div>
                <div><label htmlFor="email">Email</label></div>
                <div><input type="text" value={email} onChange={(e) => setEmail(e.target.value)} /></div>
            </div>
            <button onClick={handleSubmit}>Submit</button>
            <div>
                {
                    users.map((a) => (
                        <li key={a}>{a.email} - {a.name}</li>
                    ))
                }
            </div>
        </>
    )
}