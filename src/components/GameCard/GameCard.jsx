/* eslint-disable react/prop-types */
import React, { useState } from "react";
import "./GameCard.scss";

const GameCard = ({ game }) => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="card">
      {!showVideo ? (
        <img src={game.gameImg} alt="game image" onMouseEnter={() => setShowVideo(true)} />
      ) : (
        <a href={`/games/${game.id}`} onMouseLeave={() => setShowVideo(false)}>
          <video src={game.shortVideoPath} autoPlay loop />
        </a>
      )}
      <span className="percentage">{game.percentageDiscount}</span>
      <div className="price-info p-0 pt-2">
        <span className="title">{game.title}</span>
        <span className="discount_price">{game.discountedPrice}€</span>
      </div>
    </div>
  );
};

export default GameCard;
