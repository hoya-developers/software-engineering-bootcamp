import React, { useEffect, useState } from "react";

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = ({}) => {
  const [data, setData] = useState(null);

  //   useEffect(() => {
  //     const makeRequest = async () => {
  //       try {
  //         const response = await fetch(
  //           "https://jsonplaceholder.typicode.com/posts/1"
  //         );
  //         const res = await response.json();
  //         console.log(res);
  //         setData(res);
  //       } catch (err: unknown) {
  //         if (err instanceof Error) {
  //           console.log(err.message);
  //         } else {
  //           console.log("no clue what went wrong lmfoa");
  //         }
  //       }
  //     };

  //     makeRequest();
  //   });

  const [buttonData, setButtonData] = useState(null);

  const handleClick = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const res = await data.json();
    setButtonData(res);
  };

  return (
    <div>
      <h1>this is the button data</h1>
      <button onClick={handleClick}>click me</button>
      <div>{JSON.stringify(buttonData)}</div>
      <div>{JSON.stringify(data)}</div>
    </div>
  );
};

export default HomePage;
