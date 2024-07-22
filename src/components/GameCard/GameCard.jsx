/* eslint-disable react/prop-types */
import React, { useRef, useState } from "react";
import "./GameCard.scss";

const GameCard = ({ game }) => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="card">
      {!showVideo ? (
        <img src={game.gameImg} alt="game image" onMouseEnter={() => setShowVideo(true)} />
      ) : (
        <a href={`/games/search/1`} onMouseLeave={() => setShowVideo(false)}>
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

// const GameCard = ({ game }) => {
//   const [showVideo, setShowVideo] = useState(false);
//   const videoRef = useRef(null);

//   // Funzione per ricaricare il video
//   const handleMouseEnter = () => {
//     setShowVideo(true);
//     // Forza il refresh del video
//     if (videoRef.current) {
//       videoRef.current.load();
//     }
//   };

//   return (
//     <div className="card">
//       {!showVideo ? (
//         <img src={game.gameImg} alt="game image" onMouseEnter={handleMouseEnter} />
//       ) : (
//         <a href={`/games/search/1`} onMouseLeave={() => setShowVideo(false)}>
//           <video ref={videoRef} src={game.shortVideoPath} autoPlay loop preload="auto" />
//         </a>
//       )}
//       <span className="percentage">{game.percentageDiscount}</span>
//       <div className="price-info p-0 pt-2">
//         <span className="title">{game.title}</span>
//         <span className="discount_price">{game.discountedPrice}€</span>
//       </div>
//     </div>
//   );
// };

// export default GameCard;
