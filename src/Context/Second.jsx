import React from 'react'
import Third from './Third'

export default function Second({name}) {
  return (
    <div style={{ border: "2px solid black", padding: "20px" }}>
      <h2>Second component</h2>
      <Third name={name}/>
    </div>
  )
}
