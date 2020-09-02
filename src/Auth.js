import React, { useEffect, useState } from "react";
import app from "./firebase/config";

export const AuthContext = React.createContext();
// Provider component that will store auth status for users
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    app.auth().onAuthStateChanged(setCurrentUser);
    // almost forgot empty array as 2nd arg so that useeffect will only run once
  }, []);

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
