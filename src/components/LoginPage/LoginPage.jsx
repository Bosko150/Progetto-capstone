import React, { useState } from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import "./LoginPage.scss";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Logica di gestione del login
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <Container fluid className="login-container">
      <Row>
        <Col className="login-column d-flex justify-content-center align-items-center" xs={6}>
          <Form className="login-form">
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
            <div className="d-flex justify-content-center">
              <Button className="login-button" onClick={handleLogin}>
                Login
              </Button>
            </div>
          </Form>
        </Col>
        <Col className="wallpaper-column" xs={6}></Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
