import React, { useState } from "react";
import { Container, Row, Form, Col, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { FaSteam, FaDiscord, FaYoutube, FaTwitch } from "react-icons/fa";
import { uploadAvatarAction, editProfileAction } from "../../redux/actions";
import "./ProfilePage.scss";

const ProfilePage = () => {
  const userData = useSelector((state) => state.user.user_info);
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    profilePic: null,
    username: userData?.username || "",
    name: userData?.name || "",
    surname: userData?.surname || "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      profilePic: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let profilePicUrl = userData.profilePic;

      if (formData.profilePic) {
        profilePicUrl = await dispatch(uploadAvatarAction(formData.profilePic, userData.id));
      }

      const updatedUser = {
        ...formData,
        profilePic: profilePicUrl,
      };

      await dispatch(editProfileAction(updatedUser));

      //alert("Profile updated successfully!");
    } catch (error) {
      console.error("Error updating profile:", error.message);
    }
  };

  return (
    <Container className="profilepage-container text-center">
      <div className="d-flex justify-content-center">
        <img className="profilepage-pic" src={userData?.profilePic} alt="" />
        <div className="flex-column ms-3 align-content-center text-start ms-4">
          <h2 className="profilepage-username">{userData?.username}</h2>
          <div className="social-icons">
            <FaSteam className="profilepage-icon" />
            <FaDiscord className="profilepage-icon" />
            <FaYoutube className="profilepage-icon" />
            <FaTwitch className="profilepage-icon" />
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-center">
        <Row className=" mt-4 text-start profile-row">
          <h2>Edit Profile</h2>
          <div className="edit-profile d-flex justify-content-center text-center ">
            <Form className="edit-profile-form" onSubmit={handleSubmit}>
              <Form.Group as={Col} className="mt-3" controlId="formProfilePic">
                <Form.Label>Profile Picture</Form.Label>
                <Form.Control type="file" name="profilePic" onChange={handleFileChange} />
              </Form.Group>

              <Form.Group as={Col} className="mt-3" controlId="formUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  name="username"
                  placeholder="Enter nickname"
                  value={formData.username}
                  onChange={handleInputChange}
                />
              </Form.Group>

              <Form.Group as={Col} className="mt-3" controlId="formFirstName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Enter name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </Form.Group>

              <Form.Group as={Col} className="mt-3" controlId="formLastName">
                <Form.Label>Surname</Form.Label>
                <Form.Control
                  type="text"
                  name="surname"
                  placeholder="Enter surname"
                  value={formData.surname}
                  onChange={handleInputChange}
                />
              </Form.Group>

              <Button variant="primary" type="submit" className="editprofile-button mt-3">
                Save Changes
              </Button>
            </Form>
          </div>
        </Row>
      </div>
    </Container>
  );
};

export default ProfilePage;
