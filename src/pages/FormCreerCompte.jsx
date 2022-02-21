import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Button } from "semantic-ui-react";
import { login, signUp } from "../actions/user.actions";

export const FormCreerCompte = () => {
  const form = useRef();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const sendForm = async (e) => {
    e.preventDefault();
    console.log("formulaire envoyer");

    if (email && password){
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

  return (
    <>
    <h2 className="ui center aligned header">Formulaire d'enregistrement</h2>
      <div className="ui text container centered">
        <form ref={form} onSubmit={sendForm} className="formCreerCompte">
          <div className="ui input">
            <input type="text" name="username" placeholder="Username" onChange={ e => setUsername(e.target.value)} />
          </div>

          <div className="ui input">
            <input type="email" name="email" placeholder="Email" onChange={ e => setEmail(e.target.value)} />
          </div>

          <div className="ui input">
            <input type="password" name="password" placeholder="Password" onChange={ e => setPassword(e.target.value)} />
          </div>

          <Button primary>Envoyer</Button>
        </form>
      </div>
    </>
  );
};
