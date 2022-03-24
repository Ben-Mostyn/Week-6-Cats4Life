const Cart = (props ) => {

if(!props.show){
    return null
}

    return ( 
        <div className="cartContainer">
            <h4>Your Cart</h4>
            {props.basket.map((cat, index) => {
                return (
                    <div className="cart1">
                <p>{cat.breed} - X{cat.quantity}</p>
                <p>£{cat.price} </p>
                </div>
             ) })}
            
             <p> Your total is £{props.total}</p>
            <button onClick={props.onClose}>Close Cart</button>
        </div>
     );
}
 
export default Cart;