import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
const ProductsList = () => {
  const [productsList, setProducts] = useState([]);
  let { cat } = useParams();

  useEffect(() => {
    fetch("http://localhost:5000/products/getproducts/" + cat)
      .then((res) => res.json())
      .then((products) => {
        setProducts((previousState) => {
          previousState = products.body;
          return previousState;
        });
      })
      .catch((err) => console.log(`Error ${err}`));
  });

  return (
    <div className="container mt-4">
      <div className="row">
        {productsList.map((product) => (
          <div className="col-md-3">
            <div className="ibox">
              <div
                className="ibox-content product-box"
                style={{ height: "400px" }}
              >
                <img
                  src={product.img}
                  alt={product.name}
                  style={{ height: "200px", width: "200px" }}
                ></img>
                <div className="product-desc">
                  <span className="product-price">{product.price}</span>
                  <Link
                    to={"/ProductDetail/" + product.id}
                    className="product-name"
                  >
                    {product.name}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
