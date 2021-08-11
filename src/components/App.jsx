import React, { useState } from "react";

function App() {
  setInterval(updatetime, 1000);
  let now = new Date().toLocaleTimeString();
  const [Time, setTime] = useState(now);
  function updatetime() {
    const newtime = new Date().toLocaleTimeString();
    setTime(newtime);
  }

  return (
    <div>
      <h1>{Time}</h1>
      <button onClick={updatetime}>Get Time</button>
    </div>
  );
}

export default App;
