import React from "react";
import "./auth.css";
import Logo from "./../../Pages/HeaderComponent/Logo";
import SignUpForm from "./SignUpForm";


const Signup = () => {
  return (
    <section id="authBlock">
      <article>
        <Logo />
        <div className="authContent">
          <h1>Sign up for free to start listening.</h1>
          <button>sign up With Facebook</button>
          <p className="orBlock">
            <strong>or</strong>
          </p>
        </div>
        <div className="formContent">
          <SignUpForm/>
        </div>
      </article>
    </section>
  );
};

export default Signup;
