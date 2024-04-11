import React, { useState } from "react";
import { AuthContext } from "./AutoContext";

export const AuthProvider = ({ children }) => {
  const [auth, setAuht] = useState(false);

  return (
    <AuthContext.Provider
      value={{
        auth,
        setAuht,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
