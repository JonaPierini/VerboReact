import React from "react";
import { Router } from "./Router/Router";
import { AuthProvider } from "./Context/AutoPrivder.jsx";

export const App = () => {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  );
};
