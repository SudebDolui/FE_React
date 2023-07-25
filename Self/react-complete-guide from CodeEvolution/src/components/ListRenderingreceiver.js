import React from "react";

function ListRenderingreceiver({ person }) {
  return (
    <h2>
      I am {person.name}. I am {person.age} Years Old and I am proficient in{" "}
      {person.skill}. My ID is {person.id}.
    </h2>
  );
}

export default ListRenderingreceiver;
