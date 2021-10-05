import "./styles/base.scss";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Page404 from "./components/404";
import CategoryPage from "./components/Category/CategoryPage";
import ContactPage from "./components/Contact/ContactPage";
import HomePage from "./components/HomePage/HomePage";
import ProductPage from "./components/Product/ProductPage";
import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/menu/:category/:productID" component={ProductPage} />
          <Route path="/menu/:category" component={CategoryPage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/" component={Page404} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}
