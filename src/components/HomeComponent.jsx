import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import GameCard from "./GameCard/GameCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchGamesAction } from "../redux/actions";

const HomeComponent = () => {
  const games = useSelector((state) => state.game.games);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGamesAction());
  }, [dispatch]);

  // Limita i giochi a 12
  const limitedGames = games.slice(0, 12);

  return (
    <Container className="homepage-container">
      <Row className="justify-content-center">
        <h2 className="text-light pb-3">Trending &gt;</h2>

        {limitedGames.map((game) => (
          <Col key={game.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
            <GameCard game={game} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default HomeComponent;
