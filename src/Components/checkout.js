import {FaWindowClose} from 'react-icons/fa'


const Cart = (props ) => {

    if(!props.show){
        return null
    }
    
        return ( 
            <div className="cartContainer">
                <button className='cartBTN' onClick={props.onClose}><FaWindowClose/></button>
                    <div className="cartTitle">
                        <h4>Basket</h4>
                    </div>
                {props.basket.map((cat, index) => {
                    return (
                        <div className="cart1">
                            <div className="imgcnt">
                                <img src={cat.url} alt="" />
                            </div>
                            <div className="cartItems">
                                <p>{cat.breed} - X{cat.quantity}</p>
                                <p>£{cat.price} </p>
                            </div>    
                            <div className="rmvBtn">
                                <button onClick={props.handleRemove}> <FaWindowClose/> </button>
                            </div>
                    </div>
                 ) })}

                <div className="totalSum">
                 <p> Your total is £{props.total}</p>
                 </div>
            </div>
         );
    }
     
    export default Cart;