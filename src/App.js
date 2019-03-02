import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./views/HomePage";
import AddingPage from "./views/AddingPage";
import Header from "./components/Header";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route exact path="/" component={HomePage} />
          <Route path="/add" component={AddingPage} />
        </div>
      </Router>
    );
  }
}

export default App;
