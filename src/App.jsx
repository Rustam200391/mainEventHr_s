import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import DashboardPage from "./pages/DashboardPage";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/dashboard" component={DashboardPage} />
      </Switch>
    </Router>
  );
}

export default App;
