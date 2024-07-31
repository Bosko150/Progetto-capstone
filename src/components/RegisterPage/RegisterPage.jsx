import React, { useState } from "react";
import { Col, Container, Row, Form, Button, Alert } from "react-bootstrap";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./RegisterPage.scss";

const RegisterPage = () => {
  const [name, setFirstName] = useState("");
  const [surname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const navigate = useNavigate(); // Importa useNavigate

  const handleRegister = async () => {
    try {
      const response = await axios.post("http://localhost:3001/auth/register", {
        username,
        email,
        password,
        name,
        surname,
      });
      console.log("Response:", response.data);
      setSuccess("Registration successful! You'll be redirected to the login page.");

      setError(null);

      setTimeout(() => {
        navigate("/login");
      }, 3000);
    } catch (err) {
      console.error("Error registering:", err.response?.data?.message || err.message);
      setError(err.response?.data?.message || "An error occurred during registration.");
      setSuccess(null);
    }
  };

  return (
    <Container fluid className="register-container">
      <Row>
        <Col className="register-column d-flex justify-content-center align-items-center" xs={6}>
          <Form className="register-form">
            {error && (
              <Alert variant="danger" className="custom-alert">
                {error}
              </Alert>
            )}
            {success && (
              <Alert variant="success" className="custom-alert">
                {success}
              </Alert>
            )}
            <Form.Group className="mb-3" controlId="formFirstName">
              <Form.Control
                type="text"
                placeholder="First Name"
                value={name}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formLastName">
              <Form.Control
                type="text"
                placeholder="Last Name"
                value={surname}
                onChange={(e) => setLastName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Control type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formUsername">
              <Form.Control
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
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
              <Button className="register-button" onClick={handleRegister}>
                Register
              </Button>
              <Link className="mt-2 login-link" to="/login">
                <p>Already have an account?</p>
              </Link>
            </div>
          </Form>
        </Col>
        <Col className="wallpaper-column" xs={6}></Col>
      </Row>
    </Container>
  );
};

export default RegisterPage;
