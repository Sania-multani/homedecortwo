import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Swiper Imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className="about-page">
      {/* Banner Section */}
      <section className="about-banner">
        <div className="container text-center">
          <h1 className="banner-title" data-aos="fade-down">
            Our Story
          </h1>
          <p
            className="banner-subtitle"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Timeless Beauty in Every Piece — Welcome to ZERAVA JEWELS
          </p>
        </div>
      </section>

      {/* Brand Philosophy */}
      <section className="about-section container">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0" data-aos="fade-right">
            <img
              src="/assets/category/catg30.png"
              alt="Jewellery Display"
              className="img-fluid about-img rounded shadow"
            />
          </div>
          <div className="col-lg-6" data-aos="fade-left" data-aos-delay="200">
            <h2 className="section-title">
              Crafted Elegance. Lasting Memories.
            </h2>
            <p className="about-section-text">
              At <strong>Woodra</strong>, Discover furniture that blends comfort, durability, and timeless design. Every piece is crafted to transform your living space into a place of beauty and relaxation.Bring life to your living room with sofas, chairs, and tables designed for both style and comfort. Perfect for family moments or cozy evenings
            </p>
            <p className="about-section-text">
              Inspired by the timeless charm of royal heritage and modern
              sophistication, our jewellery blends tradition with contemporary
              design, making every creation a signature statement.
            </p>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="what-we-do-section container my-5">
        <div className="row align-items-center">
          <div className="col-lg-6" data-aos="fade-right">
            <h2 className="section-title">What We Do</h2>
            <p className="about-section-text">
             From everyday meals to special gatherings, our dining sets are designed to create lasting memories around the table.Create your dream retreat with beds, wardrobes, and nightstands that combine elegance with functionalityOur furniture isn’t just décor—it’s an expression of your lifestyle. Crafted with care, built to last, and designed to inspire.
            </p>
            <p className="about-section-text">
              Our artisans and designers work with passion to shape jewellery
              that not only complements your style but also tells your unique
              story.
            </p>
          </div>
          <div className="col-lg-6" data-aos="fade-left" data-aos-delay="200">
            <img
              src="/assets/category/catg31.png"
              alt="Jewellery Craft"
              className="img-fluid rounded shadow about-img"
            />
          </div>
        </div>
      </section>

      {/* Founder Swiper Section */}
      <section className="founder-carousel-section">
        <div className="overlay">
          <div className="container">
            <div className="row align-items-center">
              {/* Left Content */}
              <div className="col-lg-6 text-dark mb-4 mb-lg-0" data-aos="zoom-in">
                <h2 className="section-title text-dark">Meet Our Founders</h2>
                <p className="section-text text-dark">
                  Behind ZERAVA Jewels is a family of designers and artisans who
                  believe jewellery is an emotion. From gemstone experts to
                  visionary stylists, every founder has added their sparkle to
                  our legacy.
                </p>
              </div>

              {/* Right Swiper Carousel */}
              <div className="col-lg-6" data-aos="fade-left" data-aos-delay="200">
              <Swiper
  modules={[Autoplay]}
  autoplay={{ delay: 3000, disableOnInteraction: false }}
  loop={true}
  spaceBetween={20}
  slidesPerView={1}
>
  {/* Slide 1 */}
  <SwiperSlide>
    <div className="d-flex gap-4 justify-content-center py-4">
      <div className="founder-card text-center bg-white rounded shadow p-3 w-50">
        <img
          src="/assets/category/leader01.avif"
          alt="Founder 1"
          className="img-fluid rounded mb-3"
        />
        <h5 className="mb-1 text-dark">Simran Arora</h5>
        <p className="text-muted small">Master Craftsman</p>
      </div>
      <div className="founder-card text-center bg-white rounded shadow p-3 w-50">
        <img
          src="/assets/category/leader04.avif"
          alt="Founder 2"
          className="img-fluid rounded mb-3"
        />
        <h5 className="mb-1 text-dark">Riya Kapoor</h5>
        <p className="text-muted small">
          Creative Jewellery Designer
        </p>
      </div>
    </div>
  </SwiperSlide>

  {/* Slide 2 */}
  <SwiperSlide>
    <div className="d-flex gap-4 justify-content-center">
      <div className="founder-card text-center bg-white rounded shadow p-3 w-50">
        <img
          src="/assets/category/leader03.avif"
          alt="Founder 3"
          className="img-fluid rounded mb-3"
        />
        <h5 className="mb-1 text-dark">Preeti</h5>
        <p className="text-muted small">Gemstone Specialist</p>
      </div>
      <div className="founder-card text-center bg-white rounded shadow p-3 w-50">
        <img
          src="/assets/category/leader02.avif"
          alt="Founder 4"
          className="img-fluid rounded mb-3"
        />
        <h5 className="mb-1 text-dark">Kabir Singh</h5>
        <p className="text-muted small">Heritage Consultant</p>
      </div>
    </div>
  </SwiperSlide>
</Swiper>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section
        className="about-values container text-center mb-4"
        data-aos="fade-up"
      >
        <h2 className="section-title mb-4">Our Values</h2>
        <div className="row">
          {["Heritage", "Authenticity", "Elegance", "Craftsmanship"].map(
            (val, index) => (
              <div
                className="col-md-3 col-6 mb-4"
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="value-card shadow-sm rounded p-3 h-100">
                  <h5 className="mb-2">{val}</h5>
                  <p className="small text-muted">
                    {val === "Heritage"
                      ? "Inspired by timeless Indian and global traditions."
                      : val === "Authenticity"
                      ? "We use ethically sourced gemstones & metals."
                      : val === "Elegance"
                      ? "Every design reflects sophistication & grace."
                      : "Each jewel is handcrafted with passion & precision."}
                  </p>
                </div>
              </div>
            )
          )}
        </div>
      </section>
    </div>
  );
};

export default About;
