import React from 'react';
import '../App.css';
import logo from '../images/ecardpic.jpg';


function CustomizeMessage() {
    return (
        <>
         <div className="instructions">
         <img src={logo} className="thumb" alt="logo" 
         width/>
         <p><strong>How to Reshare:</strong><br/>
         Write your own custom message below </p>
         </div>
         <div>
             <label for ></label>
         </div>
        </>
    )
}

export default CustomizeMessage
