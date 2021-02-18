import React, { useState, useEffect } from "react";
import { TextField, Button } from "@material-ui/core/";
import { useHistory, Link } from "react-router-dom";
import db, { firebaseApp, auth } from "../Firebase/firebase";
import firebase from "firebase";

function Login() {
  const [message, setMessage] = useState("");

  const [inputFields, setInputFields] = useState({
    email: "",
    pwd: "",
  });

  const history = useHistory();

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setInputFields({ ...inputFields, [name]: value });
  };

  const clickHandler = (e) => {
    e.preventDefault();
    // console.log("Click Handler");
    firebase
      .auth()
      .signInWithEmailAndPassword(inputFields.email, inputFields.pwd)
      .then(() => {
        alert("Login Successfull");
        history.push("/home");
      })
      .catch(() => {
        setMessage("email or password incorrect!.");
      });
  };

  useEffect(() => {
    console.log("inputFields", inputFields);
  });

  return (
    <div
      style={{
        margin: "5% 25% 5% 25%",
        padding: "5%",
        border: "5px solid black",
      }}
    >
      <h3>Login</h3>
      <form noValidate autoComplete="off" onSubmit={clickHandler}>
        <TextField
          type="text"
          name="email"
          className="textfield"
          id="standard-basic"
          label="Email"
          onChange={changeHandler}
        />

        <br></br>

        <TextField
          type="password"
          name="pwd"
          className="textfield"
          id="standard-basic"
          label="Password"
          onChange={changeHandler}
        />
        <br></br>
        <br></br>

        <Link to="/"> New User? SignUp </Link>
        <br></br>
        <br></br>

        <Button
          type="submit"
          className="loginbutton1"
          color="default"
          variant="contained"
        >
          Login
        </Button>
        <br />
        <br />

        <label>{message}</label>
      </form>{" "}
    </div>
  );
}

export default Login;
