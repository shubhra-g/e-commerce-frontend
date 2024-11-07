import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './pro.css';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/product/') 
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => console.error('Error fetching products:', error));
    }, []);

    return (
        <div className="product-list">
            <h1>ShopRASY Dashboard</h1>
            <div className="product-cards">
                {products.map((product, index) => (
                    <div key={product.product_id} className="product-card">
                        {/* Display image and apply 'first-image' class for the first product */}
                        <img 
                            src={product.product_image} 
                            alt={product.product_name}
                            className={`product-image ${index === 0 ? "first-image" : ""}`}
                        />
                        <h2>{product.product_name}</h2>
                        <p>Category: {product.product_category}</p>
                        <p>Price: ${product.product_price}</p>
                        <p>Seller ID: {product.seller_id}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;
