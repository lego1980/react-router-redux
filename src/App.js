import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//redux
import { createStore } from 'redux'
import { appStore } from './reducers'

//actions
import { getUsers, postUsers } from './actions/usersActions'
import { getTodos, postTodos } from './actions/todosActions'

const store = createStore(
  appStore,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// Log the initial state
console.log('initial state', store.getState());
store.dispatch(getUsers());
store.dispatch(getTodos());
console.log('get state', store.getState());
store.dispatch(postUsers());
store.dispatch(postTodos());
console.log('post state', store.getState());

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
