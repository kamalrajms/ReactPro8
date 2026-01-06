import React from "react";
import UseParamData from "../Component/UseParamData";
import OXgame from "../Game/OXgame";

export default function About() {
  return (
    <div>
      <h2>XO game</h2>
      <OXgame />
      <h2>About component</h2>
      <UseParamData />
    </div>
  );
}
