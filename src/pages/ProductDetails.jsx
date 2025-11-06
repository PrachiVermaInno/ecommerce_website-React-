import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import './ProductDetails.css';

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then(response => {
        setProduct(response.data);
        setLoading(false);
      })
      .catch(error => {
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div className="loading-details">Loading product details...</div>;
  }

  if (!product) {
    return <div className="loading-details">Product not found.</div>;
  }

  return (
    <div className="product-details-page">
      <div className="product-details-container">
        {/* Left Side: Product Image */}
        <div className="product-image-section">
          <img
            src={product.image}
            alt={product.title}
            className="product-detail-image"
          />
        </div>
        {/* Right Side: Product Info */}
        <div className="product-info-section">
          <h1 className="product-detail-title">{product.title}</h1>
          <div className="product-detail-rating">
            {'⭐'.repeat(Math.round(product.rating.rate))} &nbsp;
            <span style={{ color: '#888', fontWeight: 'normal', fontSize: "16px" }}>
              {product.rating.rate} ({product.rating.count} reviews)
            </span>
          </div>
          <div className="product-detail-price">${product.price}</div>
          <div>
            <span className="product-detail-category">{product.category}</span>
          </div>
          <div>
            <h3 style={{ margin: "8px 0" }}>Description</h3>
            <p className="product-detail-description">{product.description}</p>
          </div>
          {/* Add to Cart Button */}
          <button className="add-to-cart-button">Add to Cart</button>
          <Link to="/" className="back-button">
         Back to Products
      </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
