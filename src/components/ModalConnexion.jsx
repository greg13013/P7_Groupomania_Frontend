import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Button, Modal } from "semantic-ui-react";
import { login } from "../actions/user.actions";

export const ModalConnexion = () => {
  const [open, setOpen] = useState(false);

  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)

  const dispatch = useDispatch();

  const userData = useSelector(state => state.userReducer)

  const sendForm = async (e) => {
    e.preventDefault();

    if (email && password) {

      const user = {
        email,
        password
      }

    dispatch(login(user))
     
     console.log(userData);

    //  await dispatch(getUser(userData.userId))
      setOpen(false)
    }

  }

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
        <Modal.Description className="ui text container centered">
          <form onSubmit={sendForm} className='formLogin'>

          <div className="ui input">
            <input type="email" name="email" placeholder="Email" onChange={ e => setEmail(e.target.value)} />
          </div>

          <div className="ui input">
            <input type="password" name="password" placeholder="Password" onChange={ e => setPassword(e.target.value)} />
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
