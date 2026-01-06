import React, { useState } from "react";
import Button from "./Button";

export default function OXgame() {
  const [xNext, setXnext] = useState(true);
  const [square, setSquare] = useState(Array(9).fill(null));
  function handleClick(i) {
    if (square[i]) {
      return;
    }
    const nextSquare = square.slice();

    if (xNext) {
      nextSquare[i] = "x";
    } else {
      nextSquare[i] = "o";
    }
    setSquare(nextSquare);
    setXnext(!xNext);
  }
  return (
    <div>
      <div>
        <Button value={square[0]} onsquareclick={() => handleClick(0)} />
        <Button value={square[1]} onsquareclick={() => handleClick(1)} />
        <Button value={square[2]} onsquareclick={() => handleClick(2)} />
      </div>
      <div>
        <Button value={square[3]} onsquareclick={() => handleClick(3)} />
        <Button value={square[4]} onsquareclick={() => handleClick(4)} />
        <Button value={square[5]} onsquareclick={() => handleClick(5)} />
      </div>
      <div>
        <Button value={square[6]} onsquareclick={() => handleClick(6)} />
        <Button value={square[7]} onsquareclick={() => handleClick(7)} />
        <Button value={square[8]} onsquareclick={() => handleClick(8)} />
      </div>
    </div>
  );
}
