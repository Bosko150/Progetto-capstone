import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import GVlogo from "../../assets/GVlogo.png";
import "./MyNavbar.scss";
import SearchBar from "../SearchBar/SearchBar";
import { CgProfile } from "react-icons/cg";
import { useSelector, useDispatch } from "react-redux";
import Dropdown from "react-bootstrap/Dropdown";
import { useNavigate } from "react-router-dom";
import { TOGGLE_IS_LOGGED_OUT } from "../../redux/actions";
import { BsCart4 } from "react-icons/bs";

const MyNavbar = () => {
  const isLogged = useSelector((state) => state.user.isLogged);
  const userData = useSelector((state) => state.user.user_info);
  const cartInfo = useSelector((state) => state.user.cart_info);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch({ type: TOGGLE_IS_LOGGED_OUT });
    navigate("/");
  };

  const profilePic = userData?.profilePic || GVlogo;
  const cartItemCount = cartInfo ? cartInfo.games.length : 0;

  return (
    <Navbar className="navbar">
      <Container fluid className="d-flex align-items-center m-0">
        <Navbar.Brand as={Link} to="/" className="navbar-brand">
          <img src={GVlogo} alt="logo" width="60" />
        </Navbar.Brand>
        <div className="navbar-searchbar">
          <SearchBar />
        </div>
        <div className="navbar-login d-flex align-items-center">
          {isLogged ? (
            <>
              <Link to="/cart" className="me-3 position-relative">
                <BsCart4 size={30} className="cartlink-icon me-1" />
                {cartItemCount > 0 && <span className="cart-badge">{cartItemCount}</span>}
              </Link>
              <Dropdown align="end">
                <Dropdown.Toggle variant="link" className="p-0">
                  <img src={profilePic} alt="Profile" className="profile-pic" />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item as={Link} to="/profile">
                    My Profile
                  </Dropdown.Item>
                  <Dropdown.Item onClick={handleLogout}>Sign out</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </>
          ) : (
            <Link to="/login">
              <CgProfile size={30} className="login-icon" />
            </Link>
          )}
        </div>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
