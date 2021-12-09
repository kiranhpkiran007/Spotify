import React, { Fragment, useContext } from "react";
import Navbar from "./Pages/HeaderComponent/Navbar";
import "./index.css";

import Slider from "./Pages/SliderComponent/Slider";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./Pages/Home";
import Login from "./Components/AuthComponent/Login";
import Signup from "./Components/AuthComponent/Signup";
import PageNotFount from "./Pages/PageNotFount";
import { AuthContextApi } from "./Apis/AuthContext";
import UserHome from "./UserComponents/UserHome";
const App = () => {
  let state = useContext(AuthContextApi);

  return (
    <section id="SpotifyMainBlock">
      <article>
        <Router>
          <header>
           {!state?  <Navbar />:""}
          </header>
          <ToastContainer />
          <main>
            {/* dynamic routin starts here */}
            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>
              <Route path="/login" exact>
                <Login />
              </Route>
              <Route path="/signup" exact>
                <Signup />
              </Route>
              <Route path="/user">
                <UserHome/>
              </Route>
              <Route path="/pagenotfount" exact>
                <PageNotFount />
              </Route>
            </Switch>
          </main>
        </Router>
      </article>
    </section>
  );
};

export default App;
