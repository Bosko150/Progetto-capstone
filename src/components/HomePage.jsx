import { Container } from "react-bootstrap";

import HomeComponent from "./HomeComponent/HomeComponent";

const HomePage = () => {
  return (
    <Container fluid className="homepage-container px-0">
      <HomeComponent />
    </Container>
  );
};

export default HomePage;
