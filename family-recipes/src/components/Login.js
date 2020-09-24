import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import "./components.css";
import axiosWithAuth from "../utils/axiosWithAuth";
import formschema from "./formschema";
import * as yup from "yup";
import { useAlert } from "react-alert";
import { css } from "emotion";
import { Div, Label } from "../components.style";

const initial = {
  username: "",
  password: "",
};
const errors = {
  username: "",
  password: "",
};

const Login = () => {
  const [content, setContent] = useState(initial);
  const [contentError, setContentError] = useState(errors);
  const [disb, setdisb] = useState(true);
  const history = useHistory();
  const alert = useAlert();

  function handleC(event) {
    event.preventDefault();
    const { name, value } = event.target;
    yup
      .reach(formschema, name)
      .validate(value)
      .then((valid) => {
        setContentError({
          ...contentError,
          [name]: "",
        });
      })
      .catch((error) => {
        setContentError({
          ...contentError,
          [name]: error.errors[0],
        });
      });
    setContent({
      ...content,
      [name]: value,
    });
  }

  function Submit(event) {
    event.preventDefault();
    const member = {
      username: content.username.trim(),
      password: content.password.trim(),
    };
    if (!member.username || !member.password) {
      return;
    }
    setContent(initial);
    postUser(member);
    history.push("/protected")
  }
  const postUser = (user) => {
    axiosWithAuth()
      .post("/auth/login", user)
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        history.push("/protected");
        return response;
      })
      .then((response) => {
        localStorage.setItem("user_id", response.data.user_id);
      })
      .catch((error) => {
        console.error("Server Error", error);
      });
  };

  useEffect(() => {
    formschema.isValid(content).then((valid) => {
      setdisb(!valid);
    });
  });

  return (
    <>
      <Div>
        <h2>Log In</h2>
        <form onSubmit={Submit}>
          <Label>
            Username:
            <input
              name="username"
              type="text"
              placeholder="Enter Username"
              value={content.username}
              onChange={handleC}
            />
          </Label>
          <Label>
            Password:
            <input
              name="password"
              type="password"
              placeholder="Enter Password"
              value={content.password}
              onChange={handleC}
            />
          </Label>
          <div>
            <button
              disabled={disb}
              type="submit"
              onClick={() => {
                alert.show("Log In Successful!");
              }}
            >
              Sign In
            </button>
          </div>
          <div>
            <div>
              {contentError.username}
              <br />
              {contentError.password}
            </div>
          </div>
        </form>
      </Div>
      <h3>Don't have an account?</h3>
      <Link
        className={css`
          text-decoration: none;
          color: #dad8d8e0;
          padding: 0.3% 2%;
          border-radius: 5px;
          background-color: #33333342;
          color: #333333;
          &:hover {
            color: aliceblue;
            background-color: #333333;
          }
        `}
        to="/sign-up"
      >
        Sign Up Here!
      </Link>
    </>
  );
};

export default Login;
