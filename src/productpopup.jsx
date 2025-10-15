import React from "react";

function ProductPopup({ product, onClose }) {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="close-btn" onClick={onClose}>X</button>
        <h2>{product.name}</h2>
        <img src={product.image} alt={product.name} />
        <p><strong>Price:</strong> {product.price}</p>
        <p>{product.longDesc}</p>
      </div>
    </div>
  );
}

export default ProductPopup;
