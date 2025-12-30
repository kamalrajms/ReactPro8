import React from 'react'
import Second from './Second'

export default function First({name}) {
  return (
    <div style={{ border: "2px solid black", padding: "20px" }}>
      <h2>First component--{name}</h2>
      <Second name={name}/>
    </div>
  )
}
