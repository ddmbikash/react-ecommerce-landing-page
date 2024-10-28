import React from 'react';

const SpecialOffers = () => {
  return (
    <section className="special-offers">
      <h2>Special Offers</h2>
      <div className="special-offers-grid">
      <div className="offer">
        <img src="https://img.freepik.com/free-vector/2x1-promotion-banner_52683-50845.jpg" alt="Special Offer" />
        <h3>20% off on all Electronics!</h3>
        <button>Shop Now</button>
      </div>
      
      <div className="offer">
        <img src="https://img.freepik.com/free-vector/black-friday-offers-banner-with-confetti-design_1017-22257.jpg" alt="Special Offer" />
        <h3>20% off on all Electronics!</h3>
        <button>Shop Now</button>
      </div>
      
      <div className="offer">
        <img src="https://img.freepik.com/free-vector/blue-background-special-offers_23-2147697598.jpg" alt="Special Offer" />
        <h3>20% off on all Electronics!</h3>
        <button>Shop Now</button>
      </div>
      </div>
      
    </section>
  );
};

export default SpecialOffers;
