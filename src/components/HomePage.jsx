import { Container } from "react-bootstrap";

import HomeComponent from "./HomeComponent/HomeComponent";
import MyNavbar from "./MyNavbar/MyNavbar";
import MyFooter from "./MyFooter/MyFooter";

const HomePage = () => {
  return (
    <Container fluid className="homepage-container px-0">
      <MyNavbar />
      <HomeComponent />
      <MyFooter />
    </Container>
  );
};

export default HomePage;
