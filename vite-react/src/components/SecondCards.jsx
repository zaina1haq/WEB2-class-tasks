import React from "react";
import Props from "./Props";

const SecondCards = () => (
  <Props
    cards={[
      {
        imageSrc: "/assets/Pali.jpg",
        altText: "Pali",
        cityName: "Pali",
        price: "4D3N $899",
      },
      {
        imageSrc: "/assets/Swiss.jpg",
        altText: "Swiss",
        cityName: "Swiss",
        price: "6D5N $900",
      },
      {
        imageSrc: "/assets/Boracay.jpg",
        altText: "Boracay",
        cityName: "Boracay",
        price: "5D4N $699",
      },
      {
        imageSrc: "/assets/Palawan.jpg",
        altText: "Palawan",
        cityName: "Palawan",
        price: "4D3N $789",
      },
    ]}
  />
);

export default SecondCards;
