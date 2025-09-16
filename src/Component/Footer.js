import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" text-white pt-5" style={{backgroundColor:"#3B2F29"}}>
      <div className="container">
        <div className="row gy-4">
          <div className="col-md-3">
            <img src="/assets/logo02.png" style={{filter: "invert(1)" , width: "10rem", cursor:"pointer"}}/>
            <p className="small footer-text">
              Lacus vestibulum sed arcu non odio euismod. Vulputate eu
              scelerisque felis imperdiet proin fermentum.
            </p>
            <div className="d-flex gap-3 mt-3 fs-5">
              <a href="#" className="text-white">
                <FaFacebookF />
              </a>
              <a href="#" className="text-white">
                <FaTwitter />
              </a>
              <a href="#" className="text-white">
                <FaPinterestP />
              </a>
              <a href="#" className="text-white">
                <FaInstagram />
              </a>
            </div>
          </div>

          <div className="col-md-3">
            <h5 className="fw-semibold mb-3">CUSTOMER SERVICES</h5>
            <ul className="list-unstyled small">
              <li>
                <a href="#" className="text-white text-decoration-none">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-none">
                  Track Your Orders
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-none">
                  Book an Appointment
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-none">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-3">
            <h5 className="fw-semibold mb-3">INFORMATION</h5>
            <ul className="list-unstyled small">
              <li>
                <a href="#" className="text-white text-decoration-none">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-none">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-none">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-none">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-3">
            <h5 className="fw-semibold mb-3">NEWSLETTER</h5>
            <p className="small">
              Subscribe to our newsletter for updates and exclusive offers.
            </p>
            <form className="d-flex">
              <input
                type="email"
                className="form-control me-2"
                placeholder="Enter your email"
              />
              <button className="btn btn-light" style={{backgroundColor:" #CE7171", color: "white" , border:"none"}}>→</button>
            </form>
          </div>
        </div>

        <div className="row mt-5">
          <hr/>
          <div className="col text-center small text-light mb-3">
        <p>All Right Reserved © 2025 Axepert Exhibits Pvt. Ltd.</p>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
