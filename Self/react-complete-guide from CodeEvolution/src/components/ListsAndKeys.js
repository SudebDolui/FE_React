import React from "react";

function ListAndKey() {
  //   const names = ["Bruce", "Diana", "Rio", "Professor"];
  const persons = [
    {
      id: 1,
      name: "Bruce",
      age: 30,
      skill: "React",
    },
    {
      id: 2,
      name: "Diana",
      age: 29,
      skill: "Angular",
    },
    {
      id: 3,
      name: "Rio",
      age: 20,
      skill: "Vue",
    },
    {
      id: 4,
      name: "Professor",
      age: 38,
      skill: "Full Stack",
    },
    {
      id: 5,
      name: "Brazil",
      age: 36,
      skill: "MERN Stack",
    },
  ];
  //   const nameList = names.map((name) => <h2>{name}</h2>);
  const personsList = persons.map((person) => (
    //   key={person.id}
    <h2>
      I am {person.name}. I am {person.age} Years Old and I am proficient in{" "}
      {person.skill}. My ID is {person.id}.
    </h2>
  ));

  return (
    <div>
      {/* <h2>{names[0]}</h2>
      <h2>{names[1]}</h2>
      <h2>{names[2]}</h2>
      <h2>{names[3]}</h2>
      <h2>{names[4]}</h2> */}
      {personsList}
      {/* <button>Button</button> */}
    </div>
  );
}

export default ListAndKey;
