import React from "react";
import Props from "./Props";

const ThirdCards = () => (
  <Props
    cards={[
      {
        imageSrc: "/src/assets/MatterhonSuites.jpg",
        altText: "Matterhorn Suites",
        cityName: "Matterhorn Suites",
        price: "$575/night",
        reviews: "★ 4.9 (60 reviews)",
      },
      {
        imageSrc: "/src/assets/DiscoveryShores.jpg",
        altText: "Discovery Shores",
        cityName: "Discovery Shores",
        price: "$360/night",
        reviews: "★ 4.8 (116 reviews)",
      },
      {
        imageSrc: "/src/assets/ArcticHut.jpg",
        altText: "Arctic Hut",
        cityName: "Arctic Hut",
        price: "$420/night",
        reviews: "★ 4.7 (78 reviews)",
      },
      {
        imageSrc: "/src/assets/LakeLouiseInn.jpg",
        altText: "Lake Louise Inn",
        cityName: "Lake Louise Inn",
        price: "$244/night",
        reviews: "★ 4.6 (63 reviews)",
      },
    ]}
  />
);

export default ThirdCards;
