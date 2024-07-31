import React, { useState, useEffect } from "react";
import { Col, Container, Row, Form, Button, Alert } from "react-bootstrap";
import "./LoginPage.scss";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchUserAction } from "../../redux/actions";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    let timer;
    if (error) {
      timer = setTimeout(() => {
        setError("");
      }, 3000);
    }
    return () => clearTimeout(timer);
  }, [error]);

  const handleLogin = () => {
    if (email && password) {
      const loginObject = { email, password };
      console.log("Login Object:", loginObject);
      dispatch(fetchUserAction(loginObject, navigate, setError));
    } else {
      setError("Please enter both email and password.");
    }
  };

  return (
    <Container fluid className="login-container">
      <Row>
        <Col className="login-column d-flex justify-content-center align-items-center" xs={6}>
          <Form className="login-form">
            {error && (
              <Alert variant="danger" className="custom-alert">
                {error}
              </Alert>
            )}
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Control type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <div className="d-flex flex-column justify-content-center">
              <Button className="login-button" onClick={handleLogin}>
                Login
              </Button>
              <Link className="mt-2 register-link" to="/register">
                <p>Not a member yet?</p>
              </Link>
            </div>
          </Form>
        </Col>
        <Col className="wallpaper-column" xs={6}></Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
