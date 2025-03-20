import React from "react";
import Props from "./Props";

const FirstCards = () => (
  <Props
    cards={[
      {
        imageSrc: "/src/assets/Paris.jpg",
        altText: "Paris",
        cityName: "Paris",
        price: "From $699",
      },
      {
        imageSrc: "/src/assets/Greece.jpg",
        altText: "Greece",
        cityName: "Greece",
        price: "From $1079",
      },
      {
        imageSrc: "/src/assets/Norway.jpg",
        altText: "Norway",
        cityName: "Norway",
        price: "From $895",
      },
      {
        imageSrc: "/src/assets/Tuscany.jpg",
        altText: "Tuscany",
        cityName: "Tuscany",
        price: "From $1245",
      },
    ]}
  />
);

export default FirstCards;
