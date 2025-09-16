import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import AOS from "aos";
import "aos/dist/aos.css";

const images = [
  "/assets/Category/hom15.jpg",
  "/assets/Category/hom1.jpg",
  "/assets/Category/hom2.jpg",
  "/assets/Category/hom3.jpg",
  "/assets/Category/hom4.jpg",
  "/assets/Category/hom5.jpg",
];

const Gallery = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <section className="py-5" style={{ backgroundColor: "#FFF8F3" }}>
      <div className="container-fluid" data-aos="fade-up">
        <Swiper
          modules={[Autoplay]}
          loop={true}
          spaceBetween={16}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={4000}
          breakpoints={{
            0: { slidesPerView: 1.5 },
            426: { slidesPerView: 2 },
            771: { slidesPerView: 3 },
            992: { slidesPerView: 4 },
            1200: { slidesPerView: 5 },
            1400: { slidesPerView: 6 },
          }}
          className="image-slider"
        >
          {images.concat(images).map((img, index) => (
            <SwiperSlide key={index}>
              <div
                className="img-wrapper"
                data-aos="zoom-in"
                data-aos-delay={(index % 6) * 100} // thoda stagger
              >
                <img
                  src={img}
                  alt={`slide-${index}`}
                  style={{ width: "100%" }}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Gallery;
