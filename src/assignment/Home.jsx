import { useNavigate } from "react-router-dom";

 export default function Home(){
    const navigate = useNavigate();
    return(
        <div>
            <h1>Welcome Home!!</h1>
            <button onClick={()=> navigate("/")}>Go Back</button>
        </div>
    )
}
