import React, { useReducer } from "react";

export default function UesReducerForm() {
  const initialState = {
    name: "",
    email: "",
    password: "",
  };
  function formReducer(state, action) {
    return {
      ...state,
      [action.field]: action.value,
    };
  }

//   action={
//          field: password,
//          value: state.password,
//   }
  const [state, dispatch] = useReducer(formReducer, initialState);

  function handleChange(e) {
    dispatch({
      field: e.target.name,
      value: e.target.value,
    });
  }

//  dispatch({
//       field: password,
//       value: state.password,
//     })
  return (
    <div>
      <h2>Register Form</h2>
      <input
        name="name"
        type="text"
        placeholder="Enter name"
        value={state.name}
        onChange={handleChange}
      />
      <input
        name="email"
        type="text"
        placeholder="Enter email"
        value={state.email}
        onChange={handleChange}
      />
      <input
        name="password"
        type="text"
        placeholder="Enter password"
        value={state.password}
        onChange={handleChange}
      />
    </div>
  );
}
