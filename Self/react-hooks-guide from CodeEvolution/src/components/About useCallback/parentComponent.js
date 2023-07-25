import React, { useCallback, useState } from "react";
import Title from "./title";
import Count from "./count";
import Button from "./button";

function ParentComponent() {
  const [salary, setSalary] = useState(5000000);
  const [age, setAge] = useState(25);

  const incrementSalary = useCallback(() => {
    setSalary(salary + 100000);
  }, [salary]);

  const incrementAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);

  return (
    <div>
      <Title />
      <Count text="Age" count={age} />
      <Button handleClick={incrementAge}>Increment Age</Button>
      <Count text="Salary" count={salary} />
      <Button handleClick={incrementSalary}>Increment Salary</Button>
    </div>
  );
}

export default ParentComponent;
