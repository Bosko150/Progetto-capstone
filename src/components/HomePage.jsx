import { Container } from "react-bootstrap";

import HomeComponent from "./HomeComponent/HomeComponent";
import MyFooter from "./MyFooter/MyFooter";

const HomePage = () => {
  return (
    <Container fluid className="homepage-container px-0">
      <HomeComponent />
      <MyFooter />
    </Container>
  );
};

export default HomePage;
