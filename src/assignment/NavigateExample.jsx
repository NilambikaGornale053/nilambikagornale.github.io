import { useNavigate } from "react-router-dom";
export default function(){
    const navigate =useNavigate();
  return(
    <div>
    <h1>Example navigate</h1>
    <button onClick={()=>navigate("/Home")}>go to Home</button>
    </div>
  );
}
