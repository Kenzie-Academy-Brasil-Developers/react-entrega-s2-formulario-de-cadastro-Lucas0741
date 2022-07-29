import "./App.css";
import { Form } from "./components/Form/index";
import { Greeting } from "./components/pages/Greeting/index";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route exact path="/">
            <Form />
          </Route>
          <Route exact path="/sucess/:id">
            <Greeting />
          </Route>
        </Switch>
      </header>
    </div>
  );
}

export default App;
