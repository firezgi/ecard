
import './App.css';
import GreetingCard from './components/GreetingCard';
import { useState } from 'react';
import CustomizeMessage from './components/CustomizeMessage';

function App() {
  const[greeting,setGreeting]=useState("Dear Mom,");
  const[body,setBody]=useState("Have a nice day!");
  const[closing,setClosing]=useState("Love,your Son Hab");
  const[customize,setCustomize]=useState(false);
  return (
    <div>
{customize?<CustomizeMessage />:
      <GreetingCard
      greeting={greeting}
       body={body}
       closing={closing}
       setCustomize={setCustomize}/>

    }
    </div>
    
       
    
    
  );
}

export default App;
