import logo from "../images/ecardpic.jpg";
// import '../App.css';
import "./GreetingCard.css";

function GreetingCard({
  email,
  greeting,
  body,
  closing,
  setCustomize,
  preview,
  setPreview,
}) {
  const continueEditing = () => {
    setCustomize(true);
    setPreview(false);
  };
  const sendEcard = () => {
    let mailto = `mailto:${email}`;
    mailto += "?subject=E-Card";
    mailto += "&body=You have received an e-greeting card.";
    mailto += "%0D%0A%0D%0A";
    mailto += "Go To Greeting Card";
    mailto += "%0D%0A";

    let url = "https://keshi2021.github.io/ecard";
    url += `?greeting=${encodeURIComponent(greeting)}`;
    url += `&body=${encodeURIComponent(body)}`;
    url += `&closing=${encodeURIComponent(closing)}`;

    mailto += encodeURIComponent(url);

    // console.log(mailto);

    window.open(mailto);
  };
  return (
    <div
      // className="App"
      className="container"
    >
      <div
        // className="App-header"
        className="book"
      >
        <div className="cover">
          <p>hover me</p>
          <img
            src={logo}
            // className="App-logo"
            alt="logo"
          />
        </div>

        <div className="details">
          <p className="script">{greeting}</p>
          <p className="script">{body}</p>
          <p className="script">{closing}</p>
          {preview ? (
            <div className="buttons">
              <button onClick={continueEditing}style={{marginBottom:"5px",padding:"5px"}}>Continue Editing</button>
              <button onClick={sendEcard} style={{padding:"5px"}}>Send</button>
            </div>
          ) : (
            <button className="App-link" onClick={() => setCustomize(true)}>
              Reshare This Card
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default GreetingCard;
