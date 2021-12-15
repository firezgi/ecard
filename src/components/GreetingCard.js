import logo from '../images/ecardpic.jpg';
import '../App.css';

function GreetingCard({email,greeting,body,closing ,setCustomize,preview,setPreview}) {
const continueEditing=()=>{
  setCustomize(true);
  setPreview(false)
}
const sendEcard = () => {
  let mailto = `mailto:${email}`;
  mailto += '?subject=E-Card';
  mailto += '&body=You have received an e-greeting card.';
  mailto += '%0D%0A%0D%0A';
  mailto += 'Go To Greeting Card';
  mailto += '%0D%0A';

  let url = '';
  url += `?greeting=${encodeURIComponent(greeting)}`;
  url += `&body=${encodeURIComponent(body)}`;
  url += `&closing=${encodeURIComponent(closing)}`;

  mailto += encodeURIComponent(url);

  console.log(mailto);

  window.open(mailto);
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
            </button> 
            <button onClick={sendEcard}>Send</button>
            </div>:
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
