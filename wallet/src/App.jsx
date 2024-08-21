import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container">
        <h1>Web3 Wallet</h1>
        <div className="wallet">
          <h2>Hey</h2>
        </div>
      </div>
    </>
  );
}

export default App;
