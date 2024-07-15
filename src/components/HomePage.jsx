import { Container } from "react-bootstrap";
import MyNavbar from "./MyNavbar";
import HomeComponent from "./HomeComponent";

const HomePage = () => {
  return (
    <Container fluid className="homepage-container">
      <MyNavbar />
      <HomeComponent />
    </Container>
  );
};

export default HomePage;
