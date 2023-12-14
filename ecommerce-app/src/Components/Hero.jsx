import React, { useState } from 'react';
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import hero from '../images/image-product-1.jpg';
import thumbnailOne from '../images/image-product-1-thumbnail.jpg';
import thumbnailTwo from '../images/image-product-2-thumbnail.jpg';
import thumbnailThree from '../images/image-product-3-thumbnail.jpg';
import thumbnailFour from '../images/image-product-1-thumbnail.jpg';
import productOne from '../images/image-product-1.jpg';
import productTwo from '../images/image-product-2.jpg';
import productThree from '../images/image-product-3.jpg';
import productFour from '../images/image-product-4.jpg';
import close from '../images/icon-close.svg';
import previous from '../images/icon-previous.svg';
import next from '../images/icon-next.svg';

const images=[
    {'id':1, 'thumbnail': thumbnailOne, 'fullSize': productOne},
    {'id':2, 'thumbnail': thumbnailTwo, 'fullSize': productTwo},
    {'id':3, 'thumbnail': thumbnailThree, 'fullSize': productThree},
    {'id':4, 'thumbnail': thumbnailFour, 'fullSize': productFour}
];

const imgNav={
    'next': next,
    'previous': previous,
    'close': close,
   
};

const heroImage ={
    backgroundImage: `url(${hero})`,
    backgroundSize:'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '50vh',
    src:'a sneaker'
};

const Hero = () => {
    const thumbnailsRef = React.useRef(null);
    const [open, setOpen] = React.useState(false);

    return ( 
        <section className='light-box'>
            <div style={heroImage} className='bg'>
                <img src={imgNav.previous} alt="previous button" className="previous" role='button'onClick={() => setOpen(true)} />
                <img src={imgNav.next} alt="next button" className="next" role='button' onClick={() => setOpen(true)}/>
            </div>
        
            {images.map((image)=> <img src={image.thumbnail} onClick={() => setOpen(true)} role='button' className='thumbnail-flex'/>)}
            <Lightbox
             open={open}
             close={() => setOpen(false)}
             slides={[
                
               { src: "../images/image-product-1.jpg" },
               { src: "../images/image-product-2.jpg" },
               { src: "../images/image-product-3.jpg" },
               { src: "../images/image-product-4.jpg" },
             ]}
                    plugins={[Thumbnails]}
            thumbnails={{ ref: thumbnailsRef }}
                    on={{
                click: () => {
            (thumbnailsRef.current?.visible
            ? thumbnailsRef.current?.hide
            : thumbnailsRef.current?.show)?.();
      },

      
    }}
    // ...
  />
        </section>
     );
}
 
export default Hero;