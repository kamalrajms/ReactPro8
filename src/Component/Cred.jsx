import React, { useState, useEffect } from "react";
import { data } from "react-router-dom";

export default function Cred() {
  const [user, setUser] = useState([]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
      });
  }, []);
  console.log(user);

  const addItems = () => {
    const trimmedName = name.trim();
    const trimmedemail = email.trim();

    if (name && email) {
      fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        body: JSON.stringify({
          name: trimmedName,
          email: trimmedemail,
        }),
        headers: {
          "content-type": "application/json;chatset=UTF-8",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          const newUser = { ...data, id: user.length + 1 };
          setUser([...user, newUser]);
          setEmail("");
          setName("");
        });
    }
  };

  //   a={
  //     name:"kamal"
  //   }
  //   a={
  //     "name":"kamal"
  //   }

  const handleDelete = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        setUser((person) => {
          return person.filter((user) => user.id !== id);
        });
      });
  };

//   user=[
//     {},{},{},{},{},{},{},{},{},{},
//   ]
  return (
    <div>
      <h2>CRUD operation</h2>
      <table>
        <thead>
          <tr>
            <td>S.no</td>
            <td>Name</td>
            <td>email</td>
            <td>delete</td>
          </tr>
        </thead>
        <tbody>
          {user.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <button onClick={() => handleDelete(user.id)}>delete</button>
              </td>
            </tr>
          ))}
          <tr>
            <td></td>
            <td>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </td>
            <td>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </td>
            <td>
              <button onClick={addItems}>upDate</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
