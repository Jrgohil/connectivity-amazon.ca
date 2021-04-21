import React from "react";

export default function AddProduct() {
  const submitHandler = (event) => {
    event.preventDefault();
    var jwt = localStorage.getItem("authorization");
    fetch("http://localhost:5000/products/addproduct", {
      method: "POST",
      body: JSON.stringify({
        name: event.target.name.value,
        category: event.target.category.value,
        description: event.target.description.value,
        price: event.target.price.value,
        quantity: event.target.quantity.value,
        img: event.target.image.value,
        bestseller: event.target.bestseller.value,
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
      <form method="post" onSubmit={submitHandler}>
        <div className="form-group">
          <label>Product Title: </label>
          <input type="text" name="name" className="form-control"></input>
        </div>
        <div className="form-group">
          <label>Product Category: </label>
          <input type="text" name="category" className="form-control"></input>
        </div>
        <div className="form-group">
          <label>Product Description: </label>
          <input
            type="text"
            name="description"
            className="form-control"
          ></input>
        </div>
        <div className="form-group">
          <label>Product Price: </label>
          <input type="text" name="price" className="form-control"></input>
        </div>
        <div className="form-group">
          <label>Product Quantity: </label>
          <input type="text" name="quantity" className="form-control"></input>
        </div>
        <div className="form-group">
          <label>Product Image: </label>
          <input type="text" name="image" className="form-control"></input>
        </div>
        <div className="form-group">
          <label>BestSeller: </label>
          <select className="form-select form-control" name="bestseller">
            <option value="true">true</option>
            <option value="false">false</option>
          </select>
        </div>
        <div className="form-group">
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
