import logo from '../images/ecardpic.jpg';
import '../App.css';

function GreetingCard({greeting,body,closing ,setCustomize,preview,setPreview}) {
const continueEditing=()=>{
  setCustomize(true);
  setPreview(false)
}
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {greeting}
        </p>
        <p>
          {body}
        </p>
        <p>
          {closing}
        </p>
        {preview?
        <div>
          <button type="button" onClick={()=>setCustomize(true)}>
            Continue Editing
            </button> </div>:
        <button className="App-link"
          onClick={continueEditing}
        >
          Reshare This Card
        </button>
      }
        
      </header>
    </div>
  );
}

export default GreetingCard;
