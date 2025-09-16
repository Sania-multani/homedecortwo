import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      {/* Map Section */}
      <div
        className="contact_map"
        style={{ marginTop: "4.1rem" }}
        data-aos="fade-up"
      >
        <div className="map-area">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3326.550011490264!2d77.13831777529163!3d28.69823397562892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3b9463c4047%3A0x9de6c1b6e2892193!2sAxepert%20Exhibits%20Private%20Limited%20-%20Software%20Development%20Services!5e1!3m2!1sen!2sin!4v1748591037089!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
          ></iframe>
        </div>
      </div>

      {/* Contact Area */}
      <div className="contact_area">
        <div className="container">
          <div className="row">
            {/* Contact Info */}
            <div
              className="col-lg-6 col-md-12"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <div className="contact_message content">
                <h1 data-aos="fade-up">Contact Us</h1>
                <p data-aos="fade-up" data-aos-delay="200">
                  Claritas est etiam processus dynamicus, qui sequitur mutationem
                  consuetudium lectorum. Mirum est notare quam littera gothica,
                  quam nunc putamus parum claram anteposuerit litterarum formas
                  human. qui sequitur mutationem consuetudium lectorum. Mirum est
                  notare quam
                </p>
                <ul>
                  <li data-aos="fade-up" data-aos-delay="300">
                    <i className="bi bi-geo-alt-fill custom-contact-icons"></i>
                    Address : KD-3, Block KD, Dakshini Pitampura, Pitampura
                    Delhi, 110034
                  </li>
                  <li data-aos="fade-up" data-aos-delay="400">
                    <i className="bi bi-telephone-fill custom-contact-icons"></i>
                    <a
                      href="tel:+911234567890"
                      className="no-link-style"
                    >
                      +91 1234567890
                    </a>
                  </li>
                  <li data-aos="fade-up" data-aos-delay="500">
                    <i className="bi bi-envelope custom-contact-icons"></i>
                    <a
                      href="mailto:demo@example.com"
                      className="no-link-style"
                    >
                      demo@example.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div
              className="col-lg-6 col-md-12"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              <div className="contact_message form">
                <h3 data-aos="fade-up">Tell us your query</h3>
                <form id="contact-form" method="POST">
                  <p data-aos="fade-up" data-aos-delay="300">
                    <label>Your Name (required)</label>
                    <input name="name" placeholder="Name *" type="text" />
                  </p>
                  <p data-aos="fade-up" data-aos-delay="400">
                    <label>Your Email (required)</label>
                    <input name="email" placeholder="Email *" type="email" />
                  </p>
                  <p data-aos="fade-up" data-aos-delay="500">
                    <label>Subject</label>
                    <input name="subject" placeholder="Subject *" type="text" />
                  </p>
                  <div
                    className="contact_textarea"
                    data-aos="fade-up"
                    data-aos-delay="600"
                  >
                    <label>Your Message</label>
                    <textarea
                      placeholder="Message *"
                      name="message"
                      className="form-control2"
                    ></textarea>
                  </div>
                  <button type="submit" data-aos="flip-up" data-aos-delay="700">
                    Send
                  </button>
                  <p className="form-messege"></p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
