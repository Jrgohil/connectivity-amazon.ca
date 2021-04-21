import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch("http://localhost:5000/products/getproduct/" + id)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        console.log("products are " + data);
      })
      .catch((err) => console.log(`Error ${err}`));
  }, []);

  return (
    <div class="container bootdey">
      <div class="col-md-12">
        <section class="panel">
          <div class="panel-body row">
            <div class="col-md-6">
              <div class="pro-img-details">
                <img
                  src={product.img}
                  alt=""
                  style={{ height: "400px", width: "300px" }}
                />
              </div>
            </div>
            <div class="col-md-6">
              <h4 class="pro-d-title">{product.name}</h4>
              <p>{product.descr}</p>

              <div class="m-bot15">
                <strong>Price :</strong>
                <span class="pro-price">{product.price}</span>
              </div>
              <div class="form-group">
                <label>Quantity</label>
                <input
                  type="quantiy"
                  placeholder="1"
                  class="form-control quantity"
                />
              </div>
              <p>
                <button class="btn btn-round btn-danger" type="button">
                  <i class="fa fa-shopping-cart"></i> Add to Cart
                </button>
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Product;
