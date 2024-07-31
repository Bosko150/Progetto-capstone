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
import DropdownButton from "react-bootstrap/DropdownButton";
import { useNavigate } from "react-router-dom";
import { TOGGLE_IS_LOGGED_OUT } from "../../redux/actions";

const MyNavbar = () => {
  const isLogged = useSelector((state) => state.user.isLogged);
  const userData = useSelector((state) => state.user.user_info);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch({ type: TOGGLE_IS_LOGGED_OUT });
    navigate("/");
  };

  const profilePic = userData && userData.profilePic ? userData.profilePic : GVlogo;

  return (
    <Navbar className="py-0">
      <Container fluid className="d-flex justify-content-between align-items-center m-0">
        <Navbar.Brand href="/" className="navbar-brand">
          <img src={GVlogo} alt="logo" width="60" />
        </Navbar.Brand>
        <SearchBar />
        <div className="navbar-login">
          {isLogged ? (
            <Dropdown>
              <DropdownButton
                id="dropdown-basic"
                variant="link"
                className="profile-dropdown"
                title={<img src={profilePic} alt="Profile" className="profile-pic" />}
                align={"end"}
              >
                <Dropdown.Item as={Link} to="/profile">
                  My Profile
                </Dropdown.Item>
                <Dropdown.Item onClick={handleLogout}>Sign out</Dropdown.Item>
              </DropdownButton>
            </Dropdown>
          ) : (
            <Link to="/login">
              <CgProfile size={40} className="login-icon" />
            </Link>
          )}
        </div>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
