import React, { useState, useContext, createContext } from "react";
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
import ContextHook from "./Context/ContextHook";
import UseReducerHook from "./Component/UseReducerHook";
import UesReducerForm from "./Component/UesReducerForm";
import UseCallBackHook from "./Component/UseCallBackHook";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./Routing/Home";
import About from "./Routing/About";
import Service from "./Routing/Service";
import Contact from "./Routing/Contact";
import AppDev from "./Routing/AppDev";
import WebDev from "./Routing/WebDev";

export const Pass = createContext();
// import
export default function App() {
  //logic
  const name = "Rahul jwbfweof";
  const city = "chennai";
  const age = 23;
  const user = false;
  console.log(user);

  const display = false;

  const [mode, setMode] = useState("light");
  const data = { userName: "Hari" };
  return (
    <>
      {display && (
        <div>
          <UseCallBackHook />
          <UesReducerForm />
          <UseReducerHook />
          <Pass.Provider value={{ mode, setMode, data }}>
            <ContextHook />
          </Pass.Provider>
          <div style={{ border: "2px solid black", padding: "20px" }}>
            <h2>App component--</h2>
            <Pass.Provider value={name}>
              <First />
            </Pass.Provider>
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
        </div>
      )}

      <BrowserRouter>
        <div className="header">
          <Link to={"/"}>Home</Link>
          <Link to={"/About"}>About</Link>
          <Link to={"/Service"}>Service</Link>
          <Link to={"/Contact"}>Contact</Link>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Service" element={<Service />}>
            <Route path="Appdevelopment" element={<AppDev />} />
            <Route path="webdevelopment" element={<WebDev />} />
          </Route>
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
