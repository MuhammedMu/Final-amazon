// import React, { useEffect, useState } from "react";
// import product1 from "../../images/laptop1.jpg";
// import product2 from "../../images/laptop2.jpg";
// import product3 from "../../images/laptop3.jpg";

import React from "react";
import { LaptopsData } from "../../ProductsData/ProductsData";

import { useDataGlobaly } from "../../StateProvider/StateProvider";

function Laptops() {
  const { AddToCart } = useDataGlobaly();

  return (
    <div>
      <h1 className="catagories-title">Laptops</h1>
      <div className="banner-and-product-flex">
        {LaptopsData.map((product) => {
          const { title, id, image, price, rating } = product;
          // console.log(title)
          return (
            <div className="first" key={product.id}>
              <div className="product-outer-wraper">
                <div className="all-product-wraper">
                  <div className="products-wraper">
                    <div className="product-image">
                      <img src={product.image} alt="" />
                    </div>
                    <div className="product-title">{product.title}</div>
                    <div className="product-rating">
                      {Array(product.rating)
                        .fill()
                        .map((value, index) => {
                          return (
                            <div key={index} className="rating-count">
                              ⭐
                            </div>
                          );
                        })}
                    </div>
                    <div className="products-price">{product?.price} $</div>

                    <div className="stock">On Stock</div>

                    <div className="add-cart">
                      <button onClick={() => AddToCart(product.id)}>
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Laptops;
