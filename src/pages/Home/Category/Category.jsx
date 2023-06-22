// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import slider1 from "../../../assets/home/slide1.jpg";
import slider2 from "../../../assets/home/slide2.jpg";
import slider3 from "../../../assets/home/slide3.jpg";
import slider4 from "../../../assets/home/slide4.jpg";
import slider5 from "../../../assets/home/slide5.jpg";

// import required modules
import { Pagination } from "swiper";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Category = () => {
  return (
    <div>
      <section>
        <SectionTitle
          subHeading={"---From 11:00am to 10:00pm---"}
          heading={"ORDER ONLINE"}
        ></SectionTitle>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={slider1} alt="" />
            <p className="uppercase text-3xl text-center -mt-12 mb-10 text-white font-semibold">
              SALADS
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slider2} alt="" />
            <p className="uppercase text-3xl text-center -mt-12 mb-10 text-white font-semibold">
              Soups
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slider3} alt="" />
            <p className="uppercase text-3xl text-center -mt-12 mb-10 text-white font-semibold">
              pizzas
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slider4} alt="" />
            <p className="uppercase text-3xl text-center -mt-12 mb-10 text-white font-semibold">
              desserts
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slider5} alt="" />
            <p className="uppercase text-3xl text-center -mt-12 mb-10 text-white font-semibold">
              SALADS
            </p>
          </SwiperSlide>
        </Swiper>
      </section>
    </div>
  );
};

export default Category;
