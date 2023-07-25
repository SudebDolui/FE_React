import React from "react";

function IndexAsKeyAntiPattern() {
  const names = ["Bruce", "Rio", "Professor"];
  const nameList = names.map((name, index) => (
    <h2 key={index}>
      {name} - {index}
    </h2>
  ));

  return <div>{nameList}</div>;
}

export default IndexAsKeyAntiPattern;
