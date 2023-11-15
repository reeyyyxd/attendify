// App.js
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import IndexStudent from "./indexStudent";

 function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/indexStudent" component={IndexStudent} />
      </Switch>
    </Router>
  );
}
export default App;