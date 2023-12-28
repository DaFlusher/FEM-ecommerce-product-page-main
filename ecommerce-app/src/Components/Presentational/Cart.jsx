import { useContext } from 'react';

import { CartNumberContext} from '../../App';

import thumbnail from '../../images/image-product-1-thumbnail.jpg';
import deleteIcon from '../../images/icon-delete.svg';

const images ={
    'thumbnail': thumbnail,
    'deleteIcon': deleteIcon
};
const Cart = (props) => {
    const {cartNumber,isCartOpen, isSubmitted, setIsSubmitted} = useContext(CartNumberContext);
    return ( 
        <section className="cart" style={isCartOpen===true? {display:'block'}: {display: 'none'}} >
            <h4>Cart</h4>
            <hr />
            <div>
                {  
                    cartNumber===0? <p className='empty'>Your cart is empty</p>: 
                    
                    <>
                    {isSubmitted &&
                        <div>
                            <div className="flex">
                            <img src={images.thumbnail} alt="sneaker thumbnail"/>
                            


                            <div className='cart-details'>
                                
                                    <h5>{props.title}</h5>
                                    <p>${props.price.toFixed(2)} x{cartNumber} <strong>${props.total.toFixed(2)}</strong></p>
                            </div>

                            <div className="delete">
                                <img src={images.deleteIcon} alt="delete item" role='button' onClick={props.handleDelete}/>
                            </div>
                            </div>
                            <button role='submit' className='btn'>Checkout</button>
                        </div>
                    }
                    
                    </>
                }
                
            </div>

        </section>
    
    );
}
 
export default Cart;