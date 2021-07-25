import React, { useContext } from 'react';
import { useCartContext } from '../../Contexts/CartContext/useCartContext';

import { AddButton } from './style';

function AddButtonCart({ product }) {

  const { addToCart } = useContext(useCartContext);

  return (
    <>
      <AddButton
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </AddButton>
    </>
  );
}

export default AddButtonCart;