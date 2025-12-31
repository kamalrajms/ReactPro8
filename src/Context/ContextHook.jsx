import React, { useContext } from "react";
import ContextButton from "./ContextButton";
import { Pass } from "../App";

export default function ContextHook() {
  const { mode, setMode } = useContext(Pass);
  return (
    <div className={mode}>
      <h1>Welcome bak...</h1>
      <ContextButton />
    </div>
  );
}
