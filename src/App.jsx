import React, { useContext, useEffect } from "react";
import { Container } from "./components/Container";
import { Sidebar } from "./components/Sidebar";

import M from "materialize-css";

//Redux
import { useDispatch } from "react-redux";
import { getUser, loginCookie } from "./actions/user.actions";

//Import librairie utilisation cookie pour recup token
import cookie from "js-cookie";
import { DarkModeContext } from "./context/DarkModeContext";

export const App = () => {
  const dispatch = useDispatch();

  const tokenCookie = cookie.get("jwt");
  const userId = cookie.get("userId");

  const {darkMode} = useContext(DarkModeContext)

  //Si token dans cookie, connexion automatique
  useEffect(() => {
    //Initialisation sidenav materialize JS
    M.AutoInit();

    if (tokenCookie) {
      dispatch(loginCookie(userId, tokenCookie)).then(() => {
        dispatch(getUser(userId))
          .then((res) => {
            console.log("getUser APP COOKIE : ", res);
          })
          .catch((err) => console.log("ERREUR getUser APP : ", err));
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
      <div className={darkMode ? "global-container darkGlobal" : "global-container"}>
        <Sidebar />
        <Container />
      </div>
  );
};
