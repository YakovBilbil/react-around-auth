import React, { useState } from "react";

import Header from "./Header";

const Register = ({ onChange, onSubmit }) => {
  const [email, setEmail] = useState("");
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    onChange(e);
  };

  const [password, setPassword] = useState("");
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    onChange(e);
  };

  return (
    <>
      <Header>
        <a className="header__sign-button" href="/react-around-auth/signin">
          Sign In
        </a>
      </Header>

      <div className="popup__container">
        <div className="popup__form popup__form_login">
          <form
            className="popup__form-submit"
            onSubmit={(e) => {
              e.preventDefault();
              onSubmit();
            }}
          >
            <h2 className="popup__form-title popup__form-title_login">
              Sign up
            </h2>

            <input
              type="email"
              name="email"
              id="email-input"
              placeholder="Email"
              className="popup__form-input popup__form-input_login"
              value={email || ""}
              onChange={handleEmailChange}
              required
            />

            <input
              type="password"
              name="password"
              id="password-input"
              placeholder="Password"
              className="popup__form-input popup__form-input_login"
              value={password || ""}
              onChange={handlePasswordChange}
              required
            />

            <button
              type="submit"
              className="popup__form-save-button popup__form-save-button_login"
            >
              Sign up
            </button>

            <a
              className="popup__form-save-button popup__form-save-button_sign"
              href="/react-around-auth/signin"
            >
              Already a member? Log in here!
            </a>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
