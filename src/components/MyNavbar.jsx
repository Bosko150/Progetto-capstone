import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import GVlogo from "../assets/GVlogo.png";

const MyNavbar = () => {
  return (
    <Navbar className="bg-dark justify-content-center py-0">
      <Container className="mx-0">
        <Navbar.Brand href="#home">
          <img src={GVlogo} alt="logo" width="80" />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Link to="/login">
            <Button className="ms-5">Login</Button>
          </Link>
          <Link to="/register">
            <Button className="ms-5">Register</Button>
          </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
