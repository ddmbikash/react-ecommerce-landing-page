import React from "react";

const Products = () => {
  const productList = [
    {
      id: 1,
      name: "Product 1",
      price: "$10",
      img: "https://img.freepik.com/free-psd/cyber-monday-super-sale-social-media-post-design-template_47987-17926.jpg",
    },
    {
      id: 2,
      name: "Product 2",
      price: "$20",
      img: "https://img.freepik.com/free-psd/cyber-monday-sale-social-media-post-design-template_47987-18157.jpg",
    },
    {
      id: 3,
      name: "Product 3",
      price: "$30",
      img: "https://img.freepik.com/premium-photo/digital-display-shirt-shirt-with-icons-it_634278-9670.jpg",
    },
    {
      id: 4,
      name: "Product 4",
      price: "$50",
      img: "https://img.freepik.com/free-psd/cyber-monday-sale-social-media-post-design-template_47987-18157.jpg",
    },
    {
      id: 5,
      name: "Product 5",
      price: "$60",
      img: "https://img.freepik.com/free-psd/cyber-monday-super-sale-social-media-post-design-template_47987-17926.jpg",
    },
    {
      id: 6,
      name: "Product 6",
      price: "$80",
      img: "https://img.freepik.com/premium-photo/digital-display-shirt-shirt-with-icons-it_634278-9670.jpg",
    },
  ];

  return (
    <section className="products">
      <h2>Featured Products</h2>
      <div className="product-grid">
        {productList.map((product) => (
          <div key={product.id} className="product">
            <img src={product.img} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
