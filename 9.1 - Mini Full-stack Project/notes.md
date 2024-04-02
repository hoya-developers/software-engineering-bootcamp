## Full stack project - Jeopardy

Today, we will be building a full stack project. We will be building a Jeopardy game. First, we'll set up an express server which will serve our data as a JSON. Then, we'll build a React app that will consume this data and display it to the user.

You can find an example at [here.](https://github.com/colingraydon/hoya-devs-jeopardy)

## Starting the project

First, we'll set up our express server. We'll need to install express and nodemon, along with types for express and typescript. Do this in a backend directory.

`tsc init` to create a `tsconfig.json` file.

`npm install express nodemon`

`npm install -D @types/express`

You should also set up your scripts and edit your tsconfig.json file as needed. Examples can be found in my github repo.

Next, we navigate to the root of our project, and create a frontend directory with the following command.

`npx create-react-app frontend --template typescript`

## Backend

The backend is very simple. We create our data file, and then create a single route that serves this data as a JSON object.

It is important to use cors to allow the frontend to access the backend. You can install cors with `npm install cors` and then importing and using it in index.ts.

## Frontend

The frontend is a bit more complex. We need to create a Jeopardy board, and then create a way to display the questions and answers. We also need to create a way to keep track of the score.

First, we'll be fetching the data with a useEffect hook. We'll store this data in a state variable. We'll then map over this data to create our Jeopardy board.

Next, we'll create a way to display the questions and answers. We'll create a modal that will display the question when clicked. We'll also create a way to display the answer when the question is clicked.

Finally, we'll create a way to keep track of the score. We'll create a state variable to store the score, and then create a way to update this score when the user answers a question.

We'll have some basic CSS but do not have enough time to make this app really shine.

## Extra features

We'd like you to add one additional feature, along with some more CSS to have this app look better. Remember, you may be showing this to HR/recruiters for internships. Make it look good!

Here are some ideas for additional features:

- Add media queries to make the app responsive
- Let the user set the amount of teams
- Let the user name the teams
- Include some CSS to show when questions are answered
- Add a navbar with an about page and a rules page
- Add a timer for each question
- Zoom in on the question when clicked, then zoom out when the answer is clicked
