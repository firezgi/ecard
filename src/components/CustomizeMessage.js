import React from "react";
import "../App.css";
import logo from "../images/ecardpic.jpg";

function CustomizeMessage({
  email,
  setEmail,
  greeting,
  setGreeting,
  body,
  setBody,
  closing,
  setClosing,
  setCustomize,
  setPreview
}) {
    const onSummit=(e)=>{
        e.preventDefault();
        setPreview(true);
        setCustomize(false)
    }
  return (
    <>
      <div className="instructions">
        <img src={logo} className="thumb" alt="logo" width />
        <p>
          <strong>How to Reshare:</strong>
          <br />
          Write your own custom message below{" "}
        </p>
      </div>
      <form onSubmit={onSummit}>
        <div>
        <label htmlFor="email">Recipient Email</label>
        <br />
        <input
            name="email"
            id="email"
            type="text"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            placeholder="Recipient Email"
        />
        </div>
        <div>
        <label htmlFor="email">Greeting</label>
        <br />
        <input
            name="greeting"
            id="greeting"
            type="text"
            value={greeting}
            onChange={(e)=>setGreeting(e.target.value)}
            placeholder="Greeting"
        />
        </div>        
        <div>
        <label htmlFor="body">Body</label>
        <br />
        <textarea
            name="body"
            id="body"
            type="text"
            value={body}
            onChange={(e)=>setBody(e.target.value)}
            placeholder="Body"
            rows="4"
            maxLength="200"
        ></textarea>
        </div>        
        <div>
        <label htmlFor="closing">Closing</label>
        <br />
        <input
            name="closing"
            id="closing"
            type="text"
            value={closing}
            onChange={(e)=>setClosing(e.target.value)}
            placeholder="Closing"
        />
        </div> 
        <div>
            <button type="submit" onClick={onSummit}>Preview</button>
            </div>       
      </form>
    </>
  );
}

export default CustomizeMessage;
