import React, { useEffect, useState } from "react";
import app from "./base";

export const AuthContext = React.createContext();
// Provider component that will store auth status for users
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [pending, setPending] = useState(true);

  useEffect(() => {
    app.auth().onAuthStateChanged((user) => {
      setCurrentUser(user);
      setPending(false);
    });
    // almost forgot empty array as 2nd arg so that useeffect will only run once
  }, []);

  if (pending) {
    return <>Loading...</>;
  }

  return (
    //  pass current user as value to auth provider every time state changes
    <AuthContext.Provider
      value={{
        currentUser,
      }}>
      {/* render children passed to component */}
      {children}
    </AuthContext.Provider>
  );
};
