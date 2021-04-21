import { Link } from "react-router-dom";
const BestSeller = ({ id, title, img }) => {
  const alt = `${title}  `;

  const source = `${img}`;
  return (
    <div className="card">
      <Link to={"/ProductDetail/" + id}>
        <img
          className="img-fluid"
          alt={alt}
          src={source}
          style={{ height: "280px" }}
        />
      </Link>
    </div>
  );
};

export default BestSeller;
