import React from 'react';

import image1 from '../../assets/1.png';
import image2 from '../../assets/2.png';
import image3 from '../../assets/3.png';
import image4 from '../../assets/4.png';
import image5 from '../../assets/5.png';

import AddButtonCart from '../AddButton';

import { 
  CarouselProps, 
  ImgCarousel 
} from './style';

function CarouselItems() {
  return (
    <CarouselProps showThumbs={false}>
      <div>
         <ImgCarousel path={image1} alt="image1" />
        <p>Product: 1</p>
        <p>Price: $ 00.00</p>
        <AddButtonCart 
          product={1}
        />
      </div>
      <div>
        <ImgCarousel path={image2} alt="image2" />
        <p>Product: 1</p>
        <p>Price: $ 00.00</p>
        <AddButtonCart 
          product={2} 
        />
      </div>
      <div>
        <ImgCarousel path={image3} alt="image3" />
        <p>Product: 1</p>
        <p>Price: $ 00.00</p>
        <AddButtonCart 
          product={3}
        />
      </div>
      <div>
        <ImgCarousel path={image4} alt="image4" />
        <p>Product: 1</p>
        <p>Price: $ 00.00</p>
        <AddButtonCart 
          product={4}
        />
      </div>
      <div>
        <ImgCarousel path={image5} alt="image5" />
        <p>Product: 1</p>
        <p>Price: $ 00.00</p>
        <AddButtonCart 
          product={5}
        />
      </div>
    </CarouselProps>
  );
}

export default CarouselItems;