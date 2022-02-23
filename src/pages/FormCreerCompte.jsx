import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Button } from "semantic-ui-react";
import { login, signUp } from "../actions/user.actions";

export const FormCreerCompte = () => {
  const form = useRef();

  //Variable div erreur formulaire
  const divUsername = useRef();
  const divEmail = useRef();
  const divPassword = useRef();
  const divConfirm = useRef();

  //Variable stockage donnée formulaire
  const [username, setUsername] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);

  const dispatch = useDispatch();

  // const [showError, setShowError] = useState(false);
  const [erreurUser, setErreurUser] = useState(null);

  const sendForm = async (e) => {
    e.preventDefault();
    console.log("formulaire envoyer");

    gestionErreur();

    if (email && password && username && confirmPassword && password === confirmPassword) {
      const user = {
        username: username,
        email: email,
        password: password,
        admin: 0,
      };

      dispatch(signUp(user))
        .then((res) => {
          setErreurUser("");
          console.log("signup  form : ", res);

          dispatch(login(user))
            .then((res) => {
              console.log("LOGIN FORM : ", res);
            })
            .catch((err) => console.log("ERREUR LOGIN FORM : ", err));
        })
        .catch((err) => {
          setErreurUser(err);
          console.log("ERREUR signup  form : ", err);
        });
    }
  };

  const gestionErreur = () => {
    !email
      ? (divEmail.current.innerHTML = "Le champ ne peut pas être vide")
      : (divEmail.current.innerHTML = "");
    !username
      ? (divUsername.current.innerHTML = "Le champ ne peut pas être vide")
      : (divUsername.current.innerHTML = "");
    !password
      ? (divPassword.current.innerHTML = "Le champ ne peut pas être vide")
      : (divPassword.current.innerHTML = "");
    !confirmPassword
      ? (divConfirm.current.innerHTML = "Le champ ne peut pas être vide")
      : (divConfirm.current.innerHTML = "");

    if (password !== confirmPassword) {
      divPassword.current.innerHTML = "Les mots de passes ne correspondent pas";
      divConfirm.current.innerHTML = "Les mots de passes ne correspondent pas";
    }
  };

  return (
    <>
      <h2 className="ui center aligned header">Formulaire d'enregistrement</h2>
      {/* <Message negative hidden={showError} floating content={erreurUser}></Message> */}
      <div className="ui text container centered">
        <form ref={form} onSubmit={sendForm} className="formCreerCompte ui form fluid segment">
          <div className="field">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <div className="error" ref={divUsername}></div>
          </div>

          <div className="field">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="error" ref={divEmail}>
              {erreurUser}
            </div>
          </div>

          <div className="field">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="error" ref={divPassword}></div>
          </div>

          <div className="field">
            <label htmlFor="confirmPassword">Confirmer le password</label>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              placeholder="Confirmer le password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <div className="error" ref={divConfirm}></div>
          </div>

          <Button primary>Envoyer</Button>
        </form>
      </div>
    </>
  );
};
