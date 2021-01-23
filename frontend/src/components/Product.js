import React from 'react';
import Rating from './Rating';

export default function Product({product}) {
	return (
	  <div className="card">
          <a href={`/products/${product._id}`}>
            <img className="medium" src={product.image} alt={product.name} />
          </a>

          <div className="card-body">
            <a href={`/products/${product._id}`}>
              <h2>{product.name}</h2>
            </a>

            <Rating rating={product.rating} numReviews={product.numReviews}></Rating>

            <div className="price">${product.price}</div>
          </div>
        </div>
	);
}