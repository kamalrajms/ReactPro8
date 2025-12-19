import React from "react";

export default function ListRender() {
  // eg1
  const fruits = ["apple", "banana", "Mango", "grapes", "orange"];
  //eg2
  const users = [
    // { id: 1, name: "Kumar" },
    // { id: 2, name: "hari" },
    // { id: 3, name: "rahul" },
  ];

  return (
    <div>
      {/* eg1 */}
      <h3>fruits data</h3>
      <ul>
        {fruits.map((name, ind) => (
          <li key={ind}>{name}</li>
        ))}
      </ul>
      {/* /eg2 */}
      <h3>user data</h3>

      {users.length > 0 ? (
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      ) : (
        <p>No data is found</p>
      )}
    </div>
  );
}
// user={id1,name:"kumar"}
// console.log(user.name);
