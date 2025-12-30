import React from "react";
import Greeting from "./Greeting";
import ConditionalRendering from "./Component/ConditionalRendering";
import ListRender from "./Component/ListRender";
import UseStateHook from "./Component/UseStateHook";
import Dark from "./Component/Dark";
import FieldInput from "./Component/FieldInput";
import FormUsestate from "./Component/FormUsestate";
import RegForm from "./Component/RegForm";
import ObjectCSS from "./Component/ObjectCSS";
import UseEffectHook from "./Component/UseEffectHook";
import UseEffectTimer from "./Component/UseEffectTimer";
import UseEffectAIP from "./Component/UseEffectAIP";
import UseRefHook from "./Component/UseRefHook";
import First from "./Context/First";
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
      <div style={{ border: "2px solid black", padding: "20px" }}>
        <h2>App component--{name}</h2>
        <First name={name}/>
      </div>
      <UseRefHook />
      <UseEffectAIP />
      <UseEffectTimer />
      <UseEffectHook />
      <ObjectCSS />
      <RegForm />
      <FormUsestate />
      <FieldInput />
      <Dark />
      <UseStateHook />
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
