import { useEffect } from "react";
import Landing from "./app/Landing";
import Footer from "./app/shared/Footer";
import Header from "./app/shared/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import Login from "./app/auth/Login";
import Register from "./app/auth/Register";
import { store } from "./store";
import setAuthToken from "./utils/setAuthToken";
import { loadUser } from "./actions/auth.actions";
import { LOGOUT } from "./constants/actionTypes";
import Dashboard from "./app/Dashboard";

function App() {
  useEffect(() => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    store.dispatch(loadUser());

    window.addEventListener("storage", () => {
      if (!localStorage.token) store.dispatch({ type: LOGOUT });
    });
  }, []);
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route component={Dashboard} />
        </Switch>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
