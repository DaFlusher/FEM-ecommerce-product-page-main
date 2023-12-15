import React, { useState } from 'react';
import Modal from 'react-modal';
import close from '../images/icon-close.svg';
import previous from '../images/icon-previous.svg';
import next from '../images/icon-next.svg';


Modal.setAppElement('#root');

const images = [
    'src/images/image-product-1.jpg',
    'src/images/image-product-2.jpg',
    'src/images/image-product-3.jpg',
    'src/images/image-product-4.jpg'
  ];

  const thumbnails =[
    'src/images/image-product-1-thumbnail.jpg',
    'src/images/image-product-2-thumbnail.jpg',
    'src/images/image-product-3-thumbnailjpg',
    'src/images/image-image-product-4-thumbnail.jpg'
  ]

const imgNav={
    'next': next,
    'previous': previous,
    'close': close,
   
};


const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      transform: 'translate(-50%, -50%)',
      background: 'none',
      border: '0'
    },
  };

const Lightbox = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const openModal =()=>{
        setModalIsOpen(true);
    }

    const closeModal =()=>{
        setModalIsOpen(false);
    }

    const goToPrevious = () => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex > 0 ? prevIndex - 1 : images.length - 1
        );
      };
    
      const goToNext = () => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex < images.length - 1 ? prevIndex + 1 : 0
        );
      };


    return ( 
        
        <div className='light' style={{placeItems: 'center'}}>

            <div onClick={openModal} className='hero-web' >
                <img src={images[currentImageIndex]} alt="a thumbnail" className='large' />
            </div>

            <div className='hero-mobile'  >
                <img src={images[currentImageIndex]} alt="a thumbnail" className='large'/>

                <button className="prev-button  toggle " onClick={goToPrevious}>
                    <img src={previous} alt='previous button'/>
                </button>

                <button className="next-button toggle" onClick={goToNext}>
                    <img src={next} alt='next button' />
                </button>

            </div>

            <div className="modal-thumbnails web" >
                        {
                        images.map((image,index)=>
                                    <img src={image} key={index} alt={`Thumbnail ${index+1}`} onClick={goToNext}  />
                                )
                        }
            </div>

            

            <Modal isOpen={modalIsOpen} onRequestClose={closeModal} contentLabel="Image Lightbox" style={customStyles} overlayClassName="modal-overlay">
                    <div className="modal-content">
                        <img src={imgNav.close} role='button' onClick={closeModal}  alt="close button" className='close-modal'/>
                        <div className="modal-image-container">
                                <img src={images[currentImageIndex]} alt="a large image" />
                        </div>

                        <div className="modal-thumbnails">
                            {
                                images.map((image,index)=>
                                    <img src={image} key={index} alt={`Thumbnail ${index+1}`} onClick={()=>setCurrentImageIndex(index)} />
                                )
                            }
                        </div>

                        <button className="prev-button" onClick={goToPrevious}>
                            <img src={previous} alt='previous button'/>
                        </button>
                        <button className="next-button" onClick={goToNext}>
                            <img src={next} alt='next button' />
                        </button>
                    </div>

            </Modal>
            
           
        </div>
     );
}
 
export default Lightbox;