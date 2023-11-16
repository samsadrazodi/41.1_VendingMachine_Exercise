import React, { useState } from "react";
import "./IceCreams.css";
import IceCream from "./IceCream";
import {NavLink} from "react-router-dom";

const IceCreams = () => {
  const [icecreams, setIcecreams] = useState([]);
  const [count, setCount] = useState(0);

  function addIcecream() {
    setIcecreams([...icecreams, <IceCream key={icecreams.length} />]);
    setCount(c => c + 1)
  }

  return (
    <div className="IceCream">
      <h1>So Cold and Tasty!!</h1>
      
      <div className="image-div">
        <div className="btn-div">
        Ice Creams Purchsed: {count}
            <div><button onClick={addIcecream} className="add-btn" >MORE Ice Creams</button>
            </div>
            <NavLink to="/"><button  className="back-btn" >GO BACK</button></NavLink>
        </div>
        
        <div className="image">
          
          {icecreams.map((element, index) => (
            <React.Fragment key={index}>{element}</React.Fragment>
          ))}
          
        </div>
        
      </div>
    </div>
  );
};

export default IceCreams;
