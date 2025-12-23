import React, { useState } from "react";

export default function RegForm() {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
    term: false,
  });
  const [error, setError] = useState("");
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };
  //   const handleChange1 = (e) => {
  //     const { name, value, type, checked } = e.target;
  //     setFormData({
  //       ...formData,
  //       [name]: checked,
  //     });
  //   };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.userName || !formData.email || !formData.password) {
      setError("All fields are required!");
      return;
    }
    if (!formData.term) {
      setError("accept checkbox");
      return;
    }
    setError("");
    alert("Form submitted successfully");
    console.log(formData);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Register form</h2>
        {error && <p style={{ color: "red" }}> {error}</p>}
        <input
          name="userName"
          type="text"
          value={formData.userName}
          onChange={handleChange}
          placeholder="enter a name"
        />
        <input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="enter a email"
        />
        <input
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="enter a password"
        />
        <input
          name="term"
          type="checkbox"
          checked={formData.term}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
