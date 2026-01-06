import React from "react";

export default function Button({ onsquareclick, value }) {
  return (
    <button
      onClick={onsquareclick}
      style={{ padding: "20px", border: "2px solid black" }}
    >
      {value}
    </button>
  );
}
