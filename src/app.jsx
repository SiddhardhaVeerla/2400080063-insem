import React, { useState } from "react";
import ProductList from "./components/ProductList";
import ProductPopup from "./components/ProductPopup";
import "./app.css";

// Sample product data
const products = [
  {
    id: 1,
    name: "pen",
    price: "₹10",
    shortDesc: "pen",
    image: "https://via.placeholder.com/150",
    longDesc: "This pen added to your product list."
  },
  {
    id: 2,
    name: "book",
    price: "₹50",
    shortDesc: "book",
    image: "https://via.placeholder.com/150",
    longDesc: "This book added to your product list."
  },
  {
    id: 3,
    name: "colour printout",
    price: "₹20",
    shortDesc: "cprint",
    image: "https://via.placeholder.com/150",
    longDesc: "This colour printout added to your product list."
  },
];

function App() {
  const [popupVisible, setPopupVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setPopupVisible(true);
  };

  const handleClose = () => {
    setPopupVisible(false);
    setSelectedProduct(null);
  };

  return (
    <div className="app">
      <h1>🛒 Online Store Products</h1>
      <ProductList products={products} onProductClick={handleProductClick} />
      {popupVisible && (
        <ProductPopup product={selectedProduct} onClose={handleClose} />
      )}
    </div>
  );
}

export default App;
