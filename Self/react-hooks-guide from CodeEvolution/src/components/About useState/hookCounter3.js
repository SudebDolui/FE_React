// $ This code explains useState() ===> Using Object(Recommended One.)

import React, { useState } from "react";

function HookCounter3() {
  const [name, setName] = useState({
    firstName: "",
    lastName: "",
  });
  return (
    <form>
      <input
        type="text"
        placeholder="First Name"
        value={name.firstName}
        onChange={(e) => setName({ ...name, firstName: e.target.value })}
      />
      <input
        type="text"
        placeholder="Last Name"
        value={name.lastName}
        onChange={(e) => setName({ ...name, lastName: e.target.value })}
      />
      <h3>{JSON.stringify(name)}</h3>
      <h4>Your First Name is: {name.firstName}</h4>
      <h4>Your Last Name is: {name.lastName}</h4>
      <h4>Your Full Name is: {`${name.firstName + " " + name.lastName}`}</h4>
    </form>
  );
}

export default HookCounter3;
