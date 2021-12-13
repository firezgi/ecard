
import './App.css';
import GreetingCard from './components/GreetingCard';
import { useState } from 'react';

function App() {
  const[greeting,setGreeting]=useState("Dear Mom,")
  const[body,setBody]=useState("Have a nice day!")
  const[closing,setClosing]=useState("Love,your Son Hab")
  return (
    
        <GreetingCard
         greeting={greeting}
          body={body}
          closing={closing}/>
    
    
  );
}

export default App;
