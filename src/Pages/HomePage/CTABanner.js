import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const CTABanner = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="cta-banner" style={{ paddingTop: "5rem" }}>
      {/* Left Image Section */}
      <div className="cta-left" data-aos="fade-right">
        <img
          src="/assets/category/catg13.png"
          alt="Jewellery"
          className="cta-left-img"
        />
      </div>

      {/* Right Content Section */}
      <div className="cta-right" data-aos="fade-left">
        <p className="cta-label" data-aos="fade-up" data-aos-delay="100">
          Festive Sale Offers
        </p>
        <h2 className="cta-heading" data-aos="fade-up" data-aos-delay="200">
          Handmade Furniture For Special Occasions
        </h2>
        <p className="cta-desc" data-aos="fade-up" data-aos-delay="300">
          Aliquet eget sit amet tellus cras adipiscing enim. Non quam lacus
          suspendisse faucibus interdum posuere. Lobortis mattis aliquam
          faucibus purus in massa tempor nec.
        </p>

        <div className="cta-offer" data-aos="zoom-in" data-aos-delay="400">
          <span>
            <img
              src="/assets/category/offer.png"
              className="offer"
              style={{ width: "7.8rem" }}
              alt="Offer"
            />
          </span>
        </div>

        <h3 className="cta-product" data-aos="fade-up" data-aos-delay="500">
          Table and chair sets
        </h3>
        <p className="cta-category" data-aos="fade-up" data-aos-delay="600">
          Antique Luxury
        </p>

        <div
          className="button-container mt-4"
          data-aos="flip-up"
          data-aos-delay="700"
        >
          <div className="discover-btn-border"></div>
          <button className="discover-btn">SHOP NOW</button>
        </div>

        {/* Small product image inside right section */}
        <img
          src="/assets/category/catg15.png"
          alt="Earrings"
          className="cta-small-img"
          data-aos="zoom-in"
          data-aos-delay="800"
        />
      </div>
    </section>
  );
};

export default CTABanner;
