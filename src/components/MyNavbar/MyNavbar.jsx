import React from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import GVlogo from "../../assets/GVlogo.png";
import "./MyNavbar.scss";
import SearchBar from "../SearchBar/SearchBar";
import { FaDeleteLeft } from "react-icons/fa6";

const MyNavbar = () => {
  return (
    <Navbar className="py-0">
      <Container fluid className="d-flex justify-content-between align-items-center m-0">
        <Navbar.Brand href="/" className="navbar-brand">
          <img src={GVlogo} alt="logo" width="60" />
        </Navbar.Brand>
        <SearchBar />
        <div className="navbar-login">
          <Link to="/login">
            <Button>Login</Button>
          </Link>
        </div>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
