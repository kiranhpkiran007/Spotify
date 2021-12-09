import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import firebase from "../../FireBase";
import { toast } from "react-toastify";
const SignUpForm = ({history}) => {
  let [state, setState] = useState({
    email: "",
    email1: "",
    password: "",
    profile_name: "",
    month: "",
    dd: "",
    yy: "",
    gender: "",
    loading: "false",
  });
  let {
    email,
    email1,
    password,
    profile_name,
    month,
    dd,
    yy,
    gender,
    loading,
  } = state;

  let handleChange = e => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  let handleSubmit = async e => {
    e.preventDefault();

    try {
      // console.log(state);
      setState({ loading: true });
      if (email === email1) {
        let USER_DATA = await firebase
          .auth()
          .createUserWithEmailAndPassword(email, password);
        let confirmMessage = `A verification Message has been sent to ${email} verify and login`;
        USER_DATA.user.sendEmailVerification();
        toast.info(confirmMessage);
        history.push('/login')
        // console.log(USER_DATA);
        // toast.success("successfully user register");
      } else {
        toast.error("confirm email is not matching");
      }
    } catch (error) {
      toast.error(error.message);
    }
    setState({ loading: "false" });
  };
  return (
    <div className="addForm">
      <h2>Sign up with your email address</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">What's your email?</label>
          <input
            type="email"
            className="form-control"
            name="email"
            id="email required"
            placeholder=" enter your email"
            value={email}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email1">Confirm your email</label>
          <input
            type="email"
            className="form-control"
            name="email1"
            id="email1"
            placeholder=" enter your email again"
            value={email1}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Create a password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            id="password required"
            placeholder=" create password"
            value={password}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="profile_name">What should we call you?</label>
          <input
            type="text"
            className="form-control"
            name="profile_name"
            id="profile_name "
            placeholder=" Enter a Profile Name"
            value={profile_name}
            onChange={handleChange}
          />
          <p>This appears on your profile</p>
        </div>
        {/* date */}

        <div className="form-group">
          <label htmlFor="date">What's your date of birth?</label>
          <div className="dateBlock">
            <input
              type="text"
              placeholder="month"
              name="month"
              required
              value={month}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="dd"
              name="dd"
              required
              value={dd}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="YYYY"
              name="yy"
              required
              value={yy}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* gender */}

        <div className="form-group">
          <label htmlFor="">What's your gender?</label>
          <main className="genderBlock" onChange={handleChange} value={gender}>
            <span>
              <input
                type="radio"
                className="form-control"
                name="gender"
                value="male"
              />
              Male
            </span>
            <span>
              <input
                type="radio"
                className="form-control"
                name="gender"
                value="female"
              />
              Female
            </span>
            <span>
              <input
                type="radio"
                className="form-control"
                name="gender"
                value="Non-binary"
              />
              Non-binary
            </span>
          </main>
        </div>

        <div className="form-group">
          <input
            type="checkbox"
            className="form-control"
            name="checkbox"
            id="checkbox"
          />
          <span className="checkBoxContent">
            Share my registration data with Spotify's content providers for
            marketing purposes.
          </span>
        </div>
        <div>
          <p className="copyWriteText">
            <p>
              By clicking on sign-up, you agree to Spotify's Terms and
              Conditions of Use.
            </p>
            <br />
            To learn more about how Spotify collects, uses, shares and protects
            your personal data, please see Spotify's Privacy Policy.
          </p>
        </div>
        <div className="form-group btn-group">
          <button>{loading == true ? "Loading" : "Sign Up"}</button>
        </div>
        <div className="form-group">
          <p>
            Have an account? <Link to="/login">Log in.</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default withRouter(SignUpForm);
