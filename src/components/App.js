import { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import ProductContext from "../context/ProductContext";
import "../assets/css/App.css";
import ProductListing from "../pages/ProductListing";
import Registration from "../pages/Registration";
import Login from "../pages/Login";
import ProductDetail from "../pages/ProductDetail";
import AddProduct from "../pages/AddProduct";
import AllProduct from "../pages/AllProduct";
import UpdateProduct from "../pages/UpdateProduct";

const App = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts((previousState) => {
          previousState = data;
          return previousState;
        });
      })
      .catch((err) => console.log(`Error ${err}`));

    fetch("http://localhost:5000/products/allcategories")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCategories((previousState) => {
          previousState = data;
          return previousState;
        });
      })
      .catch((err) => console.log(`Error ${err}`));
  }, []);

  console.log("App");

  return (
    <ProductContext.Provider value={{ products, categories }}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/Register">
            <Registration />
          </Route>

          <Route path="/Login">
            <Login />
          </Route>

          <Route path="/ProductDetail/:id">
            <ProductDetail />
          </Route>

          <Route path="/ProductListing/:cat">
            <ProductListing />
          </Route>

          <Route path="/admin/addproduct">
            <AddProduct />
          </Route>

          <Route path="/admin/updateproduct/:id">
            <UpdateProduct />
          </Route>
          <Route path="/admin">
            <AllProduct />
          </Route>
        </Switch>
      </Router>
    </ProductContext.Provider>
  );
};

export default App;
