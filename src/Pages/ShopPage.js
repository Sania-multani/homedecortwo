import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ProductCard from "./ProductCard";
import TopSellings from "./TopSellings";

const sampleProducts = [
  {
    name: "Diamond Necklace",
    category: "Necklace",
    price: "49,999",
    image: "/assets/category/hom15.jpg",
  },
  {
    name: "Gold Earrings",
    category: "Earrings",
    price: "19,999",
    image: "/assets/category/hom17.jpg",
  },
  {
    name: "Emerald Ring",
    category: "Ring",
    price: "15,499",
    image: "/assets/category/hom18.jpg",
  },
  {
    name: "Platinum Bracelet",
    category: "Bracelet",
    price: "34,999",
    image: "/assets/category/hom19.jpg",
  },
  {
    name: "Gold Earrings",
    category: "Earrings",
    price: "19,999",
    image: "/assets/category/hom20.jpg",
  },
  {
    name: "Emerald Ring",
    category: "Ring",
    price: "15,499",
    image: "/assets/category/hom21.jpg",
  },
  {
    name: "Platinum Bracelet",
    category: "Bracelet",
    price: "34,999",
    image: "/assets/category/hom22.jpg",
  },
  {
    name: "Diamond Necklace",
    category: "Necklace",
    price: "49,999",
    image: "/assets/category/hom23.jpg",
  },
  {
    name: "Diamond Necklace",
    category: "Necklace",
    price: "49,999",
    image: "/assets/category/hom23.jpg",
  },
  {
    name: "Gold Earrings",
    category: "Earrings",
    price: "19,999",
    image: "/assets/category/hom24.jpg",
  },
  {
    name: "Emerald Ring",
    category: "Ring",
    price: "15,499",
    image: "/assets/category/catg24.png",
  },
  {
    name: "Platinum Bracelet",
    category: "Bracelet",
    price: "34,999",
    image: "/assets/category/hom15.jpg",
  },
  {
    name: "Gold Earrings",
    category: "Earrings",
    price: "19,999",
    image: "/assets/category/hom17.jpg",
  },
  {
    name: "Emerald Ring",
    category: "Ring",
    price: "15,499",
    image: "/assets/category/hom18.jpg",
  },
  {
    name: "Platinum Bracelet",
    category: "Bracelet",
    price: "34,999",
    image: "/assets/category/hom19.jpg",
  },
  {
    name: "Diamond Necklace",
    category: "Necklace",
    price: "49,999",
    image: "/assets/category/hom20.jpg",
  },
];

const ShopPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      {/* Breadcrumb Banner */}
      <section className="breadcrumb-banner mt-3" data-aos="fade-down">
        <div className="container">
          <h2 className="breadcrumb-title">Our Products</h2>
          <p className="breadcrumb-subtitle">
            <a href="/">Home</a> / Shop
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="top-sellings-section">
        <h2 className="section-title" data-aos="fade-up">
          Our Products
        </h2>
        <div className="top-sellings-grid">
          {sampleProducts.map((product, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              data-aos-delay={100 + index * 100}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </section>

      {/* Promo Section */}
      <section className="promo-section py-5">
        <div className="container-fluid">
          <div className="row align-items-center">
            {/* Left Image */}
            <div className="col-md-6 p-0" data-aos="fade-right">
              <img
                src="/assets/category/catg29.png"
                alt="Jewellery Promo"
                className="promo-fixed-img"
              />
            </div>

            {/* Right Text */}
            <div
              className="col-md-6 promo-text d-flex flex-column justify-content-center p-5 text-white"
              data-aos="fade-left"
            >
              <div>
                <p
                  className="small-text mb-2"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  ROYAL COLLECTION
                </p>
                <h2
                  className="fw-bold mb-3"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  ELEGANCE THAT LASTS FOREVER
                </h2>
                <p className="mb-4" data-aos="fade-up" data-aos-delay="300">
                  Discover our exclusive range of handcrafted diamond and gold
                  jewellery, designed to add timeless elegance and brilliance to
                  every occasion.
                </p>
                <div
                  className="button-container mt-4"
                  data-aos="flip-up"
                  data-aos-delay="400"
                >
                  <div className="discover-btn-border"></div>
                  <button className="discover-btn">SHOP NOW</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Sellings Section */}
      <div data-aos="fade-up" data-aos-delay="200">
        <TopSellings />
      </div>
    </>
  );
};

export default ShopPage;
