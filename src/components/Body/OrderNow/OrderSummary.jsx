import React from "react";

export default function OrderSummary(props){
    // console.log(props)
    const productTotal =props.items.length;
    let productQuantity = 0;
    let productPrice = 0;
    props.items.map((prop)=>{
        productPrice += prop[0].price;
        // console.log(productQuantity += prop[0].price);
    })
    return (
        <div className="checkOut">
            <form action="" method="">
            <h1>Order Summary</h1>
            <ul>
                <li><p>Product Total: <span>{productTotal/2}</span></p></li>
                <li><p>Product Quantity: <span>{props.quantity}</span></p></li>
                <li><p>Total Price: <span>$ {productPrice/2}</span></p></li>
            </ul>
            <div className="buttonDiv">
                <button type="submit">Checkout</button>
            </div>
            </form>
        </div>
    )
}