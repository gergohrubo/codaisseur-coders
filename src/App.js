import React from 'react';
import logo from './logo.svg';
import './App.css';
import DevelopersList from './components/DevelopersList'
import Homepage from "./components/Homepage";
import Toolbar from './components/Toolbar'
import PostPage from './components/PostPage'
import LoginPage from './components/LoginPage'
import { Switch, Route } from "react-router-dom";

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Toolbar />
        <Switch>
          <Route path="/developers" component={DevelopersList} />
          <Route path="/login" component={LoginPage} />
          <Route component={Homepage} />
        </Switch>
        <Route path="/read/:id" component={PostPage} />
      </div>
    );
  }
}
