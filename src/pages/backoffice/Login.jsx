import React, { useRef, useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { firestoreFetchSetting } from "../../firebase/fireStoreFetch";

const Login = ({ setGoBack }) => {
  const user = useRef("");
  const pass = useRef("");

  const [login, setLogin] = useState([]);

  const getDataSettings = async () => {
    try {
      const loginData = await firestoreFetchSetting("/login/");
      setLogin(() => loginData);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getDataSettings().then(() => {});
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    document.getElementById("error").innerHTML = "";
    document.getElementById("error").style.display = "none";
    if (
      login[0].user !== user.current.value ||
      login[0].pass !== pass.current.value
    ) {
      document.getElementById("login-form").reset();
      document.getElementById("error").style.display = "inline";
      document.getElementById("error").innerHTML = "Datos incorrectos";
    } else {
      await setGoBack((prev) => !prev);
    }
  };

  return (
    <div className="login-div">
      <Form onSubmit={(e) => handleSubmit(e)} id="login-form">
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Usuario</Form.Label>
          <Form.Control type="text" ref={user} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPass">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control type="password" ref={pass} />
        </Form.Group>
        <Button type="submit">Entrar</Button>
      </Form>
      <h3 id="error" style={{ color: "red" }}>
        {""}
      </h3>
    </div>
  );
};

export default Login;
