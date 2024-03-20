//no catch block
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((json) => console.log(json));

//catch blocks.
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((json) => {
    console.log(json);
  })
  .catch((error) =>
    console.log("There was a problem with the fetch operation:", error)
  )
  .catch((error) => console.log("error with the .json() method:", error));

const getData = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const json = await data.json();
  console.log(json);
};

getData();

// try catch block
const getData2 = async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/10"
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
};
