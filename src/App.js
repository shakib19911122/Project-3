import React from "react";
// import Testing from "./components/Testing/index";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import SenderUI from "./components/SenderUI";
import DriverUI from "./components/DriverUI";
import NoMatch from "./components/NoMatch"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
  <Router> 
   <div>
      <Switch>
        <Route exact path="/" component={SignIn} />
        <Route exact path="/Signup" component={SignUp} />
        {/* will need to do the below based on ID */}
        <Route exact path="/SenderUI" component={SenderUI} /> 
        <Route exact path="/DriverUI" component={DriverUI} />
        <Route exact component={NoMatch} />
      </Switch>
    </div>
  </Router>
  )
}

export default App;
