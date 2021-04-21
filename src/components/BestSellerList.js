import React from "react";
import { useEffect, useState } from "react";

import BestSeller from "./BestSeller";
const BestSellerList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products/bestsellers")
      .then((res) => res.json())
      .then((products) => {
        setProducts((previousState) => {
          previousState = products;
          return previousState;
        });
        console.log(products);
      })
      .catch((err) => console.log(`Error ${err}`));
  }, []);

  return (
    <section className="pt-5 pb-5">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <h3 className="mb-3">Best Sellers </h3>
          </div>

          <div className="col-12">
            <div
              id="carouselExampleIndicators2"
              className="carousel slide"
              data-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="row">
                    {products.map((product, key) =>
                      key < 4 ? (
                        <div className="col-md-3 mb-3">
                          <BestSeller
                            id={product.id}
                            title={product.name}
                            img={product.img}
                          ></BestSeller>
                        </div>
                      ) : null
                    )}
                  </div>
                </div>
                <div className="carousel-item ">
                  <div className="row">
                    {products.map((product, key) =>
                      key >= 4 ? (
                        key <= 7 ? (
                          <div className="col-md-3 mb-3">
                            <BestSeller
                              id={product.id}
                              title={product.name}
                              img={product.img}
                            ></BestSeller>
                          </div>
                        ) : null
                      ) : null
                    )}
                  </div>
                </div>
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselExampleIndicators2"
              role="button"
              data-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleIndicators2"
              role="button"
              data-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestSellerList;
