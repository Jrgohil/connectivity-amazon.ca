import React from "react";
import { useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import "../assets/css/table.css";
import Logout from "../components/Logout";

export default function AllProduct() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    var jwt = localStorage.getItem("authorization");
    if (!jwt) {
      window.location = "/login";
    }

    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts((previousState) => {
          previousState = data;
          return previousState;
        });
      })
      .catch((err) => console.log(`Error ${err}`));
  });

  return (
    <div>
      <center>
        <h2>All Products</h2>
      </center>
      <Logout></Logout>
      <Link
        className="btn btn-primary"
        style={{ float: "right" }}
        to="/admin/addproduct"
      >
        Add Product
      </Link>
      <table>
        <thead>
          <tr>
            <td>Title</td>
            <td>Category</td>
            <td>Quantity</td>
            <td>Price</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr>
              <td>{product.name}</td>
              <td>{product.category}</td>
              <td>{product.quantity}</td>
              <td>{product.price}</td>
              <td>
                <Link
                  className="btn btn-info"
                  to={"/admin/updateproduct/" + product.id}
                >
                  Update
                </Link>
                <button className="btn btn-danger">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
