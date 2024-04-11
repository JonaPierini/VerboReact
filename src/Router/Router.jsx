import React from "react";
import { Route, Routes } from "react-router-dom";
import { PublicRoute } from "./PublicRoute";
import { PrivateRoute } from "./PrivateRoute";
import { Login } from "../Components/Login";

export const Router = () => {
  return (
    <>
      <Routes>
        {/* Login esta fuera de esas rutas y no me va a mostrar el NavBar */}
        {/* Ruta Publica */}
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        ></Route>
        {/* Creamos un componente (HeroesRoutes) en donde estan definidas las rutas */}
        {/* Rutas Privadas */}
        <Route
          path="/*"
          element={
            <PrivateRoute>
              <h1>Home</h1>
            </PrivateRoute>
          }
        ></Route>
      </Routes>
    </>
  );
};
