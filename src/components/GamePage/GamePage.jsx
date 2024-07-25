import { useState } from "react";
import { Col, Container, Row, Button, Modal } from "react-bootstrap";
import { FaSteam } from "react-icons/fa";
import { FcCheckmark } from "react-icons/fc";
import { RiPriceTag3Line } from "react-icons/ri";
import { FiShoppingCart } from "react-icons/fi";

import "./GamePage.scss";

const GamePage = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  const handleShow = (imageSrc) => {
    setCurrentImage(imageSrc);
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);

  return (
    <>
      <div
        className="gamepage-banner"
        style={{
          backgroundImage: `url(https://gaming-cdn.com/img/products/11030/pcover/1920x620/11030.jpg?v=1715247025)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <Container className="gamepage-container">
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
            <Button className="add-to-cart mt-5">
              <FiShoppingCart /> Add to cart
            </Button>
          </Col>
          <Col className="col-left mt-5" xs={6}>
            <h2>About</h2>
            <p className="game-description">
              V Rising is a 2013 action-adventure game developed by SCE Santa Monica Studio and published by Sony
              Computer Entertainment. It was released for the PlayStation 3, PlayStation 4, and Xbox 360 in Japan on
              November 5, 2013, and November 6, 2013, respectively, in North America on November 18
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
        <h2 className="mt-5">Visuals</h2>
        <Row className="mt-3">
          <Col xs={12}>
            <div className="video-wrapper">
              <iframe
                src="https://www.youtube.com/embed/aB_2ZRn9F_k"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </Col>
        </Row>
        <Row className="mt-3 align-items-center">
          <Col xs={6}>
            <img
              className="screenshot"
              src="https://gaming-cdn.com/images/products/11030/screenshot/v-rising-pc-game-steam-wallpaper-1.jpg?v=1715247025"
              alt="Screenshot 1"
              onClick={() =>
                handleShow(
                  "https://gaming-cdn.com/images/products/11030/screenshot/v-rising-pc-game-steam-wallpaper-1.jpg?v=1715247025"
                )
              }
            />
          </Col>
          <Col xs={6}>
            <Row>
              <Col xs={6}>
                <img
                  className="screenshot"
                  src="https://gaming-cdn.com/images/products/11030/screenshot/v-rising-pc-game-steam-wallpaper-2.jpg?v=1715247025"
                  alt="Screenshot 2"
                  onClick={() =>
                    handleShow(
                      "https://gaming-cdn.com/images/products/11030/screenshot/v-rising-pc-game-steam-wallpaper-2.jpg?v=1715247025"
                    )
                  }
                />
              </Col>
              <Col xs={6}>
                <img
                  className="screenshot"
                  src="https://gaming-cdn.com/images/products/11030/screenshot/v-rising-pc-game-steam-wallpaper-3.jpg?v=1715247025"
                  alt="Screenshot 3"
                  onClick={() =>
                    handleShow(
                      "https://gaming-cdn.com/images/products/11030/screenshot/v-rising-pc-game-steam-wallpaper-3.jpg?v=1715247025"
                    )
                  }
                />
              </Col>
              <Col xs={6}>
                <img
                  className="screenshot"
                  src="https://gaming-cdn.com/images/products/11030/screenshot/v-rising-pc-game-steam-wallpaper-4.jpg?v=1715247025"
                  alt="Screenshot 4"
                  onClick={() =>
                    handleShow(
                      "https://gaming-cdn.com/images/products/11030/screenshot/v-rising-pc-game-steam-wallpaper-4.jpg?v=1715247025"
                    )
                  }
                />
              </Col>
              <Col xs={6}>
                <img
                  className="screenshot"
                  src="https://gaming-cdn.com/images/products/11030/screenshot/v-rising-pc-game-steam-wallpaper-5.jpg?v=1715247025"
                  alt="Screenshot 5"
                  onClick={() =>
                    handleShow(
                      "https://gaming-cdn.com/images/products/11030/screenshot/v-rising-pc-game-steam-wallpaper-5.jpg?v=1715247025"
                    )
                  }
                />
              </Col>
            </Row>
          </Col>
        </Row>

        <Modal show={showModal} onHide={handleClose} centered size="lg">
          <Modal.Body className="p-0">
            <img className="d-block w-100" src={currentImage} alt="Enlarged Screenshot" />
          </Modal.Body>
          {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer> */}
        </Modal>
        <h2>Description</h2>
        <Row className="mt-4">
          <p className="game-description">
            Command every court with authenticity and realism Powered by ProPLAY, giving you ultimate control over how
            you play in NBA 2K25. Define your legacy in MyCAREER, MyTEAM, MyNBA, and The W. Express yourself with an
            array of customization options and explore an all-new City rich with opportunity.
          </p>
        </Row>
        <h2 className="mt-4">Configurations</h2>
        <Row className="game-description my-4">
          <p>OS: Windows 10</p>
          <p>Processor: Intel Core i3-9100 or AMD Ryzen 3 1200</p>
          <p>Memory: 8 GB RAM</p>
          <p>Graphics: NVIDIA GeForce GTX 960 4 GB or AMD Radeon RX 570 4 GB or Intel Arc A580</p>
          <p>DirectX: Version 11</p>
          <p>Network: Broadband Internet connection</p>
          <p>Storage: 150 GB available space</p>
        </Row>
      </Container>
    </>
  );
};

export default GamePage;

{
  /* <Row className="mt-3">
        <Col xs={12}>
          <div className="carousel-wrapper">
            <Carousel interval={null}>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://gaming-cdn.com/images/products/11030/screenshot/v-rising-pc-game-steam-wallpaper-1.jpg?v=1715247025"
                  alt="Screenshot 1"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://gaming-cdn.com/images/products/11030/screenshot/v-rising-pc-game-steam-wallpaper-2.jpg?v=1715247025"
                  alt="Screenshot 2"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://gaming-cdn.com/images/products/11030/screenshot/v-rising-pc-game-steam-wallpaper-3.jpg?v=1715247025"
                  alt="Screenshot 3"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://gaming-cdn.com/images/products/11030/screenshot/v-rising-pc-game-steam-wallpaper-4.jpg?v=1715247025"
                  alt="Screenshot 4"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://gaming-cdn.com/images/products/11030/screenshot/v-rising-pc-game-steam-wallpaper-5.jpg?v=1715247025"
                  alt="Screenshot 5"
                />
              </Carousel.Item>
            </Carousel>
          </div>
        </Col>
      </Row> */
}
