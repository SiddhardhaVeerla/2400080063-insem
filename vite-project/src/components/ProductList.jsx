import React from "react";

function ProductList({ products, onProductClick }) {
  return (
    <div className="product-list">
      <h2>Available Products</h2>
      <ul>
        {products.map(product => (
          <li key={product.id} className="product-item" onClick={() => onProductClick(product)}>
            <strong>{product.name}</strong> — {product.price}
            <br />
            <span>{product.shortDesc}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
