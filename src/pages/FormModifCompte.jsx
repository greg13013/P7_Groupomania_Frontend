import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Button } from "semantic-ui-react";
import { getUser, updateUser } from "../actions/user.actions";

export const FormModifCompte = ({ id, username, email, image, toggle }) => {
  const form = useRef();

  const [file, setFile] = useState(null);
  const [usernameModif, setUsernameModif] = useState(username);
  const [userEmailModif, setUserEmailModif] = useState(email);

  const [modifImageToggle, setModifImageToggle] = useState(false);

  const dispatch = useDispatch();

  const sendForm = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("username", usernameModif);
    formData.append("email", userEmailModif);

    //Vérifie si l'utilisateur veut changer son image
    if (modifImageToggle && file) {
      formData.append("image", file);
    }

    dispatch(updateUser(formData, id))
      .then((resUpdate) => {
        console.log(resUpdate);
        dispatch(getUser(id))
          .then((res) => {
            console.log("getUser UPDATE : ", res);

            //Appel fonction parent
            toggle()
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <form ref={form} onSubmit={sendForm} className="formCreerCompte ui form fluid">
      <div className="field">
        <img
          src={file ? URL.createObjectURL(file) : image}
          alt="previewupload"
          className="ui image large centered"
          value={image}
        />

        <Button
          onClick={(e) => {
            e.preventDefault();
            setModifImageToggle(!modifImageToggle);
          }}
        >
          {modifImageToggle ? `Annuler` : `Modifier l'image`}
        </Button>
        {modifImageToggle && (
          <>
            <label htmlFor="file">Upload image</label>
            <input type="file" name="file" id="file" onChange={(e) => setFile(e.target.files[0])} />
        
          </>
        )}
      </div>

      <div className="field">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          value={userEmailModif}
          onChange={(e) => setUserEmailModif(e.target.value)}
        />
      </div>

      <div className="field">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Username"
          value={usernameModif}
          onChange={(e) => setUsernameModif(e.target.value)}
        />
      </div>

      <Button primary>Envoyer</Button>
    </form>
  );
};
