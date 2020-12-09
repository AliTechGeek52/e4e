import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Homepage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
