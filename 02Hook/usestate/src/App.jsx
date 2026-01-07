import { useState } from "react";

 
const App = () => {
  const [counter, setCounter] = useState(0);
   // let color = "red";
  return (
    <div className="main">
      {/* <h1>My favrate color is {color}!</h1>
      <button onClick={() => {
        color = "blue"
      }}>Blue</button> */}
      <div className="counter-card">
        
        <h1 className={counter < 0 ? 'negative' : ''}>
          {counter}
        </h1>

        <div className="button-container">
          <button onClick={() => setCounter(counter - 1)}>-</button>
          <button onClick={() => setCounter(counter + 1)}>+</button>
        </div>

        <button className="reset-btn" onClick={() => setCounter(0)}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default App;