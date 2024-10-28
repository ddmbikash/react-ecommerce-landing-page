import React, { useState } from 'react';

const testimonials = [
  { id: 1, text: "Great products! Will buy again!", author: "John Doe" },
  { id: 2, text: "Fantastic service!", author: "Jane Smith" },
  { id: 3, text: "Highly recommend this store!", author: "Alice Johnson" },
  { id: 4, text: "A wonderful shopping experience!", author: "Bob Brown" },
];

const CustomTestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="testimonials">
      <h2>What Our Customers Say</h2>
      <div className="testimonial-container">
        <div className="testimonial">
          <blockquote>"{testimonials[currentIndex].text}"</blockquote>
          <cite>- {testimonials[currentIndex].author}</cite>
        </div>
        <button className="slider-button" onClick={prevTestimonial}>❮</button>
        <button className="slider-button" onClick={nextTestimonial}>❯</button>
      </div>
    </section>
  );
};

export default CustomTestimonialSlider;
