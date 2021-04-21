import React from "react";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import productContext from "../context/ProductContext";
const CategorieList = () => {
  const { categories } = useContext(productContext);
  const { products } = useContext(productContext);

  return (
    <>
      <div className="container">
        <div className="promo-cards card-deck">
          {products.map((cat, key) =>
            key < 4 ? (
              <div className="card " style={{ maxWidth: "200px" }}>
                <h5 className="card-title">{cat.category} Deals</h5>
                <img className="card-img-top" src={cat.img} alt={cat.name} />

                <div className="card-body">
                  <Link
                    to={"/ProductListing/" + cat.category}
                    className="card-link"
                  >
                    See all deals
                  </Link>
                </div>
              </div>
            ) : null
          )}
        </div>
      </div>
    </>
  );
};

export default CategorieList;
