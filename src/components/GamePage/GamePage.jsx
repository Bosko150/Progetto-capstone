import { Col, Container, Row, Button } from "react-bootstrap";
import { FaSteam } from "react-icons/fa";
import { FcCheckmark } from "react-icons/fc";
import { RiPriceTag3Line } from "react-icons/ri";
import { FiShoppingCart } from "react-icons/fi";

import "./GamePage.scss";

const GamePage = () => {
  return (
    <Container>
      <Row className="justify-content-between pt-5">
        <Col className="col-left" xs={6}>
          <img
            src="https://gaming-cdn.com/images/products/11030/616x353/v-rising-pc-game-steam-cover.jpg?v=1715247025"
            alt="game image"
          />
        </Col>
        <Col className="col-right d-flex flex-column align-items-center" xs={5}>
          <h2 className="mt-3">V Rising</h2>
          <span className="steam-banner mt-3">
            <FaSteam /> Steam | <FcCheckmark /> In stock | <FcCheckmark /> Digital download
          </span>
          <div className="price mt-3">
            <span className="old-price">
              <RiPriceTag3Line />
              35€
            </span>
            <span className="discount">-49%</span>
            <span className="new-price">17.69€</span>
          </div>
          <Button className="add-to-cart mt-4">
            <FiShoppingCart /> Add to cart
          </Button>
        </Col>
        <Col className="col-left mt-5" xs={6}>
          <h2>About</h2>
          <p className="game-description">
            V Rising is a 2013 action-adventure game developed by SCE Santa Monica Studio and published by Sony Computer
            Entertainment. It was released for the PlayStation 3, PlayStation 4, and Xbox 360 in Japan on November 5,
            2013, and November 6, 2013, respectively, in North America on November 18
          </p>
        </Col>
        <Col className="col-right-2 d-flex flex-column mt-5" xs={5}>
          <Row>
            <Col className="game-infos" xs={4}>
              <p>Developer:</p>
              <p>Publisher:</p>
              <p>Release date:</p>
              <p>Genre:</p>
            </Col>
            <Col className="game-infos-text" xs={8}>
              <p>Stunlock Studios</p>
              <p>Stunlock Studios</p>
              <p>8 May 2024</p>
              <p>Single-player, Action, Adventure</p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default GamePage;
