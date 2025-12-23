import React, { useState } from "react";

export default function FormUsestate() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  //   console.log(formData);

  return (
    <div>
      <h2>Multiple fields input</h2>
      <input
        name="name"
        type="text"
        placeholder="enter name"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        name="email"
        type="email"
        placeholder="enter email"
        value={formData.email}
        onChange={handleChange}
      />
      <input
        name="age"
        type="number"
        placeholder="enter age"
        value={formData.age}
        onChange={handleChange}
      />
    </div>
  );
}
