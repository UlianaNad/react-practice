import React, { useEffect, useState } from "react";
import { Hourglass } from "react-loader-spinner";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

const ImageSlider = ({ url, limit = 5, page = 1 }) => {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchImages = async (getUrl) => {
    try {
      setLoading(true);
      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      const data = await response.json();

      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (error) {
      setErrorMsg(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (url !== "") fetchImages(url);
  }, [url]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Hourglass
          visible={true}
          height="80"
          width="80"
          ariaLabel="hourglass-loading"
          wrapperStyle={{}}
          wrapperClass=""
          colors={["#306cce", "#72a1ed"]}
        />
      </div>
    );
  }

  if (errorMsg !== null) {
    return <div>Error occured ! {errorMsg}</div>;
  }

  const handlePrevious = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="relative flex justify-center items-center w-[600px] h-[450px]">
        <BsArrowLeftCircleFill
          onClick={handlePrevious}
          className="absolute w-8 h-8 text-white filter drop-shadow-md left-4 cursor-pointer"
        />
        {images && images.length
          ? images.map((image, index) => (
              <img
                key={image.id}
                alt={image.url}
                src={image.download_url}
                className={`rounded-md shadow-md w-full h-full ${
                  currentSlide === index ? "" : "hidden"
                }`}
              />
            ))
          : null}
        <BsArrowRightCircleFill
          onClick={handleNext}
          className="absolute w-8 h-8 text-white filter drop-shadow-md right-4 cursor-pointer"
        />
        <span className="flex absolute bottom-4">
          {images && images.length
            ? images.map((_, index) => (
                <button
                  onClick={() => setCurrentSlide(index)}
                  key={index}
                  className={`bg-white h-[15px] w-[15px] rounded-full border-none outline-none mx-1 cursor-pointer ${
                    currentSlide === index ? "" : "bg-gray-400"
                  }`}
                ></button>
              ))
            : null}
        </span>
      </div>
    </div>
  );
};

export default ImageSlider;
