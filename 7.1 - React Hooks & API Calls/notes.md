## useEffect

useEffect is a hook that allows you to perform side effects in your functional components. It is similar to componentDidMount, componentDidUpdate, and componentWillUnmount in class components. It is typically used to perform data fetching, subscriptions, or manually changing the DOM in React components.

Essentially, useEffect is a replacement for the lifecycle methods in class components. It is called after every render of the component by default. You can also specify when you want the effect to run by passing a second argument to useEffect. This second argument is an array of dependencies. If the dependencies change, the effect will run again. If the dependencies do not change, the effect will not run again.

It can also be used to create make derived state from props or state, and to perform cleanup.
