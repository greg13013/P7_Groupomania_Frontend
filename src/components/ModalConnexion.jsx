import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Button, Modal } from "semantic-ui-react";
import { getUser, login } from "../actions/user.actions";

export const ModalConnexion = () => {
  const [open, setOpen] = useState(false);

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const [errorForm, setErrorForm] = useState(null);

  const dispatch = useDispatch();

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

  useEffect(() => {
    if (!errorForm) setOpen(false);
  }, [errorForm]);

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
          <form onSubmit={sendForm} className="formLogin ui form fluid">
            <div className="field">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
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
            </div>

            <Button primary>Envoyer</Button>
            <div className="error">{errorForm}</div>
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
