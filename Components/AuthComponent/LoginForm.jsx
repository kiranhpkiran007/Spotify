import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { toast } from "react-toastify";
import firebase from "../../FireBase";

const LoginForm = ({ history }) => {
  let [state, setState] = useState({
    email: "",
    password: "",
    loading: "false",
  });
  let { email, password, loading } = state;

  let handleChange = e => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  let handleSubmit = async e => {
    e.preventDefault();
    try {
      setState({ loading: true });
      let userData = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
      //   console.log(userData);
      //   toast.success(`successfully ${email} has been logged in`);
      if (userData.user.emailVerified === true) {
        toast.success(`successfully ${email} logged in`);
        history.push("/");
      } else {
        history.push("/login");
        toast.error(
          `email  is not yet verified go to ${email} verify than login`
        );
      }
    } catch (error) {
      toast.error(error.message);
    }
    setState({ loading: "false" });
  };
  return (
    <div className="addForm">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email address or username</label>
          <input
            type="email"
            className="form-control"
            name="email"
            id="email required"
            placeholder="Email address or username"
            value={email}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            id="password required"
            placeholder=" Password"
            value={password}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <input
            type="checkbox"
            className="form-control"
            name="checkbox"
            id="checkbox"
          />
          <span className="checkBoxContent">Remember me</span>
        </div>

        <div className="form-group btn-group">
          <button>{loading == true ? "Loading" : "Sign Up"}</button>
        </div>
        <div className="form-group">
          <p>
            Don't have an account? <Link to="/signup">SIGN UP FOR SPOTIFY</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default withRouter(LoginForm);
