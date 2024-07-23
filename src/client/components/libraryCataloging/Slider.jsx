import React, { useState, useEffect } from "react";

const images = [
  "/assests/1.png",
  "/assests/2.png",
  // "https://via.placeholder.com/1200x200?text=Slide+3",
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  //   }, 5000); // Change image every 3 seconds

  //   return () => clearInterval(interval);
  // }, []);

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto mt-4">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-[120px] md:h-[160px] lg:h-[240px]"
            />
          ))}
        </div>
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 text-white px-3 py-2"
      >
        <svg
        style={{fill:"none",stroke:"#ffffff","strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"20px"}}
          width="30px"
          height="30px"
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
        >

          <g data-name="Layer 2" id="Layer_2">
            <g
              data-name="E415, next, Media, media player, multimedia"
              id="E415_next_Media_media_player_multimedia"
            >
              <circle className="cls-1" cx="256" cy="256" r="246" />

              <polyline
                className="cls-1"
                points="333.82 411.63 178.18 256 333.82 100.37"

              />
            </g>
          </g>
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-0 transform -translate-y-1/2  text-white px-3 py-2"
      >
        <svg
        style={{fill:"none",stroke:"#ffffff","strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"20px"}}
          width="30px"
          height="30px"
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
        >

          <g data-name="Layer 2" id="Layer_2">
            <g
              data-name="E415, next, Media, media player, multimedia"
              id="E415_next_Media_media_player_multimedia"
            >
              <circle className="cls-1" cx="256" cy="256" r="246" />

              <polyline
                className="cls-1"
                points="178.18 411.63 333.82 256 178.18 100.37"
              />
            </g>
          </g>
        </svg>

      </button>
    </div>
  );
};

export default Slider;
