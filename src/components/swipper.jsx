import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";

const movies = [
  {
    title: "The Great Pizza",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg",
  },
  {
    title: "Burger Blast",
    image:
      "https://static.vecteezy.com/system/resources/previews/023/558/535/non_2x/close-up-of-a-juicy-burger-with-fries-it-look-very-delicious-big-sandwich-hamburger-with-juicy-beef-burger-cheese-tomato-and-red-onion-photo.jpg",
  },
  {
    title: "Pasta Fiesta",
    image:
      "https://img.freepik.com/premium-photo/pasta-penne-with-eggplant-pasta-alla-norma-traditional-italian-food_2829-20663.jpg",
  },
  {
    title: "Sushi World",
    image: "https://t4.ftcdn.net/jpg/01/60/77/63/360_F_160776300_2VfVdDN1wC8JuawVMiMOte0vSOF8xVxp.jpg",
  },
  {
    title: "Carrot Cake",
    image:
      "https://media.istockphoto.com/id/1447192294/photo/homemade-carrot-pudding-gajar-halwa-indian-dessert.jpg?s=612x612&w=0&k=20&c=Tf4U033Xsl5D8Yr2H9T8nhB5uLwgUIGLmY3TzYpDJWY=",
  },
];

const ImageSlider = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div
      style={{
        width: "90%",
        maxWidth: "1200px",
        margin: "50px auto",
        position: "relative",
      }}
    >
        
      {/* Thumbs swiper on top-right */}
      <div
        style={{
          position: "absolute",
          bottom: 10,
          right: 10,
          width: "340px",
          height: "80px",
          zIndex: 10,
          backgroundColor: "rgba(0,0,0,0.4)",
          borderRadius: "10px",
          padding: "5px 10px",
          boxSizing: "border-box",
        }}
      >
        <Swiper
          onSwiper={setThumbsSwiper}
          modules={[Navigation, Thumbs]}
          spaceBetween={10}
          slidesPerView={4}
          watchSlidesProgress
          navigation={true}
          style={{ width: "100%", height: "100%", cursor: "pointer" }}
        >
          {movies.map((movie, index) => (
            <SwiperSlide
              key={index}
              style={{ borderRadius: "8px", overflow: "hidden" }}
            >
              <img
                src={movie.image}
                alt={movie.title}
                style={{
                  width: "100%",
                  height: "70px",
                  objectFit: "cover",
                  borderRadius: "8px",
                  border: "2px solid transparent",
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Main swiper */}
      
      <Swiper
        modules={[Navigation, Thumbs, Autoplay]}
        spaceBetween={10}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        thumbs={{ swiper: thumbsSwiper }}
        loop={true}
        style={{ width: "100%", height: "520px", borderRadius: "15px"  }}
      >
        {movies.map((movie, index) => (
          <SwiperSlide key={index} style={{ position: "relative" }}>
            <img
              src={movie.image}
              alt={movie.title}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "15px",
              }}
            />
            <h3
              style={{
                position: "absolute",
                bottom: "20px",
                left: "20px",
                color: "white",
                textShadow: "1px 1px 5px black",
                margin: 0,
                fontSize: "1.8rem",
                backgroundColor: "rgba(0,0,0,0.5)",
                padding: "6px 12px",
                borderRadius: "8px",
                maxWidth: "70%",
              }}
            >
              {movie.title}
            </h3>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageSlider;
