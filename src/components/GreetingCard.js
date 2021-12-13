import logo from '../images/ecardpic.jpg';
import '../App.css';

function GreetingCard({greeting,body,closing}) {

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
        <button className="App-link"
          
        >
          Reshare This Card
        </button>
      </header>
    </div>
  );
}

export default GreetingCard;
