import axios from "axios";
import { useEffect, useState } from "react"

export default function ApiFetch() {
    const [aaa, setaaa] = useState([])
    async function getaaa() {
        try {
            const res = await axios.get("https://api.restful-api.dev/objects/")
            setaaa(res.data)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getaaa();
    }, [])
    return (
        <>
            <h1>welcome</h1>
            {
                aaa?.map((aa) => (
                    <div key={aa.id}>
                        {console.log(aa)}
                    </div>
                ))
            }
        </>
    )
}