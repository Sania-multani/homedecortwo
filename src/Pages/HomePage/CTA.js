import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutBanner = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="about-section">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Image */}
          <div
            className="col-lg-6 col-md-12 position-relative mb-4 mb-lg-0"
            data-aos="fade-right"
          >
            <div className="about-image-wrapper">
              <img
                src="/assets/category/hom14.jpg"
                alt="Jewellery Since"
                className="img-fluid about-image"
              />
            </div>
          </div>

          {/* Right Content */}
          <div
            className="col-lg-6 col-md-12"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <div className="about-content">
              <span
                className="subtitle"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                Radiant gemstone style.
              </span>

              <h2
                className="about-title"
                data-aos="fade-up"
                data-aos-delay="400"
              >
              Home décor that celebrates your <br /> unique comfort and style
              </h2>

              <p
                className="about-desc"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                We believe in creating homedecor that lasts. Each piece is made
                from high-quality materials, ensuring durability and timeless
                beauty. Our commitment to excellence means you can wear your
                favourite pieces with confidence, knowing they’ll withstand the
                test of time.
              </p>

              <div
                className="button-container mt-4"
                data-aos="flip-up"
                data-aos-delay="600"
              >
                <div className="discover-btn-border"></div>
                <button className="discover-btn">SHOP NOW</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBanner;
