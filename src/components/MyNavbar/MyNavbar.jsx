import React, { useState } from "react";
import { Button, Form, FormControl } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { FaSearch, FaTimes } from "react-icons/fa";
import GVlogo from "../../assets/GVlogo.png";
import "./MyNavbar.scss";

const MyNavbar = () => {
  const [searchExpanded, setSearchExpanded] = useState(false);

  const toggleSearchBar = () => {
    setSearchExpanded(!searchExpanded);
  };

  return (
    <Navbar className="bg-transparent py-0">
      <Container fluid className="d-flex justify-content-between align-items-center m-0">
        <Navbar.Brand href="#home" className="navbar-brand">
          <img src={GVlogo} alt="logo" width="80" />
        </Navbar.Brand>

        <div className="search-container">
          <Form className={`search-form ${searchExpanded ? "expanded" : "collapsed"}`}>
            <Button variant="outline-success" className="search-button" onClick={toggleSearchBar}>
              {searchExpanded ? <FaTimes /> : <FaSearch />}
            </Button>
            {searchExpanded && (
              <FormControl type="search" placeholder="Search" className="search-input" aria-label="Search" />
            )}
          </Form>
        </div>

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
