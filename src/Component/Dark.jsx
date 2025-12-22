import React, { useState } from "react";

export default function Dark() {
  const [dark, setDark] = useState(false);
  return (
    <div
      style={{
        backgroundColor: dark ? "#333" : "#fff",
        color: dark ? "#fff" : "#333",
        padding: "30px",
      }}
    >
      <button onClick={() => setDark(!dark)}>
        Switch to {dark ? "light" : "Dark"}
      </button>
      <p>you are in {dark ? "dark" : "Light"} mode</p>

     
    </div>
  );
}
