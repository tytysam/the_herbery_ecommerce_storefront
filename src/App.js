import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { commerce } from "./lib/commerce.js";
import CssBaseline from "@material-ui/core/CssBaseline";

import {
  Navbar,
  Cart,
  Checkout,
  Hero,
  Products,
  ShowProduct,
  Footer,
  PageNotFound,
} from "./components";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  const fetchProducts = async () => {
    const { data } = await commerce.products.list(); // returns promise from commerce.js
    setProducts(data);
  };

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
    // commerce.[object].[action]()
  };

  const handleAddToCart = async (productId, quantity) => {
    // destructure cart FROM the response object | same as saying ==> const res = await...    setCart(res.cart)
    const { cart } = await commerce.cart.add(productId, quantity);

    setCart(cart);
  };

  const handleUpdateCartQuantity = async (productId, quantity) => {
    // destructure cart FROM the response object | same as saying ==> const res = await...    setCart(res.cart)
    const { cart } = await commerce.cart.update(productId, { quantity });

    setCart(cart);
  };

  const handleRemoveFromCart = async (productId) => {
    // destructure cart FROM the response object | same as saying ==> const res = await...    setCart(res.cart)
    const { cart } = await commerce.cart.remove(productId);

    setCart(cart);
  };

  const handleEmptyCart = async () => {
    // destructure cart FROM the response object | same as saying ==> const res = await...    setCart(res.cart)

    const { cart } = await commerce.cart.empty();

    setCart(cart);
  };

  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();

    setCart(newCart);
  };

  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(
        checkoutTokenId,
        newOrder
      );

      setOrder(incomingOrder);
      refreshCart();
    } catch (error) {
      setErrorMessage(error.data.error.message);
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  return (
    <>
      <Router>
        <CssBaseline />
        <Navbar totalItems={cart.total_items} />
        <Switch>
          <Route exact path="/">
            <Hero />
            <Products products={products} onAddToCart={handleAddToCart} />
          </Route>
          <Route
            path="/plants/:permalink"
            render={(routerProps) => {
              return (
                <ShowProduct
                  routerProps={routerProps}
                  onAddToCart={handleAddToCart}
                />
              );
            }}
          />
          <Route exact path="/cart">
            <Cart
              cart={cart}
              handleUpdateCartQuantity={handleUpdateCartQuantity}
              handleRemoveFromCart={handleRemoveFromCart}
              handleEmptyCart={handleEmptyCart}
            />
          </Route>
          <Route exact path="/checkout">
            <Checkout
              cart={cart}
              order={order}
              handleCaptureCheckout={handleCaptureCheckout}
              error={errorMessage}
            />
          </Route>
          <Route component={PageNotFound} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
};

export default App;
