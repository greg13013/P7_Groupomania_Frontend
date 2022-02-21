import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Modal } from "semantic-ui-react";
import { login } from "../actions/user.actions";

export const ModalConnexion = () => {
  const [open, setOpen] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const sendForm = async (e) => {
    e.preventDefault();

    if (email && password) {
      const user = {
        email,
        password,
      };

      await dispatch(login(user));
      setOpen(false);
    }
  };

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={
        <div className="item">
          <i className="fa-regular fa-user"></i>
          <span className="nav-links">Connexion</span>
        </div>
      }
    >
      <Modal.Header>Connexion</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <form onSubmit={sendForm}>
            <div className="ui input">
              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="ui input">
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <Button primary>Envoyer</Button>
          </form>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color="black" onClick={() => setOpen(false)}>
          Fermer
        </Button>
        {/* <Button
          content="Yep, that's me"
          labelPosition="right"
          icon="checkmark"
          onClick={() => setOpen(false)}
          positive
        /> */}
      </Modal.Actions>
    </Modal>
  );
};
