import { useState, useContext} from 'react';
import { CartNumberContext} from '../App';
import menu from '../images/icon-menu.svg';
import cart from '../images/icon-cart.svg';
import avatar from '../images/image-avatar.png';
import logo from '../images/logo.svg';
import close from '../images/icon-close.svg';

const Images={
    'menu': menu,
    'cart': cart,
    'avatar': avatar,
    'logo': logo,
    'close': close

};

const navMenu=['Collection', 'Men', 'Women', 'About', 'Contact'];
const Nav = () => {
    const {cartNumber,setCartNumber,isCartOpen,setIsCartOpen} = useContext(CartNumberContext);
    const [isMenuOpen, setIsMenuOpen]=useState(false);

    const toggleMenu=()=>{
            setIsMenuOpen(!isMenuOpen);
    }

    const togleCart=()=>{
        setIsCartOpen(!isCartOpen);
    }
   
    return ( 
        <nav>
            <div className='navigation'>
                <img src={Images.menu} alt="an image" className='hamburger' role='button' onClick={toggleMenu} />
                <img src={Images.logo} alt="sneakers logo" className='logo'/>
                <div className={`navItem ${isMenuOpen? 'active':''}`} >
                    <img src={Images.close} role='button' alt="close button" className="close-btn" onClick={toggleMenu}/>
                    <ul>{navMenu.map((menu,i)=> <li key={i}>{menu}</li>)}</ul>
                </div>
            </div>  
                
            <div className='profile'>
                    <span onClick={togleCart}>
                        <img src={Images.cart} alt="a cart"/><span className='cart-badge'>{cartNumber}</span>
                    </span>
                    <img src={Images.avatar} alt="user avatar" className='avatar' />
            </div>
            

          
        </nav>

     );
}
 
export default Nav;