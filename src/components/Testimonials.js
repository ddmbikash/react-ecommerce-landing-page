import React from 'react';

const Testimonials = () => {
  const testimonials = [
    { id: 1, text: "Great products! Will buy again!", author: "John Doe" },
    { id: 2, text: "Fantastic service!", author: "Jane Smith" },
    { id: 3, text: "Highly recommend this store!", author: "Alice Johnson" },
  ];

  return (
    <section className="testimonials">
      <h2>What Our Customers Say</h2>
      {testimonials.map(testimonial => (
        <blockquote key={testimonial.id}>
          "{testimonial.text}" - <strong>{testimonial.author}</strong>
        </blockquote>
      ))}
    </section>
  );
};

export default Testimonials;
