import React from "react";
import useFetch from "./useFetch";

export default function CustomAPIData() {
  const {
    data: user,
    error,
    loading,
  } = useFetch("https://jsonplaceholder.typicode.com/users");

  if (loading) return <p> Loading...</p>;
  if (error) return <p style={{ color: "red" }}>{error} </p>;
  return (
    <>
      <div>
        <h3>Customer data</h3>

        {user.map((user) => (
          <div
            key={user.id}
            style={{ border: "1px solid black", padding: "15px" }}
          >
            <h3>{user.name}</h3>
            <h3>{user.email}</h3>
            
          </div>
        ))}
      </div>
    </>
  );
}
