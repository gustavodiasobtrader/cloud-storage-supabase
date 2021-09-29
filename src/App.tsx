import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import PrivateRoute from "./hoc/PrivateRoute";
import LoginPage from "./pages/login/LoginPage";
import RegisterPage from "./pages/register/RegisterPage";
import "./App.scss";
import supabaseClient from "./services/supabase.service";
import USER_STORE from "./store/user.store";
import { ToastContainer } from "react-toastify";

function App() {
  const saveUser = USER_STORE((state) => state.saveUser);
  const user = USER_STORE((state) => state.user);

  useEffect(() => {
    const subscription = supabaseClient.auth.onAuthStateChange(
      (event, session) => {
        console.log(event);

        if (event === "SIGNED_OUT") {
          saveUser(null);
        }

        if (event === "SIGNED_IN") {
          saveUser(supabaseClient.auth.user());
        }
      }
    );
    initializeUser();

    return () => {
      subscription.data?.unsubscribe();
    };
  });

  function initializeUser() {
    const user = supabaseClient.auth.user();

    if (user) {
      saveUser(user);
    }
  }

  return (
    <>
      <ToastContainer
        draggablePercent={60}
        autoClose={3000}
        toastStyle={{ backgroundColor: "black" }}
      />

      <Router>
        <Switch>
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
          <PrivateRoute
            isAuthenticated={Boolean(user)}
            path="/dashboard"
            component={Dashboard}
          />
        </Switch>
      </Router>
    </>
  );
}

export default App;
