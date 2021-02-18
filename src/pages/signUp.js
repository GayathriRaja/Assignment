import React, { useState, useEffect } from "react";
import { TextField, Button } from "@material-ui/core/";
// import Button from "@material-ui/core/Button";
import db, { firebaseApp, auth } from "../Firebase/firebase";
import { useHistory, Link } from "react-router-dom";
function SignUp() {
  const [inputFields, setInputFields] = useState({
    email: "",
    name: "",
    pwd: "",
    cpwd: "",
  });

  const [message, setMessage] = useState("");

  const history = useHistory();

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setInputFields({ ...inputFields, [name]: value });
    // console.log(e.target.value, key);
    // const temp = inputFields;
    // temp[key] = e.target.value;
    // //console.log("temp", temp);
    // setInputFields(temp);
  };

  const clickHandler = (e) => {
    e.preventDefault();
    // console.log(data);

    if (
      inputFields.pwd === inputFields.cpwd &&
      inputFields.email &&
      inputFields.name &&
      inputFields.pwd &&
      inputFields.cpwd
    ) {
      auth
        .createUserWithEmailAndPassword(inputFields.email, inputFields.pwd)
        .then((u) => {
          db.collection("users").doc(auth.currentUser.uid).set({
            email: inputFields.email,
            name: inputFields.name,
          });
          alert("Sign Up successfull");

          history.push("/login");
        })
        .catch(() => {
          setMessage("Password is not match");
        });
    }
  };

  useEffect(() => {
    // console.log("Input Value", inputFields);
  }, [inputFields]);

  return (
    <div
      style={{
        margin: "5% 25% 5% 20%",
        padding: "5%",
        border: "5px solid black",
      }}
    >
      <h3>SignUp</h3>
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
          type="text"
          name="name"
          className="textfield"
          id="standard-basic"
          label="Name"
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
        <TextField
          type="password"
          name="cpwd"
          className="textfield"
          id="standard-basic"
          label="Confirm Password"
          onChange={changeHandler}
        />
        <br></br>
        <br></br>

        <Link to="/login"> Already a user? Login </Link>
        <br></br>
        <br></br>

        <Button
          type="submit"
          className="loginbutton1"
          color="default"
          variant="contained"
        >
          Register
        </Button>
        <label>{message}</label>
      </form>
      ;
    </div>
  );
}

export default SignUp;
