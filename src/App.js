import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Hello from "./components/Hello";
import LoginCallback from "./components/LoginCallback";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header/>

          <Route exact path="/" component={Hello}/>
          <Route path="/callback" component={LoginCallback}/>
        </div>
      </Router>
    );
  }
}

export default App;
