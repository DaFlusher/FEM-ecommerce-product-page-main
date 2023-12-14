
import { useState, createContext , useContext} from 'react';

export const CartNumberContext = createContext();
import './styles/style.scss';
import Nav from './Components/Nav';
import Hero from './Components/Hero';
import Main from './Components/Container/Main';
import Footer from './Components/Footer';




function App() {

  //adding cart state //lifting state to make cartNumber available to nav
  const [cartNumber, setCartNumber] = useState(0);

  const [isCartOpen, setIsCartOpen] = useState(false);

  const [isClicked, setIsClicked]= useState(false);

  

  return (
    <div className='open-cart'>

      <CartNumberContext.Provider value={{cartNumber, setCartNumber, isCartOpen,setIsCartOpen, isClicked,setIsClicked}}>

      	  <Nav/>

      	  < div className='heroGrid'>
      	    <Hero/>
      	    <Main/>
            <div className='footer'>
              <Footer/>
            </div>
           
        </div>
        
      </CartNumberContext.Provider>
      
    </div>
  )
}

export default App;
