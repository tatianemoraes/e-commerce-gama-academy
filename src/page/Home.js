import React from 'react';

import Header from '../Components/Header';
import Body from '../Components/Body';
import CarouselItems from '../Components/Carousel';
import Form from '../Components/Form';

function Home() {
  return (
    <>
     <Header />
     <Body />
     <CarouselItems />
     <Form/>
    </>  
  )
}

export default Home;