import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;
    const totalPrice = cart.reduce((total, price) => total + price.price, 0);
    // let button=confirm("Press a button!");
    // if (button == empty)
    //   {
    //   x="You pressed Cancel!";
    //   }
    //  else
    //   {
    //   x="You pressed Ok!";
    //   }
    return (
        <div className="cart-container">
            <h1>Selected Friends</h1>
            <div className="text-items">
                <h4>Total Count : {cart.length}</h4>
                <h4>Total Encome: {totalPrice} </h4>
            </div>
            <button className="btn" onClick={ () => console.log("add")} >Review your cart</button>
        </div>
    );
};

export default Cart;