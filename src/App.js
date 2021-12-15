import "./App.css";
import GreetingCard from "./components/GreetingCard";
import { useState } from "react";
import CustomizeMessage from "./components/CustomizeMessage";

function App() {
  const [email, setEmail] = useState("");
  const [greeting, setGreeting] = useState("Dear Mom,");
  const [body, setBody] = useState("Have a nice day!");
  const [closing, setClosing] = useState("Love,your Son Hab");
  const [customize, setCustomize] = useState(false);
  const [preview, setPreview] = useState(false);
  return (
    <div>
      {customize ? (
        <CustomizeMessage
          email={email}
          setEmail={setEmail}
          greeting={greeting}
          setGreeting={setGreeting}
          body={body}
          setBody={setBody}
          closing={closing}
          setClosing={setClosing}
          setCustomize={setCustomize}
          setPreview={setPreview}
        />
      ) : (
        <GreetingCard
          greeting={greeting}
          body={body}
          closing={closing}
          setCustomize={setCustomize}
          preview={preview}
          setPreview={setPreview}
        />
      )}
    </div>
  );
}

export default App;
