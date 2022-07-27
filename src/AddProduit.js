import React, { useState, useEffect } from "react";
/*
function Login(props) {
  const [isSubmit, setIsSubmit] = useState(false);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (isSubmit) {
      fetch("http://localhost:3004/login", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
        /*credentials: "include",
        credentials: "same-origin",
        body: JSON.stringify({ name: name, password: password }),
      })
        .then((response) => {
          return response.json();
        })
        .then((res) => {
          props.setIsAccess(res.isAccess);
          props.setIsAdmin(res.isAdmin);
          if (res.isAccess) {
            props.setPage("Products");
          }
        });
    }
  }, [isSubmit]);

  return (
    <div className="App-link">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          setName(event.target.username.value);
          setPassword(event.target.password.value);
          setIsSubmit(true);
        }}
      >
        <label for="fullname">Username</label>
        <input type="text" id="username" name="username"></input>
        <label for="password">Password</label>
        <input type="password" id="password" name="password"></input>
        <input type="submit" value="Login"></input>
      </form>
    </div>
  );
}

export default Login;
*/