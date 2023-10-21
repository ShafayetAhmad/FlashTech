/* eslint-disable react/prop-types */
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../Firebase/firebase.config";
import { toast } from "react-toastify";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [toastId, setToastId] = useState(null);
  const googleAuthProvider = new GoogleAuthProvider();

  const showToast = (message) => {
    const newToastId = toast.success(`🦄 Succesfully ${message}!`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    console.log(`old toastid`, toastId);
    setToastId(newToastId);
  };

  const createUser = async (email, password) => {
    setLoading(true);
    try {
      return await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error("Error creating user:", error.code, error.message);
      throw error;
    } finally {
      showToast("Registered");
      setLoading(false);
    }
  };

  const logInUser = (email, password) => {
    try {
      return signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log(error.message);
    } finally {
      showToast("Logged In");
    }
    setLoading(true);
  };

  const googleLogIn = async () => {
    setLoading(true);
    try {
      const response = await signInWithPopup(auth, googleAuthProvider);
      showToast("Logged In");
      return response;
    } catch (error) {
      console.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const userLogOut = () => {
    setLoading(true);
    signOut(auth)
      .then(() => {
        showToast("Logged Out");
      })
      .catch((error) => {
        console.log(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("user in the auth state changed", currentUser);
      
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);
  return (
    <AuthContext.Provider
      value={{
        user,
        createUser,
        googleLogIn,
        loading,
        logInUser,
        userLogOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
