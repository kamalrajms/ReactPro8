import React, { useState } from "react";

export default function UseStateHook() {
  // eg1
  const [count, setCount] = useState(0);

  // eg2
  const [logged, setLogged] = useState(true);
  return (
    <div className="UsestateHook">
      {/* eg1 */}
      <h1>Count : {count}</h1>
      <button onClick={() => setCount(count + 1)}>Incremeent</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>reset</button>

      {logged ? <p>Welcome back...!</p> : <p>Please Login</p>}

      {logged && (
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis
          eveniet optio, est fugiat obcaecati perferendis quod perspiciatis
          minus repellendus esse mollitia aut et nemo adipisci tenetur quae,
          recusandae necessitatibus rerum?
        </p>
      )}
      <button onClick={() => setLogged(!logged)}>
        Sign {logged ? "out" : "in"}
      </button>
    </div>
  );
}

// !true=false
// !false=true
