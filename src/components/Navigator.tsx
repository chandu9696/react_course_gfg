
   
import { useNavigate } from "react-router";
import './Navigator.css'
const Navigator = () => {
  const navigate = useNavigate();
  return (
    <>
      <ul className="list">
        <li>
          <button onClick={() => navigate("/note")}>To do App</button>
        </li>
        <li>
          <button onClick={() => navigate("/corosal")}>Carousel</button>
        </li>
        <li>
          <button onClick={() => navigate("/useeffect")}>UseEffect1</button>
        </li>
        <li>
          <button onClick={() => navigate("/useeffect1")}>UseEffect2</button>
        </li>
        <li>
          <button onClick={() => navigate("/useeffect2")}>UseEffect3</button>
        </li>
        
      </ul>
    </>
  );
};

export default Navigator;