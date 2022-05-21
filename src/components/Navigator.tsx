
   
import { useNavigate } from "react-router";
import './Navigator.css'
const Navigator = () => {
  const navigate = useNavigate();
  return (
    <>
      <ul className="list">
        <li>
          <button onClick={() => navigate("/sachin")}>Sachin</button>
        </li>
        <li>
          <button onClick={() => navigate("/rohit")}>Rohit Sharama</button>
        </li>
        <li>
          <button onClick={() => navigate("/virat")}>Virat</button>
        </li>
      </ul>
    </>
  );
};

export default Navigator;