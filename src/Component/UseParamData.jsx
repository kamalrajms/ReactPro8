import React, { useState, useEffect, useId } from "react";
import { data } from "react-router-dom";
import { Link } from "react-router-dom";

export default function UseParamData() {
  const [user, setUser] = useState([]);
  const idname = useId();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
      });
  }, []);
  console.log(idname);
  //   console.log(user);

  return (
    <div>
      <h1>User data</h1>
      <ul>
        {user.map((user) => (
          <li id={idname} key={user.id}>
            <Link to={`/blogs/:${user.name}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
