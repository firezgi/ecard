import "./App.css";
import GreetingCard from "./components/GreetingCard";
import { useState } from "react";
import CustomizeMessage from "./components/CustomizeMessage";

function App() {
  const query=new URLSearchParams(window.location.search);
  const [email, setEmail] = useState("");
  const [importedGreeting, setImportedGreeting] = useState(query.get("greeting")||"Dear Mom,");
  const [importedBody, setImportedBody] = useState(query.get("body")||"Have a nice day!");
  const [importedClosing, setImportedClosing] = useState(query.get("closing")||"Love,your Son Hab");
  const [customize, setCustomize] = useState(false);
  const [preview, setPreview] = useState(false);
  
  return (
    <>
      {customize ? (
        <CustomizeMessage
          email={email}
          setEmail={setEmail}
          greeting={importedGreeting}
          setGreeting={setImportedGreeting}
          body={importedBody}
          setBody={setImportedBody}
          closing={importedClosing}
          setClosing={setImportedClosing}
          setCustomize={setCustomize}
          setPreview={setPreview}
        />
      ) : (
        <GreetingCard
          email={email}
          greeting={importedGreeting}
          body={importedBody}
          closing={importedClosing}
          setCustomize={setCustomize}
          preview={preview}
          setPreview={setPreview}
        />
      )}
    </>
  );
}

export default App;
