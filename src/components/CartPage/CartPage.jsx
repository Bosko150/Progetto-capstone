import { useDispatch, useSelector } from "react-redux";
import { Col, Container, Row } from "react-bootstrap";
import { BsCart4 } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { addGameToCartAction, removeGameFromCartAction } from "../../redux/actions";

import "./CartPage.scss";

const CartPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cartGames = useSelector((state) => state.user.cart_info.games);
  const cartId = useSelector((state) => state.user.cart_info.id);

  const handleDiscoverGamesClick = () => {
    navigate("/search");
  };

  const handleIncrement = (gameId) => {
    dispatch(addGameToCartAction(cartId, gameId));
  };

  const handleDecrement = (gameId) => {
    dispatch(removeGameFromCartAction(cartId, gameId));
  };

  // Raggruppa i giochi e calcola il subtotal
  const groupedGames = cartGames.reduce((acc, game) => {
    const existingGame = acc.find((g) => g.id === game.id);
    if (existingGame) {
      existingGame.quantity += 1;
      existingGame.totalPrice = existingGame.quantity * existingGame.discountedPrice;
      existingGame.originalTotalPrice = existingGame.quantity * existingGame.fullPrice;
    } else {
      acc.push({ ...game, quantity: 1, totalPrice: game.discountedPrice, originalTotalPrice: game.fullPrice });
    }
    return acc;
  }, []);

  // Calcola il subtotal, official price e discount
  const officialPrice = groupedGames.reduce((total, game) => total + (game.originalTotalPrice || 0), 0).toFixed(2);
  const subtotal = groupedGames.reduce((total, game) => total + (game.totalPrice || 0), 0).toFixed(2);
  const discount = (officialPrice - subtotal).toFixed(2);

  const isEmpty = groupedGames.length === 0;

  return (
    <Container className="cartpage-container">
      <Row className="justify-content-between">
        <Col xs={7}>
          <h3 className="mb-3">Cart</h3>
          <div className="cart-container text-center">
            {isEmpty ? (
              <>
                <BsCart4 size={50} className="cart-icon m-5" />
                <h3 className="mb-5">Your cart is empty</h3>
                <p className="mb-5">
                  You didn't add any item in your cart yet. Browse the website to find amazing deals!
                </p>
                <button className="btn btn-primary discover-games-btn mb-5" onClick={handleDiscoverGamesClick}>
                  Discover games
                </button>
              </>
            ) : (
              groupedGames.map((game, index) => (
                <div key={game.id}>
                  <Row className="justify-content-between">
                    <Col xs={8} className="d-flex align-items-center p-3">
                      <div>
                        <img className="cart-game-img" src={game.gameImg} alt={`game img ${game.title}`} />
                      </div>
                      <div>
                        <h5 className="cart-game-title">{game.title}</h5>
                      </div>
                    </Col>
                    <Col xs={2} className="d-flex align-items-center">
                      <h5 className="me-2 quantity-button" onClick={() => handleDecrement(game.id)}>
                        -
                      </h5>
                      <h5 className="game-quantity">{game.quantity}</h5>
                      <h5 className="ms-2 quantity-button" onClick={() => handleIncrement(game.id)}>
                        +
                      </h5>
                    </Col>
                    <Col xs={2} className="d-flex align-items-center justify-content-center">
                      <h5>{(game.totalPrice || 0).toFixed(2)}€</h5>
                    </Col>
                  </Row>
                  {index < groupedGames.length - 1 && <hr className="cart-separator" />}
                </div>
              ))
            )}
          </div>
        </Col>

        <Col xs={4}>
          <h3 className="mb-3">Summary</h3>
          <div className="summary-container text-center">
            <div className="official-price d-flex justify-content-between">
              <p>Official price</p>
              <p>{officialPrice}€</p>
            </div>
            <div className="discount-price d-flex justify-content-between">
              <p>Discount</p>
              <p>- {discount}€</p>
            </div>
            <div className="subtotal-price d-flex justify-content-between">
              <h5>Subtotal</h5>
              <h5>{subtotal}€</h5>
            </div>
            <button className={`btn btn-primary checkout-btn mt-4 ${isEmpty ? "disabled" : ""}`} disabled={isEmpty}>
              Go to payment
            </button>
            <div className="separator">
              <hr className="separator-line" />
              <span className="separator-text">or</span>
              <hr className="separator-line" />
            </div>
            <Link className="continue-shopping" to="/search">
              <p>&#8592; Continue shopping</p>
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default CartPage;
