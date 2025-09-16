import React, { useState, useEffect } from "react";
import { FaShoppingBag, FaUser, FaBars, FaTimes } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";

const menuItems = [
  { label: "HOME", target: "/" },
  { label: "COLLECTIONS", target: "/collections" },
  { label: "ABOUT US", target: "/about" },
  { label: "CONTACT US", target: "/contact" },
];

const cartItems = [
    {
      id: 201,
      title: "Wooden Chair",
      price: "₹15,999",
      image: "/assets/category/hom15.jpg",
    },
    {
      id: 202,
      title: "Wooden Chair",
      price: "₹8,499",
      image: "/assets/category/hom17.jpg",
    },
     
    
  
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showSignupForm, setShowSignupForm] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => {
      const price = parseInt(item.price.replace(/[^\d]/g, ""));
      return total + price;
    }, 0);
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);

    if (location.pathname === "/") {
      window.addEventListener("scroll", handleScroll);
    } else {
      setScrolled(true);
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  return (
    <>
      {/* HEADER */}
      <header
        className={`custom-navbar ${
          scrolled ? "scrolled" : ""
        } ${location.pathname !== "/" ? "fixed-top" : ""}`}
      >
        <div className="container-fluid d-flex justify-content-between align-items-center">
          {/* Left: Hamburger */}
          <div className="menu-toggle text-white" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </div>

          {/* Center: Logo */}
          <div className="brand-logo position-absolute start-50 translate-middle-x">
            <a href="/">
              <img src="/assets/logo03.png" alt="Logo" height="50" />
            </a>
          </div>

          {/* Right: Icons */}
          <div className="d-flex align-items-center gap-3 ms-auto">
            {/* Cart */}
            <div className="position-relative cart-icon">
              <FaShoppingBag size={20} onClick={() => setShowCart(true)} style={{ cursor: "pointer",color:"white" }} />
              <span className="cart-count">0</span>
            </div>

            {/* Login Dropdown */}
            <div
              className="login-toggle position-relative"
              onClick={() => setShowLogin(!showLogin)}
            >
              <FaUser size={20} style={{ cursor: "pointer",color:"white" }} />
              {showLogin && (
                <div className="login-dropdown position-absolute end-0 mt-2" style={{cursor:"pointer"}}>
                  <span
                    className="dropdown-item"
                    onClick={() => {
                      setShowLoginForm(true);
                      setShowSignupForm(false);
                      setShowLogin(false);
                    }}
                  >
                    Login/Register
                  </span>
                  <a href="/myProfile" className="dropdown-item">Profile</a>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Slide-out side menu */}
        <nav className={`side-menu ${menuOpen ? "open" : ""}`}>
          {menuItems.map(({ label, target }) => (
            <a
              key={label}
              href={target}
              onClick={() => setMenuOpen(false)}
              className="nav-odometer"
              data-text={label}
            >
              <span>{label}</span>
            </a>
          ))}
        </nav>
      </header>

      {/* ================= OFFCANVAS SECTIONS ================= */}

      {/* CART OFFCANVAS */}
      {showCart && (
        <>
          <div className="wishlist-overlay" onClick={() => setShowCart(false)}></div>
          <div className="cart-offcanvas show">
            <div className="wishlist-header">
              <span className="wishlist-title">My Cart</span>
              <FaTimes onClick={() => setShowCart(false)} className="rotate-on-hover" style={{cursor:"pointer"}}/>
              
            </div>

            <div className="wishlist-items">
              {cartItems.map((item) => (
                <div
                  className="wishlist-item"
                  key={item.id}
                  onClick={() => {
                    navigate("/productDetail");
                    setShowCart(false);
                  }}
                >
                  <img src={item.image} alt={item.title} />
                  <div className="wishlist-item-details">
                    <div className="wishlist-item-title">{item.title}</div>
                    <div className="wishlist-item-price">{item.price}</div>
                    <div className="wishlist-item-actions">
                      <button className="remove-btn">Remove</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-bottom">
              <div className="cart-total">
                <span>Total:</span>
                <span>₹{getTotalPrice()}</span>
              </div>
              <div className="cart-total">
                <span>GST (18%):</span>
                <span>₹{Math.round(getTotalPrice() * 0.18)}</span>
              </div>
              <div className="cart-total grand-total">
                <span>Grand Total:</span>
                <span>
                  ₹{getTotalPrice() + Math.round(getTotalPrice() * 0.18)}
                </span>
              </div>
              <button
                className="checkout-btn"
                onClick={() => {
                  setShowCart(false);
                  navigate("/myCart");
                }}
              >
                View Cart
              </button>
            </div>
          </div>
        </>
      )}

      {/* LOGIN OFFCANVAS */}
     {/* LOGIN OFFCANVAS */}
{showLoginForm && (
  <>
    <div className="wishlist-overlay" onClick={() => setShowLoginForm(false)}></div>
    <div className="login-slide-form show">
      <div className="login-header">
        <h4>Login</h4>
        <FaTimes onClick={() => setShowLoginForm(false)} className="rotate-on-hover" style={{cursor:"pointer"}}/>
      </div>
      <form className="login-form">
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Login</button>
        <button type="button" className="google-login">Login with Google</button>
        <p className="form-link">
          Don’t have an account?{" "}
          <span
            onClick={() => {
              setShowLoginForm(false);
              setShowSignupForm(true);
            }}
          >
            Sign up
          </span>
        </p>
      </form>
    </div>
  </>
)}

{/* SIGNUP OFFCANVAS */}
{showSignupForm && (
  <>
    <div className="wishlist-overlay" onClick={() => setShowSignupForm(false)}></div>
    <div className="login-slide-form show">
      <div className="login-header">
        <h4>Sign Up</h4>
        <FaTimes onClick={() => setShowSignupForm(false)} className="rotate-on-hover" style={{cursor:"pointer"}} />
      </div>
      <form className="login-form">
        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Sign Up</button>
        <p className="form-link">
          Already have an account?{" "}
          <span
            onClick={() => {
              setShowSignupForm(false);
              setShowLoginForm(true);
            }}
          >
            Login
          </span>
        </p>
      </form>
    </div>
  </>
)}

    </>
  );
};

export default Header;
