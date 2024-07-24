/* eslint-disable react/prop-types */
/* eslint-disable react/prop-types */
import React from "react";
import "./Banner.scss";
import { Container } from "react-bootstrap";

const Banner = ({ games }) => {
  // Imposta un'immagine di sfondo predefinita
  const defaultBackgroundImg = "url_to_default_image";
  const backgroundImg = (games && games[0] && games[0].backgroundImg) || defaultBackgroundImg;
  const title = (games && games[0] && games[0].title) || "Titolo Predefinito";
  const discountedPrice = (games && games[0] && games[0].discountedPrice) || "Prezzo Predefinito";
  const percentageDiscount = (games && games[0] && games[0].percentageDiscount) || "Sconto Predefinito";

  return (
    <div
      className="banner d-flex justify-content-center align-items-center"
      style={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container className="d-flex flex-column">
        <h1>{title}</h1>
        <div className="d-flex align-items-center">
          <span className="bannerpercentage">{percentageDiscount}</span>
          <h1>{discountedPrice}€</h1>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
