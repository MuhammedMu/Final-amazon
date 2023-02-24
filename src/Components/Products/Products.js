// import React, { useEffect, useState } from "react";
// import product1 from "../../images/laptop1.jpg";
// import product2 from "../../images/laptop2.jpg";
// import product3 from "../../images/laptop3.jpg";

import React from "react";
import { useStateValue } from "../StateProvider/StateProvider";
import "./Products.css";

function Products({ title, image, id, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  
  console.log(price)

    const addToBasket = () => {
      dispatch({
        type: "ADD_TO_BASKET",
        item: {
          id: id,
          title: title,
          image: image,
          price: price,
          rating: rating,
        },
      });
      // toast("Added item to basket!");
    };

  console.log(`this is the basket`, basket);

  return (
    <div className="product-outer-wraper">
      <div className="all-product-wraper">
        <div className="products-wraper">
          <div className="product-image">
            <img src={image} alt="" />
          </div>
          <div className="product-title">{title}</div>
          <div className="product-rating">
            {Array(rating)
              .fill()
              .map((value, index) => {
                return (
                  <div key={index} className="rating-count">
                    ⭐
                  </div>
                );
              })}
          </div>
          <div className="products-price">{price}  $</div>

          <div className="stock">On Stock</div>

          <div className="add-cart">
            <button onClick={addToBasket}>Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
