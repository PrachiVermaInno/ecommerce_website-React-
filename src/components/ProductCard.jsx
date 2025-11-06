import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';

function ProductCard({ product }) {
  return (
    <Link to={`/product/${product.id}`} className="product-card-link">
      <div className="product-card">
        <img 
          src={product.image} 
          alt={product.title} 
          className="product-image"
        />
        <h4 className="product-title">
          {product.title}
        </h4>
        <p className="product-price">
          ${product.price}
        </p>
        <div className="product-rating">
          <span className="rating-star">⭐</span>
          <span className="rating-text">
            {product.rating.rate} ({product.rating.count})
          </span>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
