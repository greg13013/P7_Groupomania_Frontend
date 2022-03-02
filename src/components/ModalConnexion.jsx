import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getUser, login } from "../actions/user.actions";

import { Modal, Button } from "react-materialize";
import { useNavigate } from "react-router-dom";

export const ModalConnexion = ({ trigger }) => {

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const [errorForm, setErrorForm] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userData = useSelector((state) => state.userReducer);

  const sendForm = async (e) => {
    e.preventDefault();

    if (email && password) {
      const user = {
        email,
        password,
      };

      dispatch(login(user))
        .then((res) => {
          console.log("LOGIN MODAL : ", res);
          dispatch(getUser(res.userId))
            .then((res) => {
              console.log("getUser LOGIN MODAL : ", res);
              navigate('/accueil')
            })
            .catch((err) => console.log("ERREUR getUser LOGIN MODAL : ", err));
        })
        .catch((err) => {
          setErrorForm(err);
          console.log("ERREUR LOGIN MODAL : ", err);
        });

      console.log(userData);

      //  await dispatch(getUser(userData.userId))
    }
  };

  return (
    <Modal header="Connexion" trigger={trigger} options={{preventScrolling: false}}>
      <form onSubmit={sendForm} className="formLogin col s12">
        <div className="row">
          <div className="input-field col s12">
            <input
              type="email"
              name="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              className="validate"
            />
            <label htmlFor="email">Email</label>
          </div>
        </div>

        <div className="row">
          <div className="input-field col s12">
            <input
              type="password"
              name="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              className="validate"
            />
            <label htmlFor="email">Password</label>
          </div>
        </div>

        <Button>Envoyer</Button>
        <div className="error">{errorForm}</div>
      </form>
    </Modal>
  );
};
