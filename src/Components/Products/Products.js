// import React, { useEffect, useState } from "react";
// import product1 from "../../images/laptop1.jpg";
// import product2 from "../../images/laptop2.jpg";
// import product3 from "../../images/laptop3.jpg";

import React from "react";
import ProductsData from "../ProductsData/ProductsData";
import { useDataGlobaly } from "../StateProvider/StateProvider";
import "./Products.css";

function Products() {
  const { AddToCart } = useDataGlobaly();

  return (
    <div className="banner-and-product-flex">
      {ProductsData.map((product) => {
        const { title, id, image, price, rating } = product;
        // console.log(title)
        return (
          <div className="first" key={product.id}>
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
                  <div className="products-price">{price} $</div>

                  <div className="stock">On Stock</div>

                  <div className="add-cart">
                    <button onClick={() => AddToCart(id)}>Add to cart</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Products;
