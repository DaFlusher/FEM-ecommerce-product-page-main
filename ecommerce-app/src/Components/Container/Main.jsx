import { useContext } from 'react';

import { CartNumberContext} from '../../App';
import minus from '../../images/icon-minus.svg';
import plus from '../../images/icon-plus.svg';
import cart from '../../images/icon-cart.svg';
import Sneaker from '../Presentational/Sneaker';
import Cart from '../Presentational/Cart';

//adding images
const images={
    'minus': minus,
    'cart': cart,
    'plus': plus
}

//adding price variables
const amount = 125;

const price= Number(amount);

const formerPrice= amount*2;

const discount= 0.5;
const percent =50;

const title='Fall Limited Edition Sneakers';



const Main = () => {

    //adding cart state //lifting state to make cartNumber available to nav

    const {cartNumber, setCartNumber, isSubmitted, setIsSubmitted} = useContext(CartNumberContext);
   
   

    const handleIncrease=()=>{
        setCartNumber(cartNumber+1);
        
    }
   
    const handleDecrease=()=>{
        if(cartNumber!==0 )
        setCartNumber(cartNumber-1);
       
    }

    
    const total= Number(`${cartNumber>=1? amount*cartNumber:cartNumber}.00`);

    

    const handleDelete=()=>{
        setCartNumber(0);
        setIsSubmitted(false);
    }

    const handleSubmit=()=>{
        if(cartNumber>0)
        {setIsSubmitted(true);}
        
    }

   
    
    return ( 
        //Calling the presentational component and passing props to it
        <>
            <Sneaker price={price} formerPrice={formerPrice} discount={discount} amount={amount} percent={percent} images={images}  handleDecrease={handleDecrease} handleIncrease={handleIncrease} title={title} handleSubmit={handleSubmit}/>

            <Cart  price={price} formerPrice={formerPrice} discount={discount} amount={amount} percent={percent}  handleDecrease={handleDecrease} handleIncrease={handleIncrease} title={title} total={total} handleDelete={handleDelete} />
            
        </>
      

       
     );
}
 
export default Main;