import React from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { Accueil } from "../pages/Accueil";
import { FormCreerCompte } from "../pages/FormCreerCompte";
import { Profil } from "../pages/Profil";
import { NavTop } from "./NavTop";

export const Container = () => {
  const user = useSelector((state) => state.userReducer);

  return (
    <div>
      <NavTop />
      <main className="main-container">
        <Routes>
          <Route path="/*" element={<Accueil />} />
          {user.isLog ? (
            <Route path="/profil" element={<Profil />} />
          ) : (
            <Route path="/creerCompte" element={<FormCreerCompte />} />
          )}
        </Routes>
      </main>
    </div>
  );
};
