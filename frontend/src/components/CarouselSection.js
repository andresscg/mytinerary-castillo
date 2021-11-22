import React from "react";
import CityCard from "./CityCard";
import "./CarouselSection.css";
import Carousel from "nuka-carousel";

const cities = [
  [
    {
      name: "Bogota",
      country: "Colombia",
      img: "assets/bogota.jpg",
    },
    {
      name: "New York",
      country: "USA",
      img: "assets/newyork.jpg",
    },
    {
      name: "Paris",
      country: "France",
      img: "assets/paris.jpg",
    },
    {
      name: "Munich",
      country: "Germany",
      img: "assets/munich.jpg",
    },
  ],
  [
    {
      name: "Tokyo",
      country: "Japan",
      img: "assets/tokyo.jpg",
    },
    {
      name: "Amsterdam",
      country: "Netherlands",
      img: "assets/amsterdam.jpg",
    },
    {
      name: "Cairo",
      country: "Egypt",
      img: "assets/cairo.jpg",
    },
    {
      name: "Cancun",
      country: "Mexico",
      img: "assets/cancun.jpg",
    },
  ],
  [
    {
      name: "Victoria",
      country: "Seychelles",
      img: "assets/victoria.jpg",
    },
    {
      name: "Sydney",
      country: "Australia",
      img: "assets/sydney.jpg",
    },
    {
      name: "Istambul",
      country: "Turkey",
      img: "assets/istambul.jpg",
    },
    {
      name: "Prague",
      country: "Czech Republic",
      img: "assets/prague.jpg",
    },
  ],
];

const CarouselSection = () => {
  return (
    <div
      className="carousel-section"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.7)), url("assets/carBg.jpg")`,
      }}
    >
      <h2 className="carousel-section__title">Popular MyTineraries</h2>
      <Carousel
        className="carousel"
        autoplay={true}
        autplayInterval={200}
        wrapAround={true}
        // animation="zoom"
        cellAlign="center"
        // cellSpacing={0}
      >
        {cities.map((slide) => {
          return (
            <div className="car-slide">
              {slide.map((city) => {
                return (
                  <CityCard
                    bgUrl={city.img}
                    cityName={city.name}
                    country={city.country}
                  ></CityCard>
                );
              })}
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default CarouselSection;
