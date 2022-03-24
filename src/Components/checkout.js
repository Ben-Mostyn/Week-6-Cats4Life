import {FaWindowClose} from 'react-icons/fa'


const Cart = (props ) => {

    if(!props.show){
        return null
    }
    
        return ( 
            <div className="cartContainer">
                <button onClick={props.onClose}><FaWindowClose/></button>
                <h4>Your Cart</h4>
                {props.basket.map((cat, index) => {
                    return (
                        <div className="cart1">
                    <p>{cat.breed} - X{cat.quantity}</p>
                    <p>£{cat.price} </p>
                    <button onClick={props.handleRemove}>Remove</button>
                    </div>
                 ) })}
                
                 <p> Your total is £{props.total}</p>
            </div>
         );
    }
     
    export default Cart;