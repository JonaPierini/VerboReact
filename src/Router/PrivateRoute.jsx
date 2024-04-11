import { useContext } from "react";
import { AuthContext } from "../Context/AutoContext";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const { auth } = useContext(AuthContext);

  return auth ? children : <Navigate to="/login"></Navigate>;
};
