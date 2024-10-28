import React from 'react';

const Categories = () => {
  const categories = [
    { id: 1, name: 'Electronics', img: 'https://img.freepik.com/free-vector/mobile-phone-with-working-bags-isometric-style_23-2147642175.jpg' },
    { id: 2, name: 'Fashion', img: 'https://img.freepik.com/free-vector/3d-modeling-concept-illustration_114360-3149.jpg' },
    { id: 3, name: 'Home & Kitchen', img: 'https://img.freepik.com/premium-photo/user-setting-up-product-categories-payment-options-through-ecommerce-control-panel_1327465-19145.jpg' },
    { id: 4, name: 'Beauty & Health', img: 'https://img.freepik.com/free-vector/influencer-marketing-concept-with-finger-pointing_23-2147682195.jpg' },
    { id: 5, name: 'Software', img: 'https://img.freepik.com/free-vector/narcologist-web-banner-landing-page-drug-tobacco-addiction-medical-treatment-drug-addicted-people-online-magazine-flat-vector-illustration_613284-3074.jpg' },
    { id: 6, name: 'Website & App', img: 'https://img.freepik.com/free-vector/product-presentation-concept-illustration_114360-8416.jpg' },
      
    { id: 7, name: 'Digital Marketing', img: 'https://img.freepik.com/premium-photo/user-setting-up-product-categories-payment-options-through-ecommerce-control-panel_1327465-19145.jpg' },
    { id: 8, name: 'SEO', img: 'https://img.freepik.com/free-vector/mobile-phone-with-working-bags-isometric-style_23-2147642175.jpg' },
    { id: 9, name: 'Graphic Design', img: 'https://img.freepik.com/free-vector/product-presentation-concept-illustration_114360-8416.jpg' },
  ];

  return (
    <section className="categories">
      <h2>Shop by Category</h2>
      <div className="category-grid">
        {categories.map(category => (
          <div key={category.id} className="category">
            <img src={category.img} alt={category.name} />
            <h3>{category.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
