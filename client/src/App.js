import Landing from "./app/Landing";
import Footer from "./app/shared/Footer";
import Header from "./app/shared/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./app/auth/Login";
import Register from "./app/auth/Register";
function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
