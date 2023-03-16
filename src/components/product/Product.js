import React from "react";

const Product = (props) => {
  console.log(props.product);
  const { title, price, description, image } = props.product;
  return (
    <div>
      <div class="card d-flex justify-content-center align-items-center ">
        <div
          className="border overflow-hidden d-flex my-4 "
          style={{ width: "100%", height: "100%" }}
        >
          <img src={image} class="card-img-top img-fluid" alt="..." />
        </div>
        <div class="card-body">
          <h5 class="card-title">{title}</h5>
          <p class="card-text">{description}</p>
          <p class="badge text-bg-primary">{price}</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
