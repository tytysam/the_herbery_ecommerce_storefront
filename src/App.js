import React from "react";
import { commerce } from "./lib/commerce.js";

// import Products from "./components/Products/Products.jsx";
// import Navbar from "./components/Navbar/Navbar.jsx";

import { Products, Navbar } from "./components";

const App = () => {
  return (
    <div>
      <Navbar />
      <Products />
    </div>
  );
};

export default App;
