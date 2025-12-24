import React, { useEffect, useState } from "react";

export default function UseEffectHook() {
  const [count, setCount] = useState(0);
  const [num1, setnum1] = useState(0);
  useEffect(() => {
    console.log("Component mounted");
  }, []);
  useEffect(() => {
    console.log(`Counst changes to : ${count} ${num1}`);
  }, [count, num1]);
  return (
    <div>
      <h2>React useEffect</h2>

      <h2>
        count:{count},Num1:{num1}
      </h2>
      <button onClick={() => setCount(count + 1)}>count</button>
      <button onClick={() => setnum1(num1 + 1)}>num1</button>
    </div>
  );
}
