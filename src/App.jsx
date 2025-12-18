import React from "react";
import Greeting from "./Greeting";
// import
export default function App() {
  //logic
  const name = "Rahul";
  const city = "chennai";
  const age = 23;
  return (
    <div>
      <h1>ReactJs Class</h1>
      <p>my name is {name}</p>
      <Greeting name={name} age={age}/>
      <Greeting name={city} />
    </div>
  );
}
