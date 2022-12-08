import { createContext, useState } from "react";

export const CartContext = createContext({});


export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  function addToCart(product) {
    setCart((prevState) => [
      ...prevState,
      {
        id: Math.random(),
        title: product.title,
        description: product.description,
        size: product.size,
        color: product.color,
        quantity: 1,
        price: product.price,
      },
    ]);
  }

  function removeFromCart(id) {
    setCart((prevState) => prevState.filter((item) => item.id !== id));
  }

  function clearCart() {
    setCart([]);
  }

  return (
    <CartContext.Provider value={{cart, addToCart, removeFromCart, clearCart}}>
      {children}
    </CartContext.Provider>
  );
}   
  
