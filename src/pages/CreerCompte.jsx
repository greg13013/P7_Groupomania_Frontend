import React, { useRef } from "react";
import { Button } from "semantic-ui-react";

export const CreerCompte = () => {
  const form = useRef();

  const sendForm = (e) => {
    e.preventDefault();
    console.log("formulaire envoyer");
  };

  return (
    <>
    <h2 className="ui center aligned header">Formulaire d'enregistrement</h2>
      <div className="ui text container centered">
        <form ref={form} onSubmit={sendForm} className="formCreerCompte">
          <div className="ui input">
            <input type="text" name="username" placeholder="Username" />
          </div>

          <div className="ui input">
            <input type="email" name="email" placeholder="Email" />
          </div>

          <div className="ui input">
            <input type="password" name="password" placeholder="Password" />
          </div>

          <Button primary>Envoyer</Button>
        </form>
      </div>
    </>
  );
};
