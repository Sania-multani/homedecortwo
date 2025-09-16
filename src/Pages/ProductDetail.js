import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";
import TopSellings from "./TopSellings";

const ProductDetail = () => {
  const [selectedSize, setSelectedSize] = useState("Standard");
  const [activeIndex, setActiveIndex] = useState(null);
  const navigate = useNavigate();

  const thumbnails = [
    "/assets/category/earings02.jpg", // Gold Earrings
    "/assets/category/cate01.webp", // Diamond Necklace
    "/assets/category/cate04.png", // Emerald Ring
    "/assets/category/bangles01.png", // Platinum Bracelet
  ];

  const [selectedImage, setSelectedImage] = useState(thumbnails[0]);

  useEffect(() => {
    AOS.init({ once: false });
    AOS.refresh();
  }, []);

  const accordionData = [
    {
      title: "Product Description",
      content:
        "This diamond necklace is a timeless piece of jewellery crafted with precision. Perfect for weddings, parties, or daily elegance.",
    },
    {
      title: "Material & Quality",
      content:
        "18K Gold base studded with VVS Diamonds. BIS Hallmarked for authenticity and certified for premium quality.",
    },
    {
      title: "Care Instructions",
      content:
        "Keep away from moisture and perfumes. Store in a jewellery box. Clean with a soft dry cloth for lasting shine.",
    },
    {
      title: "Shipping & Returns",
      content:
        "Free insured shipping across India. 7-day easy return and exchange policy. COD & prepaid both available.",
    },
  ];

  return (
    <>
      {/* Breadcrumb Banner */}
      <section className="breadcrumb-banner mt-3">
        <div className="container">
          <h2 className="breadcrumb-title">Jewellery Collection</h2>
          <p className="breadcrumb-subtitle">
            <a href="/">Home</a> / <a href="/collections"> Shop</a> / Necklace
          </p>
        </div>
      </section>

      <section className="product-details-wrapper">
      <div className="custom-product-detail container">
        <div className="custom-detail-wrapper">
          {/* Left - Images */}
          <div className="custom-detail-image-gallery" data-aos="fade-right">
            {/* Left - Vertical Thumbnails */}
            <div className="custom-vertical-thumbnails">
              {thumbnails.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`thumb-${index}`}
                  className={`custom-thumb-vertical ${
                    selectedImage === img ? "active" : ""
                  }`}
                  style={{backgroundColor:"white"}}
                  onClick={() => setSelectedImage(img)}
                />
              ))}
            </div>

            {/* Right - Main Image */}
            <div
              className="custom-main-image-wrapper"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <div className="custom-main-image-zoom">
                <img
                  src={selectedImage}
                  alt="Product"
                  className="custom-main-image"
                  style={{backgroundColor:"white"}}

                />
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="custom-detail-info" data-aos="fade-left">
            <h2 className="custom-detail-brand">Diamond Necklace</h2>
            <p className="custom-detail-type">18K Gold with VVS Diamonds</p>
            <p className="custom-detail-desc">
              A royal necklace crafted with precision, elegance, and timeless
              beauty. Perfect to elevate your look for every occasion.
            </p>

            <div className="custom-detail-price">₹49,999</div>

            {/* Size Selector */}
            <div className="custom-detail-size" data-aos="fade-up">
              <span>Choose Size:</span>
              <div className="custom-sizes">
                {["Standard", "Medium", "Large"].map((size) => (
                  <button
                    key={size}
                    className={`custom-size-btn ${
                      selectedSize === size ? "active" : ""
                    }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <button
              className="custom-detail-btn"
              data-aos="fade-up"
              data-aos-delay="100"
              onClick={() => navigate("/myCart")}
            >
              ADD TO CART
            </button>

            {/* Shipping Info */}
            <div
              className="custom-detail-shipping"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <p>✔ Free Insured Delivery across India</p>
              <p>✔ BIS Hallmarked Jewellery</p>
              <p>✔ 7-Day Return Policy</p>
              <p>✔ COD & EMI Available</p>
            </div>
          </div>
        </div>

        {/* Product Details Accordion */}
        <div
          className="custom-accordion-container"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <h3 className="custom-accordion-title">Product Details</h3>
          {accordionData.map((item, index) => (
            <div
              className={`custom-accordion-item ${
                activeIndex === index ? "active" : ""
              }`}
              key={index}
            >
              <div
                className="custom-accordion-header"
                onClick={() =>
                  setActiveIndex(index === activeIndex ? null : index)
                }
              >
                {item.title}
                <span className="custom-accordion-icon">
                  {activeIndex === index ? "-" : "+"}
                </span>
              </div>
              <div
                className="custom-accordion-content"
                style={{ display: activeIndex === index ? "block" : "none" }}
              >
                <p>{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      </section>
      
      <TopSellings/>
    </>
  );
};

export default ProductDetail;
