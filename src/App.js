
import { useState } from "react";
import './App.css'
import gypzeez from "./assets/gypzeez.png";

import StripeContainer from "./components/stripecontainer";
import StripeHome from "./components/stripehome";


function App() {
  const [showItem, setShowItem] = useState(false);

  return (
    <div className="App container">
      <StripeHome/>
      <h1>Gypzeez payment</h1>
      {showItem ? (
        <StripeContainer />
      ) : (
        <>
          <img src={gypzeez} alt="gypzeez" />
          <button onClick={()=>{setShowItem(true)}}>Purchase Gypzeez</button>
        </>
      )}
    </div>
  );
}

export default App;
