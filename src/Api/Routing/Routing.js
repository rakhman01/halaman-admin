import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TableAdmin from "../../Components/TableAdmin";
import Login from "../../Login";
import Register from "../../Register";
import Error from "../Error";

function Routing() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/TabelAdmin" component={TableAdmin} />
        <Route path="/*" component={Error} />
      </Switch>
    </Router>
  );
}

export default Routing;
