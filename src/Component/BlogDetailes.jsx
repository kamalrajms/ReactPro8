import React from "react";
import { useParams } from "react-router-dom";

export default function BlogDetailes() {
  const { id } = useParams();
  return (
    <div>
      <h2>BLog detailes--{id}</h2>
    </div>
  );
}
  