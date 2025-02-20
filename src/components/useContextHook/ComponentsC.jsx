import { useContext } from "react";
import { Data, Data1 } from "../../App";

const ComponentsC = () => {
  const name = useContext(Data);
  const age = useContext(Data1);

  return (
    <div>
      <h1>My name is {name} and age is {age}</h1>
    </div>
  );
};

export default ComponentsC;
