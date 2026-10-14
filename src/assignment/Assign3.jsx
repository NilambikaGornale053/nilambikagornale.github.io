// import { useState } from "react"

import { useEffect, useRef, useState } from "react"

// export default function Assign3() {
//     const [name, setName] = useState("")
//     const [email, setEmail] = useState("")
//     const [users, setUsers] = useState([])
//     function handleSubmit() {
//         setUsers((prev)=> [...prev,{ name, email}])
//     }
//     console.log(users);

//     return (
//         <>
//             <div>
//                 <div><label htmlFor="name">Name</label></div>
//                 <div><input type="text" value={name} onChange={(e)=> setName(e.target.value)} /></div>
//             </div>
//             <div>
//                 <div><label htmlFor="email">Email</label></div>
//                 <div><input type="text" value={email} onChange={(e)=> setEmail(e.target.value)} /></div>
//             </div>
//             <div>
//                 <button onClick={handleSubmit}>Submit</button>
//             </div>
//             <div>
//                 {
//                     users.map((user)=>(
//                         <div key={user.name}>
//                             {user.name}-{user.email}
//                         </div>
//                     ))
//                 }
//             </div>
//         </>
//     )
// }
export default function Assign4() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [number, setNumber] = useState("")
    const [users, setUsers] = useState([])
    const inpRef = useRef(null)
    function handleSubmit(e) {
        e.preventDefault()
        setUsers((prev) => [...prev, { name, email, number }])
        setEmail("")
        setName("")
        setNumber("")
    }
    useEffect(()=>{
        inpRef.current.focus()
    }, [])
    // console.log(users)
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <div><label htmlFor="name">Name</label></div>
                    <div><input type="text" ref={inpRef} value={name} onChange={(e) => setName(e.target.value)} /></div>
                </div>
                <div>
                    <div><label htmlFor="email">Email</label></div>
                    <div><input type="text" value={email} onChange={(e) => setEmail(e.target.value)} /></div>
                </div>
                <div>
                    <div><label htmlFor="number">Mobile</label></div>
                    <div><input type="number" value={number} onChange={(e) => setNumber(e.target.value)} /></div>
                </div>
                <div>
                    <button>Submit</button>
                </div>


            </form>
            <div>
                {
                    users.map((user) => (
                        <div key={user.name}>
                            {user.name}-{user.email}-{user.number}
                        </div>
                    ))
                }
            </div>
        </>

    )
}