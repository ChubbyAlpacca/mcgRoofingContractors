import React, { useState, useEffect } from "react";
import "./style/ImageCarousel.css";
import image1 from "../assets/previousWork/black_slate.jpg";
import image2 from "../assets/previousWork/lead_work_2.jpg";
import image3 from "../assets/previousWork/lead_work.jpg";
import image4 from "../assets/previousWork/cornerRoof.jpeg";
import image5 from "../assets/previousWork/gable_end.jpg";

const images = [image1, image2, image3, image4, image5];

export default function ImageCarousel() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Automatically cycle images every 3 seconds
  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  //     }, 3000);
  //     return () => clearInterval(interval);
  //   }, []);

  // Function to go to the next image
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to go to the previous image
  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="carousel-container">
      <div className="carousel-images">
        {/* Display the images in the carousel */}
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-image-wrapper ${
              index === currentImageIndex ? "focus" : "blurred"
            }`}
          >
            <img
              src={image}
              alt={`carousel-image-${index}`}
              className="carousel-image"
            />
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button onClick={prevImage} className="carousel-button prev">
        Prev
      </button>
      <button onClick={nextImage} className="carousel-button next">
        Next
      </button>
    </div>
  );
}
