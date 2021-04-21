import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function UpdateProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch("http://localhost:5000/products/getproduct/" + id)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        console.log(data);
      })
      .catch((err) => console.log(`Error ${err}`));
  }, []);

  const updateHandler = (event) => {
    event.preventDefault();
    var jwt = localStorage.getItem("authorization");
    fetch("http://localhost:5000/products/updateproduct/" + id, {
      method: "PUT",
      body: JSON.stringify({
        name: event.target.name.value,
        category: event.target.category.value,
        description: event.target.description.value,
        price: event.target.price.value,
        quantity: event.target.quantity.value,
        img: event.target.image.value,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        authorization: "Bearer " + jwt,
      },
    })
      .then((res) => res.json())
      .then((data) => alert(data.msg))
      .catch((err) => console.log(`Error ${err}`));
  };

  return (
    <div style={{ margin: "auto", width: "400px" }}>
      <form method="put" onSubmit={updateHandler}>
        <div className="form-group">
          <label>Product Title: </label>
          <input
            type="text"
            name="name"
            className="form-control"
            defaultValue={product.name}
          ></input>
        </div>
        <div className="form-group">
          <label>Product Category: </label>
          <input
            type="text"
            name="category"
            className="form-control"
            value={product.category}
          ></input>
        </div>
        <div className="form-group">
          <label>Product Description: </label>
          <input
            type="text"
            name="description"
            className="form-control"
            value={product.description}
          ></input>
        </div>
        <div className="form-group">
          <label>Product Price: </label>
          <input
            type="text"
            name="price"
            className="form-control"
            value={product.price}
          ></input>
        </div>
        <div className="form-group">
          <label>Product Quantity: </label>
          <input
            type="text"
            name="quantity"
            className="form-control"
            value={product.quantity}
          ></input>
        </div>
        <div className="form-group">
          <label>Product Image: </label>
          <input
            type="text"
            name="image"
            className="form-control"
            value={product.img}
          ></input>
        </div>
        <div className="form-group">
          <button className="btn btn-primary" type="submit">
            Update
          </button>
        </div>
      </form>
    </div>
  );
}
