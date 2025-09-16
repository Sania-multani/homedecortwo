import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const testimonials = [
  {
    quote:
      '“The necklace I bought sparkles beautifully. It’s become my signature piece.”',
    author: 'Sophia Kapoor',
    role: 'Fashion Blogger',
  },
  {
    quote:
      '“Absolutely love the craftsmanship. The ring is elegant yet timeless.”',
    author: 'Arjun Mehta',
    role: 'Entrepreneur',
  },
  {
    quote:
      '“Every piece feels luxurious and unique. I always get compliments.”',
    author: 'Olivia Fernandez',
    role: 'Stylist & Jewellery Enthusiast',
  },
  {
    quote:
      '“Perfect blend of tradition and modern design. My bracelet is just stunning.”',
    author: 'Priya Nair',
    role: 'Wedding Planner',
  },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: "ease-in-out" });
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        setAnimating(false);
      }, 500); 
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="testimonial-wrapper" data-aos="fade-up">
      <div className={`testimonial-box blur-glass ${animating ? 'slide-out' : 'slide-in'}`}>
        <div className="testimonial-content">
          <h2 className="testimonial-heading">What Our Customers Say</h2>
          <p className="testimonial-quote">{testimonials[currentIndex].quote}</p>
          <p className="testimonial-author">{testimonials[currentIndex].author}</p>
          <p className="testimonial-role">{testimonials[currentIndex].role}</p>
          <div className="testimonial-dots">
            {testimonials.map((_, i) => (
              <span
                key={i}
                className={`dot ${i === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(i)}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
