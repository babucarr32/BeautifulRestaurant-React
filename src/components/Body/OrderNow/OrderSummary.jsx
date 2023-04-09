import React from "react";

export default function OrderSummary(props){
    try{
        const productTotal =props.items.length;
        let productPrice = 0;
        props.items.map((prop)=>{
            productPrice += prop.burgerPrice;
        })
        return (
        <div className="checkOut">
            <form action="" method="">
            <h1>Order Summary</h1>
            <ul>
                <li><p>Product Total: <span>{productTotal}</span></p></li>
                <li><p>Product Quantity: <span>{props.quantity}</span></p></li>
                <li><p>Total Price: <span>$ {productPrice.toLocaleString()}</span></p></li>
            </ul>
            <div className="buttonDiv">
                <button type="submit">Checkout</button>
            </div>
            </form>
        </div>
    )
    }catch(err){return null};
}