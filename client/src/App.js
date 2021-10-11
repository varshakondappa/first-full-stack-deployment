import Main from "./views/Main";
import "./App.css";
import { Router } from "@reach/router";
import NamesById from "./views/NamesById";
import Updated from "./views/Updated";

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/" />
        <NamesById path="/people/:id" />
        <Updated path="/people/:id/edit" />
      </Router>
    </div>
  );
}

export default App;
