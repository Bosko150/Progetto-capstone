import { useEffect, useState } from "react";
import { Col, Container, Row, Button, Modal } from "react-bootstrap";
import { FaSteam } from "react-icons/fa";
import { FcCheckmark } from "react-icons/fc";
import { RiPriceTag3Line } from "react-icons/ri";
import { FiShoppingCart } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { fetchSingleGameAction, addGameToCartAction, fetchUserCartAction } from "../../redux/actions";
import MyFooter from "../MyFooter/MyFooter";
import "./GamePage.scss";

const GamePage = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentImage, setCurrentImage] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const gameData = useSelector((state) => state.single_game.game);
  const isLoggedIn = useSelector((state) => state.user.isLogged);
  const cartId = useSelector((state) => state.user.cart_info?.id);
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

  const handleAddToCart = () => {
    if (isLoggedIn) {
      if (cartId) {
        dispatch(addGameToCartAction(cartId, gameId)).catch((error) => {
          console.error("Failed to add game to cart:", error);
        });
      } else {
        console.error("Cart ID is missing");
      }
    } else {
      navigate("/login");
    }
  };

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
            <Button className="add-to-cart mt-5" onClick={handleAddToCart}>
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
      <MyFooter />
    </>
  );
};

export default GamePage;
