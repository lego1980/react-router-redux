//core
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createStore } from 'redux'

//requried for reactstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/App.css';

//core components
import TopNavbar from '../components/TopNavbar';

//pages components
import Home from '../pages/Home';
import About from '../pages/About';
import Register from '../pages/Register';
import Error from '../pages/Error';
import Account from '../pages/Account';

//reducers
import { appStore } from '../reducers'

//actions
import { getUsers, postUsers } from '../actions/usersActions'
import { getTodos, postTodos } from '../actions/todosActions'

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
      <BrowserRouter>
        <div>
          <TopNavbar />
          <div className="App">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about/" exact component={About} /> 
            <Route path="/register/" exact component={Register} />
            <Route path="/account/" exact component={Account} />
            <Route component={Error} />   
          </Switch>
          { 
            /*
            <header className="Main-header">
            <MainLogo alt="ReactStrap Body"/>
            <p>
              Edit <code>src/Main.js</code> and save to reload.
            </p>
            </header>
            */ 
          }
          </div>
        </div>         
      </BrowserRouter>
    );
  }
}

export default App;
