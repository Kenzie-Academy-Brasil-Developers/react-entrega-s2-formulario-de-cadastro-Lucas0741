import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Cadastro from "../components/cadastro";
import Card from "../components/Card";

function Routers() {
  const [user, setUser] = useState({});
  return (
    <Switch>
      <Route exact path="/">
        <Cadastro setUser={setUser} />
      </Route>
      <Route path={`/:name`}>
        <Card user={user} setUser={setUser} />
      </Route>
    </Switch>
  );
}
export default Routers;
