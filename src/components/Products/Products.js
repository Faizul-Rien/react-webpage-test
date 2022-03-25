import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Products.css';

const Products = (props) => {
    const {name, img, seller, ratings, price} = props.product;
    return (
        <div className='products'>
            <img src={img} alt="" />
           <div className='p-container'>
            <p className='products-name'>{name}</p>
            <p>Price : ${price}</p>
            <p><small>Seller : {seller}</small></p>
            <p><small>Rating : {ratings} Star</small></p>
           </div>
            <button onClick={() => props.handleAddToCart(props.product)} className='btn-cart'>
                <p className='btn-text'>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    )
};

export default Products;