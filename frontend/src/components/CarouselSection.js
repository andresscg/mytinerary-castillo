import React from "react";
import CarouselCard from "./CarouselCard";
import "../styles/CarouselSection.css";
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
        autplayInterval={2000}
        wrapAround={true}
        animation="zoom"
        cellAlign="center"
        slidesToShow={1}
      >
        {cities.map((slide, index) => {
          return (
            <div className="car-slide" key={index}>
              {slide.map((city, index) => {
                return (
                  <CarouselCard
                    bgUrl={city.img}
                    cityName={city.name}
                    country={city.country}
                    key={index}
                  ></CarouselCard>
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
