import { useNavigate } from "react-router-dom";

export default function SeeProfile() {
    const navigate = useNavigate(); 
    const back = () => {
        navigate(-1);
    }


    return (
      <div>
        <h3>See Profile Page</h3>
        <button onClick={back}>Back</button>
      </div>
    );
  }