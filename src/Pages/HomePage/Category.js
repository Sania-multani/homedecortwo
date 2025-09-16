import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const products = [
  {
    id: 1,
    img: "/assets/category/hom1.jpg",
    title: "Splash Golden Sofa Set",
    category: "Chair",
    price: "Rs. 32000.00",
  },
  {
    id: 4,
    img: "/assets/category/hom2.jpg",
    title: "Splash Golden Dining Table",
    category: "Table",
    price: "Rs. 19000.00",
  },
  {
    id: 2,
    img: "/assets/category/hom3.jpg",
    title: "Splash Golden Bed Frame",
    category: "Chair",
    price: "Rs. 12299.00",
  },
  {
    id: 3,
    img: "/assets/category/hom4.jpg",
    title: "Splash Golden Bed Frame",
    category: "Table",
    price: "Rs. 45000.00",
  },
];

const Category = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="category-section">
      <h2 className="section-title" data-aos="fade-up">
        Selected Furniture
      </h2>
     <div className="container">
      <div className="category-grid">
        {products.map((item, index) => (
          <div
            key={item.id}
            className={`category-card ${index % 2 === 0 ? "big" : "small"}`}
            data-aos="fade-up"
            data-aos-delay={index * 200} // thoda staggered effect
          >
            <div className="img-container" data-aos="zoom-in">
              <img src={item.img} alt={item.title} />
            </div>
            <h3 data-aos="fade-up">{item.title}</h3>
            <div className="meta" data-aos="fade-up">
              <p>{item.category}</p>
              <p className="price">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default Category;
