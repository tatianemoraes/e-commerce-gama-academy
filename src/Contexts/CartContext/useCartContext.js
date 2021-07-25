import { createContext, useState } from 'react';

export const useCartContext = createContext(); 

const CartContextProvider = ({ children }) => {

  const [cart, setCart] = useState([]);
  const [verifyCart, setVerifyCart] = useState(false);

  const hasProductInTheCart = localStorage.getItem('hasProductInTheCart');
  const productCart = JSON.parse(hasProductInTheCart) || [];

  if(productCart && !verifyCart) {
    setCart(productCart);
    setVerifyCart(true);
  }

  function addToCart(idProduct) {
    const product = { product: idProduct };
    setCart([...cart, product]); 
    const stock = productCart;
    stock.push(product);
    localStorage.setItem('hasProductInTheCart', JSON.stringify(stock));    
  }

  return (
    <useCartContext.Provider value={{ cart, addToCart }}>
      { children }
    </useCartContext.Provider>
  )

};

export default CartContextProvider;