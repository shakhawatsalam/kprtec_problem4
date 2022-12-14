import React from "react";
import "./carousel.css";
import cImg from "../../Assets/638edc9e2b9fa.jpg";
import cImg2 from "../../Assets/639970321781d.jpg";
import cImg3 from "../../Assets/villern.jpg";
import cImg4 from "../../Assets/redwwomen.jpg";
import cImg5 from "../../Assets/cpatainama.jpg";
import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Pagination, Autoplay, Navigation } from "swiper";

const Carousel = () => {
  return (
    <>
      <div className='Swiper'>
        <Swiper
          style={{
            "--swiper-navigation-color": "red",
          }}
          navigation={true}
          // pagination={true}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules={[Navigation, Autoplay, Pagination]}
          className='mySwiper'
          // spaceBetween={2}
          // grabCursor={true}
        >
          <SwiperSlide>
            <div className='Image'>
              <img src={cImg} alt='' />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='Image'>
              <img src={cImg2} alt='' />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='Image'>
              <img src={cImg3} alt='' />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='Image'>
              <img src={cImg4} alt='' />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='Image'>
              <img src={cImg5} alt='' />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Carousel;
