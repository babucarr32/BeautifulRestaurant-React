import React from "react";

export default function OrderSummary(props){
    const productTotal =props.items.length
    console.log(productTotal);
    props.items.map((prop)=>{
        console.log(prop[0].price)
    })
    return (
        <div className="checkOut">
            <form action="" method="">
            <h1>Order Summary</h1>
            <ul>
                <li><p>Product Total: <span>{productTotal/2}</span></p></li>
                <li><p>Product Quantity: <span>65</span></p></li>
                <li><p>Total Price: <span>$87,400</span></p></li>
            </ul>
            <div className="buttonDiv">
                <button type="submit">Checkout</button>
            </div>
            </form>
        </div>
    )
}