import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import AOS from "aos";
import "aos/dist/aos.css";

const categories = [
  { id: 1, title: "TIED RIBBEN", img: "/assets/category/hom5.jpg" },
  { id: 2, title: "TIED RIBBEN", img: "/assets/category/hom7.jpg" },
  { id: 3, title: "TIED RIBBEN", img: "/assets/category/hom8.jpg" },
  { id: 4, title: "TIED RIBBEN", img: "/assets/category/hom9.jpg" },
  { id: 5, title: "TIED RIBBEN", img: "/assets/category/bangles.avif" },
];

const CategorySlider = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      once: true,     // animation chalega sirf ek baar
    });
  }, []);

  return (
    <section className="category-slider">
      <h2
        className="section-title"
        data-aos="fade-up"
      >
        Shop by Category
      </h2>
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={20}
        loop={true}
        breakpoints={{
          320: { slidesPerView: 1 },
          576: { slidesPerView: 2 },
          768: { slidesPerView: 2 },
          992: { slidesPerView: 3 },
          1200: { slidesPerView: 4 },
        }}
        className="mySwiper"
      >
        {categories.map((cat, index) => (
          <SwiperSlide key={cat.id}>
            <div
              className="scroll-card"
              data-aos="zoom-in"
              data-aos-delay={index * 150} 
            >
              <img src={cat.img} alt={cat.title} />
              <div className="overlay"></div>
              <h3>{cat.title}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default CategorySlider;
