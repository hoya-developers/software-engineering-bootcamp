import React, { useEffect } from "react";

const ButtonPage: React.FC = ({}) => {
  const [count1, setCount1] = React.useState<number>(0);
  const [count2, setCount2] = React.useState<number>(0);

  const handleClick1 = () => {
    setCount1(count1 + 1);
  };

  const handleClick2 = () => {
    setCount2(count2 + 1);
  };

  //note the effects for changing the dependency array
  useEffect(() => {
    console.log(`count1: ${count1} count2: ${count2}`);
  }, [count1]);

  //   useEffect(() => {
  //     console.log(`count1: ${count1} count2: ${count2}`);
  //   });

  return (
    <div>
      <h1>ButtonPage</h1>
      <button onClick={handleClick1}>Button 1</button>
      <button onClick={handleClick2}>Button 2</button>
      <div>count1: {count1}</div>
      <div>count2: {count2}</div>
      <div></div>
    </div>
  );
};

export default ButtonPage;
