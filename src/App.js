import { useState } from "react";
import './App.css'
import gypzeez from "./assets/gypzeez.png";

import StripeContainer from "./components/stripecontainer";

function App() {
  const [showItem, setShowItem] = useState(false);

  return (
    <div className="App container">
  
      <h1>Gypzeez payment</h1>
      {showItem ? (
        <StripeContainer />
      ) : (
        <>
          <h3>$10.00</h3>
          <img src={gypzeez} alt="gypzeez" />
          <button onClick={()=>{setShowItem(true)}}>Purchase Gypzeez</button>
        </>
      )}
    </div>
  );
}

export default App;
