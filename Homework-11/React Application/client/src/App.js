import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Tasks from "./components/tasks/Tasks";
import Navigation from "./components/shared/Navigation";
import "./styles/global.scss";
import "react-toastify/dist/ReactToastify.css";
import Register from "./pages/Register";
import SignIn from "./pages/SignIn";
import User from "./components/user/User";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/sign-in">
          <SignIn />
        </Route>
        <Route path="/" exact>
          <Navigation />
          <Tasks />
        </Route>
        <Route path="/account">
          <Navigation />
          <User />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
