import React from "react";

export default function Greeting({ name, age }) {
  return (
    <div>
      <h2>
        hello every one---{name}---{age}
      </h2>
    </div>
  );
}
// import React from "react";

// export default function Greeting(props) {
//   return (
//     <div>
//       <h2>hello every one--{props.name}</h2>
//     </div>
//   );
// }
