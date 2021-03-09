import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const{img, name, seller, stock} = props.product;

    return (
        <div className= 'product'>
            <div className="product-image">
                <img src={img} alt=""/>
            </div>

            <div className="product-details">
                
                <h4  className="product-name">{name}</h4>
                <br/>
                <p><small>seller - {seller}</small></p>
                <p>Only {stock} items left, Order now...</p>
                <br/>
                <button className='main-button' onClick={()=>props.handleAddProduct(props.product)}><FontAwesomeIcon icon={faCartArrowDown} /> Add to cart</button>

            </div>
        
        </div>
    );
};

export default Product;