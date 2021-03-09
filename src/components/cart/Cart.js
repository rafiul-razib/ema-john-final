import React from 'react';

const Cart = (props) => {

    const cart = props.cart;
    const totalPrice = cart.reduce((total, product)=> total + product.price, 0);
    const tax = totalPrice/10;

    let shipping = 0;
    if(totalPrice> 1000){
        shipping = 0
    }
    else if(totalPrice > 500){
        shipping = 10
    }
    else if (totalPrice> 200) {
        shipping = 15
    }
   
    else if(totalPrice> 0){
        shipping = 20;
    }

    const grandTotal = totalPrice + tax + shipping

    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }
    return (
        <div>
            <h4>Items Ordered: {cart.length}</h4>
            <h4>Price:{formatNumber(totalPrice)}</h4>
            <h4>Tax/VAT: {formatNumber(tax)}</h4>
            <h4>Shipping Cost: {shipping}</h4>
            <h3>Grand Total : {formatNumber(grandTotal)}</h3>

            <button className= 'main-button'>View Cart Items</button>
        </div>
    );
};

export default Cart;