import { useState } from "react";

const RandomNumber = () => {
  const [random, setRandom] = useState(() => Math.floor(Math.random() * 100));

  const generateRandomNumber = () => {
    setRandom(Math.floor(Math.random() * 100));
  };

  return (
    <div>
      <h1>Random Number : {random}</h1>

      <button type="button" onClick={generateRandomNumber}>
        Generate Random Number
      </button>
    </div>
  );
};

export default RandomNumber;
