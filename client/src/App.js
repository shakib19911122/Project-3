import React from "react";
// import Testing from "./components/Testing/index";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/Login";
import SenderUI from "./pages/Sender";
import DriverUI from "./pages/Driver";
import NoMatch from "./components/NoMatch"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
  <Router> 
   <div>
      <Switch>
        <Route exact path="/" component={SignIn} />
        <Route exact path="/Signup" component={SignUp} />
        <Route exact path="/senderui" component={SenderUI} /> 
        <Route exact path="/driverui" component={DriverUI} />
        <Route exact component={NoMatch} />
      </Switch>
    </div>
  </Router>
  )
}

export default App;
