import React, { useContext } from "react";
import { Pass } from "../App";

export default function ContextButton() {
  const { mode, setMode, data } = useContext(Pass);
  console.log(mode);

  return (
    <div>
      {/* <input type="text" value={data.userName} /> */}
      <button onClick={() => setMode(mode === "light" ? "black" : "light")}>
        theme
      </button>
    </div>
  );
}
