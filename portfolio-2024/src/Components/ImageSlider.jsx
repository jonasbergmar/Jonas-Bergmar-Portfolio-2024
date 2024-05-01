import React, { useState, useEffect } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [intervalId, setIntervalId] = useState(null); // State variable for interval ID

  // Automatic image change every 3 seconds
  useEffect(() => {
    const id = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    // Set intervalId state variable with the interval ID
    setIntervalId(id);

    // Clean up interval when component unmounts or currentIndex changes
    return () => clearInterval(id);
  }, [currentIndex, images.length]);

  const nextSlide = () => {
    clearInterval(intervalId); // Clear interval
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    clearInterval(intervalId); // Clear interval
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    clearInterval(intervalId); // Clear interval
    setCurrentIndex(index);
  };

  return (
    <>
      <div className="max-w-[1120px] h-[500px]  items-center justify-center rounded-3xl group bg-gradient-to-tr from-bg-white/10 to-bg-white/05">
        <div className="relative overflow-hidden rounded-2xl">
          <div
            className="  flex transition-transform"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Slide ${index + 1}`}
                className=" h-[500px] object-scale-down w-full flex-shrink-0"
              />
            ))}
          </div>
          <button
            className="  absolute top-1/2 left-2 transform -translate-y-1/2 bg-TextVariant/20 rounded-full border-none text-Accent  text-2xl p-3 focus:outline-none"
            onClick={prevSlide}
          >
            <BsChevronLeft />
          </button>
          <button
            className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-TextVariant/20 rounded-full border-none text-Accent text-2xl p-3 focus:outline-none"
            onClick={nextSlide}
          >
            <BsChevronRight />
          </button>
          <div className="flex justify-center items-center mt-2 absolute bottom-0 left-0 right-0">
            {images.map((_, index) => (
              <span
                key={index}
                className={`w-2 h-2 mx-1 bg-gray-500 rounded-full cursor-pointer ${
                  index === currentIndex ? " bg-white w-3 h-3" : ""
                }`}
                onClick={() => goToSlide(index)}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageSlider;
