import { useEffect, useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import UserContext from "./contexts/UserContext";
import CartContext from "./contexts/CartContext";

import Navbar from "./components/Navbar/Navbar";
import Routing from "./components/Routing/Routing";
import { getJwt, getUser } from "./services/userServices";
import setAuthToken from "./utils/setAuthToken";
import {
  addToCartApi,
  DecreaseApi,
  getCartApi,
  IncreaseApi,
  RemoveFromCartApi,
} from "./services/cartSevices";

setAuthToken(getJwt());

const App = () => {
  const [user, setuser] = useState(null);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    try {
      const jwtUser = getUser();
      if (Date.now() >= jwtUser.exp * 1000) {
        localStorage.removeItem("token");
        location.reload();
      } else {
        setuser(jwtUser);
      }
    } catch (error) {}
  }, []);

  const AddToCart = (product, quantity) => {
    const updatedCart = [...cart];
    const productIndex = updatedCart.findIndex(
      (item) => item.product._id === product._id
    );
    if (productIndex === -1) {
      updatedCart.push({ product, quantity });
    } else {
      updatedCart[productIndex].quantity += quantity;
    }
    setCart(updatedCart);
    addToCartApi(product._id, quantity)
      .then((res) => {
        toast.success(res.data.message);
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };

  const RemoveFromCart = (id) => {
    const oldCard = [...cart];
    const NewCard = oldCard.filter((item) => {
      return item.product._id !== id;
    });
    setCart(NewCard);
    RemoveFromCartApi(id)
      .then((res) => toast.success(res.data.message))
      .catch((err) => toast.error(err.response.data.message));
  };

  const updateCart = (id, operation) => {
    const updatedCart = [...cart];
    const productIndex = updatedCart.findIndex(
      (item) => item.product._id === id
    );
    if (operation === "+") {
      updatedCart[productIndex].quantity += 1;
      setCart(updatedCart);
      IncreaseApi(id).catch((err) => toast.error(err.response.message));
    }
    if (operation === "-") {
      updatedCart[productIndex].quantity -= 1;
      setCart(updatedCart);
      DecreaseApi(id).catch((err) => toast.error(err.response.message));
    }
  };

  useEffect(() => {
    if (user) {
      getUserCart();
    }
  }, [user]);

  const getUserCart = () => {
    getCartApi()
      .then((res) => setCart(res.data))
      .catch((err) => toast.error(err.response.message));
  };

  return (
    <UserContext.Provider value={user}>
      <CartContext.Provider
        value={{ AddToCart, cart, RemoveFromCart, updateCart, setCart }}
      >
        <div className=" min-h-screen grid grid-rows-[80px_auto] font-montserrat bg-[#f6f8fa]">
          <Navbar></Navbar>
          <main>
            <ToastContainer position="bottom-right" />
            <Routing />
          </main>
        </div>
      </CartContext.Provider>
    </UserContext.Provider>
  );
};

export default App;
