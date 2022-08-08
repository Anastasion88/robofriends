import React, { useState, useEffect } from 'react';
//import { robots } from '../robots';
import Cardlist from '../components/Cardlist';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';

// STATE - description of app, Object

// State is saying it's a smart component
function App() {
  // Old use of React without Hooks
  // constructor() {
  //   super();
  //   // states can change and live in parent component
  //   this.state = {
  //     robots: robots,
  //     searchfield: '',
  //   };
  // }

  // useState hook uses: 1. Object robots, func setRobots to change robots object,
  // useState([] - array ) -gives initial state
  const [robots, setRobots] = useState([]);
  const [searchfield, setSearchfield] = useState('');
  const [count, setCount] = useState(0);

  // Old use of React without Hooks
  // Mounting hook
  // componentDidMount() {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //     .then((Response) => Response.json())
  //     .then((users) => this.setState({ robots: users }));
  // }

  // Gets run everytime when App func runs. It needs to take array as a second argument
  // Without array as second arg - it will run  setRobots in continious loop
  // [] - only run useEffect if values didn't change between rerender, replicate componentDidMount()
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((Response) => Response.json())
      .then((users) => setRobots(users));
    console.log(count);
  }, [count]); // only run if count changes

  const onSearchChange = (event) => {
    setSearchfield(event.target.value);
  };

  const filteredRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchfield.toLowerCase());
  });

  // example of Loading bar for page
  return !robots.length ? (
    <h1>Loading</h1>
  ) : (
    <div className="tc">
      <h1 className="f1">Robofriends</h1>
      <button
        className="f6 grow no-underline br-pill ph3 pv2 mb2 dib mid-gray bg-lightest-blue"
        onClick={() => setCount(count + 1)}
      >
        Click Me!
      </button>
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        <ErrorBoundry>
          <Cardlist robots={filteredRobots} />
        </ErrorBoundry>
      </Scroll>
    </div>
  );
}

// Lifecycle methods/hooks : Mounting, Updating, Unmounting
// These hooks will automatically triggers when website loads
// Mounting - called when an instnce of component is being created and inserted into DOM
// Mounting - start of the App when we replace App page with App word in index.js landing page
// Mounting goes step by step checking functions in order:
// 1. constructor()
// 2. render()
// 3. componentDidMount()

// Updating - when component changes
// 1. static getDerivedStateFromProps()
// 2. shouldComponentUpdate()
// 3. render()
// 4. getSnapshotBeforeUpdate()
// 5. componentDidUpdate()

// Unmounting - when component been removed from the page
// 1. componentWillUnmount()

// Hooks allow you to reuse stateful logic without changing your component hierarchy.
// Hook is a special function that lets you “hook into” React features.

// useState hook -  lets you add React state to function components

// useEffect Hook -lets you perform side effects in function components.
// UseEffect Hook as componentDidMount, componentDidUpdate, and componentWillUnmount combinedx

export default App;
