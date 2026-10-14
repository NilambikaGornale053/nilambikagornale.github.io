import axios from "axios";
import { useEffect, useState } from "react";

export default function API() {
    const [abc, setabc] = useState([])
    async function getabc() {
        try {
            const res = await axios.get("https://jsonplaceholder.typicode.com")
            // setabc(res.data)
            console.log(res)
        } catch (error) {
            console.log(error);

        }
    }
    useEffect(() => {
        getabc();
    }, [])
    return (
        <>
            <h1>hiii</h1>
            {/* {
                abc?.map((aa) => (
                    <div key={aa.id}>
                        {aa.title}
                    </div>
                ))
            } */}
        </>
    )
}