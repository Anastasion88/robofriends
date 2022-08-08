import React, { Component } from 'react';
import { robots } from '../robots';
import Cardlist from '../components/Cardlist';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';

// STATE - description of app, Object

// State is saying it's a smart component
class App extends Component {
  constructor() {
    super();
    // states can change and live in parent component
    this.state = {
      robots: robots,
      searchfield: '',
    };
  }

  // Mounting hook
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((Response) => Response.json())
      .then((users) => this.setState({ robots: users }));
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const { robots, searchfield } = this.state;
    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });

    // example of Loading bar for page
    return !robots.length ? (
      <h1>Loading</h1>
    ) : (
      <div className="tc">
        <h1 className="f1">Robofriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <ErrorBoundry>
            <Cardlist robots={filteredRobots} />
          </ErrorBoundry>
        </Scroll>
      </div>
    );
  }
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

export default App;
