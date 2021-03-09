import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Cart from '../cart/Cart';
import Product from '../product/Product';
import './Shop.css'

const Shop = () => {
    
    const first10 = fakeData.slice(0,10);
    const[products, setProducts]= useState(first10);
    const[cart, setCart] = useState([]);

    const handleAddProduct = (pd)=>{
        console.log('handleAddProduct', pd);
        const newCart = [...cart, pd];
        setCart(newCart);
        console.log(cart)
    }
    return (
        <div className='shop-container'>
            <div className="product-container">
             
                {
                    products.map(item => <Product handleAddProduct = {handleAddProduct} product = {item}></Product>)
                }
             
            </div>
           
           <div className="cart-container">
              <Cart cart={cart}></Cart>
           </div>
        </div>
    );
};

export default Shop;