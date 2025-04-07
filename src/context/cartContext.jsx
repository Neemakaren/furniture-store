import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [cartModal, setcartModal] = useState(false);
  const [modalData, setModalData] = useState([]);
  const [productModal, setProductModal] = useState(false)

    useEffect(() => {
      const loadPost = async () => {
        setLoading(true);
        const response = await axios.get("./furniture.json");
        setData(response.data);
        setLoading(false);
      };
      loadPost();
    }, []);

    

  const [cartItems, setCartItems] = useState(
    localStorage.getItem("items")
      ? JSON.parse(localStorage.getItem("items"))
      : []
  );
  

  const addToCart = (item) => {
    const isItemInCart = cartItems?.find((cartItem) => cartItem.id === item.id);

    if (isItemInCart) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (item) => {
    const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);

    if (isItemInCart.quantity === 1) {
      setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id));
    } else {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
      );
    }
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getCartTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    const cartItems = localStorage.getItem("items");
    if (cartItems) {
      setCartItems(JSON.parse(cartItems));
    }
  }, []);

  const toggle = () => {
    setcartModal(!cartModal);
  };

   const viewModalHandler = (data) => {
     setModalData(data);
     setProductModal(true);
   };

  //  console.log(modalData)

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        getCartTotal,
        setcartModal,
        cartModal,
        toggle,
        productModal,
        setProductModal,
        setModalData,
        viewModalHandler,
        modalData,
        data
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
