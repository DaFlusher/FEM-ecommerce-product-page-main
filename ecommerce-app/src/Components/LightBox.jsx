import { useState } from 'react';
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


const LightBox = () => {
    
    return ( 
        <section>
            
        </section>
     );
}
 
export default LightBox;