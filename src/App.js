import React, { useState, useEffect } from "react";
import { commerce } from "./lib/commerce.js";

// import Products from "./components/Products/Products.jsx";
// import Navbar from "./components/Navbar/Navbar.jsx";

import { Products, Navbar } from "./components";

const App = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const { data } = await commerce.products.list(); // returns promise from commerce.js
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <Navbar />
      <Products products={products} />
    </div>
  );
};

export default App;
