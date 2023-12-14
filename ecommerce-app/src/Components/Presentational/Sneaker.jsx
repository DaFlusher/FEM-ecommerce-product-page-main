import { useContext } from 'react';

import { CartNumberContext} from '../../App';
import whitecart from '../../images/cart-white.svg';


const Sneaker = (props) => {

    const {cartNumber,isCartOpen} = useContext(CartNumberContext);
    return (

        <div className="sneaker">
            <section>
                <h3>SNEAKER COMPANY</h3>
                <h1> {props.title}</h1>
                <p>These low-profile sneakers are your perfect casual wear companion. Featuring a 
                durable rubber outer sole, they’ll withstand everything the weather can offer.</p>

                <h1 className="pricing">${props.price.toFixed(2)} <span className="discount">{props.percent}%</span>  <span className="formerPrice"><s>${props.formerPrice.toFixed(2)}</s></span></h1> 
                <span className="formerPrice sm"><s>${props.formerPrice.toFixed(2)}</s></span>
            </section>

            <section className="number">
                <div className="calculation">
                <img src={props.images.minus} alt="remove an item" onClick={props.handleDecrease}/>
                <span>{cartNumber}</span>
                <img src={props.images.plus}  alt="add an item" role='button' onClick={props.handleIncrease} />
                </div>
                <button role='button' className="btn"><img src={whitecart} alt="cart" className="cart" style={{maxHeight:'1rem'}}/>Add to cart</button>
                
                
                
            </section>

        </div>
      );
}
 
export default Sneaker;