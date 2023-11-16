import React, { useState } from "react";
import "./Cokes.css";
import Coke from "./Coke";
import {NavLink} from "react-router-dom";

const Cokes = () => {
  const [cokes, setCokes] = useState([]);
  const [count, setCount] = useState(0);

  function addCoke() {
    setCokes([...cokes, <Coke key={cokes.length} />]);
    setCount(c => c + 1)
  }

  return (
    <div className="Coke">
      <h1>So Refreshing</h1>
      
      <div className="image-div">
        <div className="btn-div">
        COKES Purchsed: {count}
            <div><button onClick={addCoke} className="add-btn" >MORE SUGAR</button>
            </div>
            <NavLink to="/"><button  className="back-btn" >GO BACK</button></NavLink>
        </div>
        
        <div className="image">
          
          {cokes.map((element, index) => (
            <React.Fragment key={index}>{element}</React.Fragment>
          ))}
          
        </div>
        
      </div>
    </div>
  );
};

export default Cokes;
