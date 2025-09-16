import React from "react";
import { FaHeart, FaShoppingBag } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  return (
    <div className="product-card">
      <div className="product-img-wrapper">
        <img src={product.image} alt={product.name} className="product-img" onClick={()=>navigate('/productDetail')} />
        <div className="product-actions">
          <button className="action-btn"><FaHeart /></button>
          <button className="action-btn"><FaShoppingBag /></button>
        </div>
      </div>
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-category">{product.category}</p>
        <p className="product-price">₹{product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
