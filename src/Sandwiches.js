import React, { useState } from "react";
import "./Sandwiches.css";
import Sandwich from "./Sandwich";
import {NavLink} from "react-router-dom";

const Sandwiches = () => {
  const [sandwiches, setSandwiches] = useState([]);
  const [count, setCount] = useState(0);

  function addSandwich() {
    setSandwiches([...sandwiches, <Sandwich key={sandwiches.length} />]);
    setCount(c => c + 1)
  }

  return (
    <div className="Sandwich">
      <h1>So Yummy!</h1>
      
      <div className="image-div">
        <div className="btn-div">
        Sandwiches Purchsed: {count}
            <div><button onClick={addSandwich} className="add-btn" >MORE ENERGY</button>
            </div>
            <NavLink to="/"><button  className="back-btn" >GO BACK</button></NavLink>
        </div>
        
        <div className="image">
          
          {sandwiches.map((element, index) => (
            <React.Fragment key={index}>{element}</React.Fragment>
          ))}
          
        </div>
        
      </div>
    </div>
  );
};

export default Sandwiches;
