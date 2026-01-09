import React from "react";
import { Link, Outlet } from "react-router-dom";
import Chat from "../ChatApp/Chat";
import Cred from "../Component/Cred";

export default function Service() {
  return (
    <div>
      <Cred/>
      <h2>Service component</h2>
      <Chat />
      <div>
        <Link to={"Appdevelopment"}>App development</Link>
        <Link to={"webdevelopment"}>web development</Link>
        <Outlet />
      </div>
    </div>
  );
}
