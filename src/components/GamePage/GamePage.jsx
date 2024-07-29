import { useEffect, useState } from "react";
import { Col, Container, Row, Button, Modal } from "react-bootstrap";
import { FaSteam } from "react-icons/fa";
import { FcCheckmark } from "react-icons/fc";
import { RiPriceTag3Line } from "react-icons/ri";
import { FiShoppingCart } from "react-icons/fi";

import "./GamePage.scss";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchSingleGameAction } from "../../redux/actions";

const GamePage = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentImage, setCurrentImage] = useState("");
  const dispatch = useDispatch();
  const gameData = useSelector((state) => state.single_game.game);
  const params = useParams();
  const gameId = params.gameId;

  useEffect(() => {
    dispatch(fetchSingleGameAction(gameId));
  }, [dispatch, gameId]);

  const handleShow = (imageSrc) => {
    setCurrentImage(imageSrc);
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);

  // Aggiungi un controllo per verificare la presenza dei dati
  if (!gameData || !gameData.title) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div
        className="gamepage-banner"
        style={{
          backgroundImage: `url(${gameData.backgroundImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <Container className="gamepage-container">
        <Row className="justify-content-between pt-5">
          <Col className="col-left" xs={6}>
            <img src={gameData.gameImg} alt="game image" />
          </Col>
          <Col className="col-right d-flex flex-column align-items-center" xs={5}>
            <h2 className="mt-3">{gameData.title}</h2>
            <span className="steam-banner mt-3">
              <FaSteam /> Steam | <FcCheckmark /> In stock | <FcCheckmark /> Digital download
            </span>
            <div className="price mt-3">
              <span className="old-price">
                <RiPriceTag3Line />
                {gameData.fullPrice}€
              </span>
              <span className="discount">{gameData.percentageDiscount}</span>
              <span className="new-price">{gameData.discountedPrice}€</span>
            </div>
            <Button className="add-to-cart mt-5">
              <FiShoppingCart /> Add to cart
            </Button>
          </Col>
          <Col className="col-left mt-5" xs={6}>
            <h2>About</h2>
            <p className="game-description">{gameData.description}</p>
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
                <p>{gameData.developer}</p>
                <p>{gameData.publisher}</p>
                <p>{gameData.releaseDate}</p>
                <p>{gameData.genres.join(", ")}</p>
              </Col>
            </Row>
          </Col>
        </Row>
        <h2 className="mt-5">Visuals</h2>
        <Row className="mt-3">
          <Col xs={12}>
            <div className="video-wrapper">
              <iframe
                src={gameData.trailer}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </Col>
        </Row>
        <Row className="mt-3 align-items-center">
          {gameData.screenshots && gameData.screenshots.length > 0 && (
            <>
              <Col xs={6}>
                <img
                  className="screenshot"
                  src={gameData.screenshots[0]}
                  alt="Screenshot 1"
                  onClick={() => handleShow(gameData.screenshots[0])}
                />
              </Col>
              <Col xs={6}>
                <Row>
                  {gameData.screenshots.slice(1).map((screenshot, index) => (
                    <Col xs={6} key={index}>
                      <img
                        className="screenshot"
                        src={screenshot}
                        alt={`Screenshot ${index + 2}`}
                        onClick={() => handleShow(screenshot)}
                      />
                    </Col>
                  ))}
                </Row>
              </Col>
            </>
          )}
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
          <p className="game-description">{gameData.aboutTheGame}</p>
        </Row>
        <h2 className="mt-4">Configurations</h2>
        <Row className="game-description my-4">
          {gameData.systemRequirements.map((requirement, index) => (
            <Col key={index} xs={12}>
              <p>{requirement}</p>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default GamePage;

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
