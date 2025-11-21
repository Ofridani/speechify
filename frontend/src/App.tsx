import { useState } from "react";

function App() {
  const [msg, setMsg] = useState("");

  const pingBackend = async () => {
    const res = await fetch("http://localhost:3000/test");
    const data = await res.json();
    setMsg(data.msg);
  };

  return (
    <>
      <h1>{msg || "No message yet"}</h1>
      <button onClick={pingBackend}>Ping Backend</button>
    </>
  );
}

export default App;
