import React from "react";
import LoginForm from "./LoginForm";
import Logo from "./../../Pages/HeaderComponent/Logo";

const Login = () => {
  return (
    <section id="authBlock">
      <article>
        <Logo />
        <div className="authContent">
          <h1>To continue, log in to Spotify.</h1>
          <button>sign up With Facebook</button>
          <p className="orBlock">
            <strong>or</strong>
          </p>
        </div>
        <div className="formContent">
          <LoginForm />
        </div>
      </article>
    </section>
  );
};

export default Login;
