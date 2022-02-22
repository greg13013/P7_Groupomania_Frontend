import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Button } from "semantic-ui-react";
import { login, signUp } from "../actions/user.actions";

export const FormCreerCompte = () => {
  const form = useRef();

  const divUsername = useRef();
  const divEmail = useRef();
  const divPassword = useRef();
  const divConfirm = useRef();

  const [username, setUsername] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);

  const dispatch = useDispatch();

  const sendForm = async (e) => {
    e.preventDefault();
    console.log("formulaire envoyer");

    gestionErreur();

    if (email && password && username && confirmPassword && password === confirmPassword){

      const user = {
        username: username,
        email: email,
        password: password,
        admin: 0
      }

      await dispatch(signUp(user));
      await dispatch(login(user));
    }
       
 

  };


  const gestionErreur = () => {
       !email ? divEmail.current.innerHTML = 'Le champ ne peut pas être vide' : divEmail.current.innerHTML = ''
       !username ? divUsername.current.innerHTML = 'Le champ ne peut pas être vide' : divUsername.current.innerHTML = ''
       !password ? divPassword.current.innerHTML = 'Le champ ne peut pas être vide' : divPassword.current.innerHTML = ''
       !confirmPassword ? divConfirm.current.innerHTML = 'Le champ ne peut pas être vide' : divConfirm.current.innerHTML = ''

       if (password !== confirmPassword) {
        divPassword.current.innerHTML = 'Les mots de passes ne correspondent pas'
        divConfirm.current.innerHTML = 'Les mots de passes ne correspondent pas'
      }
  }

  return (
    <>
    <h2 className="ui center aligned header">Formulaire d'enregistrement</h2>
      <div className="ui text container centered">
        <form ref={form} onSubmit={sendForm} className="formCreerCompte">
          <div className="ui input">
            <input type="text" name="username" placeholder="Username" onChange={ e => setUsername(e.target.value)} />
            <div className="error" ref={divUsername}></div>
          </div>

          <div className="ui input">
            <input type="email" name="email" placeholder="Email" onChange={ e => setEmail(e.target.value)} />
            <div className="error" ref={divEmail}></div>
          </div>

          <div className="ui input">
            <input type="password" name="password" placeholder="Password" onChange={ e => setPassword(e.target.value)} />
            <div className="error" ref={divPassword}></div>
          </div>

          <div className="ui input">
            <input type="password" name="confirmPassword" placeholder="Confirmer le password" onChange={ e => setConfirmPassword(e.target.value)} />
            <div className="error" ref={divConfirm}></div>
          </div>

          <Button primary>Envoyer</Button>
        </form>
      </div>
    </>
  );
};
