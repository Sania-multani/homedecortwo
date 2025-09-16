import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const MainCart = () => {
  const navigate = useNavigate();

  // 💍 Jewellery cart items
  const cartItems = [
    {
      id: 1,
      name: "Wooden Chair",
      image: "/assets/category/hom15.jpg",
      size: "18 Inches",
      price: 24999,
    },
    {
      id: 2,
      name: "Wooden Chair",
      image: "/assets/category/hom17.jpg",
      size: "Pair",
      price: 15999,
    },
    {
      id: 3,
      name: "Wooden Chair",
      image: "/assets/category/hom18.jpg",
      size: "6 US",
      price: 4999,
    },
  ];

  // State for individual product quantities
  const [quantities, setQuantities] = useState(
    cartItems.reduce((acc, item) => {
      acc[item.id] = 1;
      return acc;
    }, {})
  );

  const handleQuantityChange = (id, delta) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(1, (prev[id] || 1) + delta),
    }));
  };

  const handleRemove = (id) => {
    // Logic to remove item from cart
    console.log("Remove item with id:", id);
  };

  const getSubtotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * (quantities[item.id] || 1),
      0
    );
  };

  return (
    <>
      <section className="breadcrumb-banner mt-3" data-aos="fade-down">
        <div className="container">
          <h2 className="breadcrumb-title">Our Jewellery</h2>
          <p className="breadcrumb-subtitle">
            <a href="/">Home</a> / Shop
          </p>
        </div>
      </section>
      <div className="perfume-cart-wrapper mb-4">
        <Container className="pt-4 pb-3">
          <div className="shopping-cart-banner">
            <h3 className="text-center mb-4 section-title">My Shopping Cart</h3>
          </div>

          <Row className="gy-4">
            {/* Cart Items */}
            <Col lg={8}>
              <Card className="cart-card">
                <Card.Body>
                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="d-flex justify-content-between align-items-center mb-4 border-bottom pb-3"
                    >
                      <div className="d-flex align-items-center gap-3">
                        <Image
                          src={item.image}
                          alt={item.name}
                          style={{
                            width: "70px",
                            height: "70px",
                            borderRadius: "8px",
                            objectFit: "cover",
                          }}
                        />
                        <div>
                          <h6 className="mb-1">{item.name}</h6>
                          <small className="text-muted">
                            {item.size} • ₹{item.price}
                          </small>
                        </div>
                      </div>

                      <div
                        className="d-flex align-items-center gap-2 cart-action-group"
                        style={{ flexWrap: "wrap" }}
                      >
                        <div>
                          <div
                            className="d-flex align-items-center border rounded px-2 py-1 quantity-box"
                            style={{
                              backgroundColor: "#f8f9fa",
                              border: "1px solid #ced4da",
                              borderRadius: "8px",
                              height: "36px",
                            }}
                          >
                            <Button
                              variant="outline-secondary"
                              size="sm"
                              style={{
                                padding: "0 8px",
                                fontSize: "18px",
                                lineHeight: "1",
                                height: "28px",
                              }}
                              onClick={() =>
                                handleQuantityChange(item.id, -1)
                              }
                            >
                              −
                            </Button>
                            <span
                              style={{
                                minWidth: "30px",
                                textAlign: "center",
                                fontWeight: "500",
                                lineHeight: "28px",
                              }}
                            >
                              {quantities[item.id]}
                            </span>
                            <Button
                              variant="outline-secondary"
                              size="sm"
                              style={{
                                padding: "0 8px",
                                fontSize: "18px",
                                lineHeight: "1",
                                height: "28px",
                              }}
                              onClick={() =>
                                handleQuantityChange(item.id, 1)
                              }
                            >
                              +
                            </Button>
                          </div>
                        </div>

                        <Button
                          variant="outline-danger"
                          size="sm"
                          style={{
                            height: "36px",
                            display: "flex",
                            alignItems: "center",
                            paddingTop: "0px",
                            paddingBottom: "0px",
                          }}
                          onClick={() => handleRemove(item.id)}
                        >
                          Remove
                        </Button>
                      </div>
                    </div>
                  ))}
                </Card.Body>
              </Card>
            </Col>

            {/* Order Summary */}
            <Col lg={4}>
              <Card className="cart-card sticky-top" style={{ top: "100px" }}>
                <Card.Body>
                  <h5 className="card-title">Order Summary</h5>
                  <div className="d-flex justify-content-between mb-3">
                    <span>Subtotal</span>
                    <span>₹{getSubtotal()}</span>
                  </div>
                  <div className="d-flex justify-content-between mb-3">
                    <span>GST</span>
                    <span>5%</span>
                  </div>
                  <div className="d-flex justify-content-between mb-3">
                    <span>Shipping</span>
                    <span>Free</span>
                  </div>
                  <hr />
                  <div className="d-flex justify-content-between fw-bold mb-3">
                    <span>Total</span>
                    <span>₹{getSubtotal()}</span>
                  </div>
                  <Button
                    className="w-100 rounded-pill"
                    variant="dark"
                    onClick={() => navigate("/checkout")}
                  >
                    Proceed to Checkout
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default MainCart;
