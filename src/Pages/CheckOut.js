import React, { useState } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const CheckoutPage = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [emailPhoneSaved, setEmailPhoneSaved] = useState(false);
  const [shippingSaved, setShippingSaved] = useState(false);
  const [shippingInfo, setShippingInfo] = useState({});
  const [showShippingForm, setShowShippingForm] = useState(false);

  const navigate = useNavigate();

  const handleEmailPhoneSubmit = (e) => {
    e.preventDefault();
    if (email && phone) {
      setEmailPhoneSaved(true);
      setShowShippingForm(true);
    }
  };

  const handleShippingSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const data = {
      fullName: form.fullName.value,
      mobile: form.mobile.value,
      address: form.address.value,
      city: form.city.value,
      state: form.state.value,
      pincode: form.pincode.value,
    };
    setShippingInfo(data);
    setShippingSaved(true);
    setShowShippingForm(false);
  };

  const handleEditShipping = () => {
    setShowShippingForm(true);
  };

  return (
    <>
     <section className="breadcrumb-banner mt-3" data-aos="fade-down">
        <div className="container">
          <h2 className="breadcrumb-title">Our Products</h2>
          <p className="breadcrumb-subtitle">
            <a href="/">Home</a> / Shop
          </p>
        </div>
      </section>

    <div className="custom-checkout-wrapper mt-5">
      <Container className="pt-5 pb-5">
        <h3 className="text-center mb-5 section-title">Checkout</h3>
        <Row className="gy-4">
          {/* Left Section */}
          <Col lg={8}>
            {!emailPhoneSaved && (
              <Card className="custom-checkout-card mb-4">
                <Card.Body>
                  <h5 className="mb-4">Contact Information</h5>
                  <Form onSubmit={handleEmailPhoneSubmit}>
                    <Row className="gy-3">
                      <Col md={6}>
                        <Form.Group>
                          <Form.Label>Email Address</Form.Label>
                          <Form.Control
                            type="email"
                            placeholder="example@email.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group>
                          <Form.Label>Phone Number</Form.Label>
                          <Form.Control
                            type="tel"
                            placeholder="9876543210"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required
                          />
                        </Form.Group>
                      </Col>
                      <Col md={12}>
                        <Button type="submit" variant="dark" className="mt-2 px-4 rounded-pill">
                          Continue
                        </Button>
                      </Col>
                    </Row>
                  </Form>
                </Card.Body>
              </Card>
            )}

            {emailPhoneSaved && (
              <Card className="custom-checkout-card mb-4">
                <Card.Body className="d-flex justify-content-between align-items-start">
                  <div>
                    <h5 className="mb-2">Contact Details</h5>
                    <p className="mb-1 fw-semibold">Email: {email}</p>
                    <p className="mb-0 fw-semibold">Phone: {phone}</p>
                  </div>
                </Card.Body>
              </Card>
            )}

            {emailPhoneSaved && showShippingForm && (
              <Card className="custom-checkout-card mb-4">
                <Card.Body>
                  <h5 className="mb-4">Shipping Address</h5>
                  <Form onSubmit={handleShippingSubmit}>
                    <Row className="gy-3">
                      <Col md={6}>
                        <Form.Group>
                          <Form.Label>Full Name</Form.Label>
                          <Form.Control type="text" name="fullName" placeholder="John Doe" required />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group>
                          <Form.Label>Mobile</Form.Label>
                          <Form.Control type="text" name="mobile" placeholder="9876543210" required />
                        </Form.Group>
                      </Col>
                      <Col md={12}>
                        <Form.Group>
                          <Form.Label>Address</Form.Label>
                          <Form.Control type="text" name="address" placeholder="123, Royal Lane" required />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group>
                          <Form.Label>City</Form.Label>
                          <Form.Control type="text" name="city" placeholder="Mumbai" required />
                        </Form.Group>
                      </Col>
                      <Col md={3}>
                        <Form.Group>
                          <Form.Label>State</Form.Label>
                          <Form.Control type="text" name="state" placeholder="MH" required />
                        </Form.Group>
                      </Col>
                      <Col md={3}>
                        <Form.Group>
                          <Form.Label>Pincode</Form.Label>
                          <Form.Control type="text" name="pincode" placeholder="400001" required />
                        </Form.Group>
                      </Col>
                      <Col md={12}>
                        <Button type="submit" variant="dark" className="mt-2 px-4 rounded-pill">
                          Save & Continue
                        </Button>
                      </Col>
                    </Row>
                  </Form>
                </Card.Body>
              </Card>
            )}

            {shippingSaved && !showShippingForm && (
              <Card className="custom-checkout-card mb-4">
                <Card.Body className="d-flex justify-content-between align-items-start">
                  <div>
                    <h5 className="mb-2">Shipping Address</h5>
                    <p className="mb-1 fw-semibold">{shippingInfo.fullName}</p>
                    <p className="mb-1">{shippingInfo.address}, {shippingInfo.city}</p>
                    <p className="mb-1">{shippingInfo.state} - {shippingInfo.pincode}</p>
                    <p className="mb-0">Mobile: {shippingInfo.mobile}</p>
                  </div>
                  <Button
                    variant="link"
                    className="text-dark text-decoration-none p-0"
                    onClick={handleEditShipping}
                  >
                    Edit
                  </Button>
                </Card.Body>
              </Card>
            )}

            {shippingSaved && (
              <Card className="custom-checkout-card">
                <Card.Body>
                  <h5 className="mb-4">Payment Method</h5>
                  <Form.Check type="radio" name="payment" label="Cash on Delivery (COD)" className="mb-2" />
                  <Form.Check type="radio" name="payment" label="UPI / QR" className="mb-2" />
                  <Form.Check type="radio" name="payment" label="Credit / Debit Card" />
                </Card.Body>
              </Card>
            )}
          </Col>

          {/* Right Section - Order Summary */}
          <Col lg={4}>
            <Card className="custom-checkout-card sticky-top" style={{ top: "100px" }}>
              <Card.Body>
                <h5 className="mb-3">Order Summary</h5>
                <div className="d-flex justify-content-between mb-3">
                  <span>Subtotal</span>
                  <span>₹3398</span>
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
                <div className="d-flex justify-content-between fw-bold">
                  <span>Total</span>
                  <span>₹3398</span>
                </div>
                <Button
                  variant="dark"
                  className="w-100 rounded-pill mt-2"
                  onClick={() => {
                    toast.success("Order placed successfully! 🎉");
                    navigate("/");
                    
                  }}
                >
                  Place Order
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

export default CheckoutPage;
