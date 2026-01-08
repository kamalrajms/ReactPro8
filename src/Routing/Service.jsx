import React from "react";
import { Link, Outlet } from "react-router-dom";
import Chat from "../ChatApp/Chat";

export default function Service() {
  return (
    <div>
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
