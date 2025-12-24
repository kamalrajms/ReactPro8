import React from "react";

export default function ConditionalRendering() {
  const IsLogged = true;
  return (
    <div className="conditionalrendering">
      {/* ternary operator */}
      {IsLogged ? <p>Welcome</p> : <p>Please login...!</p>}

      {/* logical Operator */}
      {IsLogged && (
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci
          minima possimus consequuntur. Fugit, consequuntur quidem, ad vero id
          rerum ratione non, nulla odio cumque voluptas assumenda repellendus
          minus facere itaque?
        </p>
      )}
    </div>
  );
}
