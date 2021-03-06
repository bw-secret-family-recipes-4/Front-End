import React, { useState, useEffect } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import formschema from "./formschema";
import * as yup from "yup";
import { useAlert } from "react-alert";
import { useHistory } from "react-router-dom";
import { Div, Label } from "../components.style";

const initial = {
  username: "",
  password: "",
  terms: false,
};
const errors = {
  username: "",
  password: "",
  terms: "",
};

const Signup = () => {
  const [content, setContent] = useState(initial);
  const [contentError, setContentError] = useState(errors);
  const [disb, setdisb] = useState(true);
  const history = useHistory();
  const alert = useAlert();

  function handleC(event) {
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

  function handleBox(event) {
    const { name, checked } = event.target;
    setContent({
      ...content,
      [name]: checked,
    });
  }

  function Submit(event) {
    event.preventDefault();
    const newMember = {
      username: content.username.trim(),
      password: content.password.trim(),
    };
    if (!newMember.username || !newMember.password) {
      return;
    }
    setContent(initial);
    postUser(newMember);
    history.push("/login");
  }

  const postUser = (newUser) => {
    axiosWithAuth()
      .post("/auth/register", newUser)
      .then((response) => {
        console.log(response);
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
    <Div>
      <h2>Sign Up</h2>
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
        <Label htmlFor="Terms of Service">
          <input
            name="terms"
            type="checkbox"
            checked={content.terms === true}
            onChange={handleBox}
          />
          Terms of Service
        </Label>
        <div>
          <button
            disabled={disb}
            type="submit"
            onClick={() => {
              alert.show("Sign Up Successful!");
            }}
          >
            Sign Up
          </button>
        </div>
        <div>
          <div>
            {contentError.username}
            <br />
            {contentError.password}
            <br />
            {contentError.terms}
          </div>
        </div>
      </form>
    </Div>
  );
};

export default Signup;
