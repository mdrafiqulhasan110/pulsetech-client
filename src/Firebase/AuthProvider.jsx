import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import auth from "./firebase.config";

const provider = new GoogleAuthProvider();

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const loginGoogle = () => signInWithPopup(auth, provider);

  const updateCart = (user) => {
    fetch("http://localhost:5000/cart")
      .then((res) => res.json())
      .then((cartData) => {
        let userCart = [];
        if (user) {
          const fullCart = cartData.filter((cart) => cart.email === user.email);

          fetch("http://localhost:5000/products")
            .then((res) => res.json())
            .then((productData) => {
              const productIds = productData.map((product) => product._id);

              fullCart.forEach((cartItem) => {
                if (productIds.includes(cartItem.item)) {
                  userCart.push(cartItem);
                }
              });
              setCart(userCart);
            });
        }
      });
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      updateCart(currentUser);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    setLoading,
    createUser,
    signIn,
    logOut,
    loginGoogle,
    cart,
    updateCart,
  };

  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
