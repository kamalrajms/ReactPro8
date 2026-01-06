import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UseIdHook from "../Component/UseIdHook";

export default function Home() {
  const page = useNavigate();
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (count >= 10) {
      page("/Service");
    }
  }, [count]);
  return (
    <div>
      <h2>useId hook</h2>
      <UseIdHook />
      <UseIdHook />
      <UseIdHook />
      <h2>Home component</h2>
      <h1>Count:{count}</h1>
      <button onClick={() => setCount(count + 1)}>count is {count}</button>
      <button onClick={() => page("/Service")}>move to service</button>
    </div>
  );
}
