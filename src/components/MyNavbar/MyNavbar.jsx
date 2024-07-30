import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import GVlogo from "../../assets/GVlogo.png";
import "./MyNavbar.scss";
import SearchBar from "../SearchBar/SearchBar";
import { CgProfile } from "react-icons/cg";

const MyNavbar = () => {
  return (
    <Navbar className="py-0">
      <Container fluid className="d-flex justify-content-between align-items-center m-0">
        <Navbar.Brand href="/" className="navbar-brand">
          <img src={GVlogo} alt="logo" width="60" />
        </Navbar.Brand>
        <SearchBar />
        <div className="navbar-login">
          <Link to="http://localhost:5173/login">
            <CgProfile size={33} className="login-icon" />
          </Link>
        </div>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
