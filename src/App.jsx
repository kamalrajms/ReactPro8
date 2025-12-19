import React from "react";
import Greeting from "./Greeting";
import ConditionalRendering from "./Component/ConditionalRendering";
import ListRender from "./Component/ListRender";
// import
export default function App() {
  //logic
  const name = "Rahul";
  const city = "chennai";
  const age = 23;
  const user = false;
  console.log(user);
  
  return (
    <>
      {user ? (
        <div>
          <h5>listrendering</h5>
          <ListRender />
        </div>
      ) : (
        <div>
          <h5>Conditional rendering</h5>
          <ConditionalRendering />
        </div>
      )}

      <h1>ReactJs Class</h1>
      <p>my name is {name}</p>
      <Greeting name={name} age={age} />
      <Greeting name={city} />
    </>
  );
}
