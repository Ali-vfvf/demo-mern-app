import React, { useState } from "https://esm.sh/react";

function App(){

  const [a,setA] = useState("");
  const [b,setB] = useState("");
  const [result,setResult] = useState(null);

  const addNumbers = async () => {

    const res = await fetch(`http://backend:5000/add?a=${a}&b=${b}`);

    const data = await res.json();

    setResult(data.result);
  }

  return(

    <div className="container">

      <h1>MERN CI/CD Demo</h1>

      <input placeholder="First number" onChange={(e)=>setA(e.target.value)} />

      <input placeholder="Second number" onChange={(e)=>setB(e.target.value)} />

      <button onClick={addNumbers}>Add</button>

      <h2>Result: {result}</h2>

    </div>

  )
}

export default App;