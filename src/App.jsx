import "./styles/base.sass";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Page404 from "./components/404";
import AdminPage from "./components/AdminPage/AdminPage";
import CategoryPage from "./components/CategoryPage/CategoryPage";
import ContactPage from "./components/Contact/ContactPage";
import HomePage from "./components/HomePage/HomePage";
import MenuPage from "./components/MenuPage/MenuPage";
import ProductPage from "./components/ProductPage/ProductPage";

import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/menu" component={MenuPage} />
          <Route path="/menu/:categoryID/:productID" component={ProductPage} />
          <Route path="/menu/:categoryID" component={CategoryPage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/admin" component={AdminPage} />
          <Route path="*" component={Page404} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}
