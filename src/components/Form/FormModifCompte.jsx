import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Button } from "react-materialize";
import { getUser, updateUser } from "../../actions/user.actions";

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

            //Appel fonction parent fermeture form update
            toggle();
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
    <div className="row centrerContainer">
      <form ref={form} onSubmit={sendForm} className="formCreerCompte col s12 l8">
        <div className="row centrerContainer flexColumn">
          <img
            src={file ? URL.createObjectURL(file) : image}
            alt="previewupload"
            value={image}
            className="responsive-img col s10 l7 center-align margin1REM"
          />

          <Button
            onClick={(e) => {
              e.preventDefault();
              setModifImageToggle(!modifImageToggle);
            }}>

            {modifImageToggle ? `Annuler` : `Modifier l'image`}

          </Button>

          {modifImageToggle && (
            <>
              <div className="file-field input-field col s12">
                <div className="btn">
                  <span>File</span>
                  <input
                    type="file"
                    name="file"
                    id="file"
                    onChange={(e) => setFile(e.target.files[0])}
                    className="validate"
                  />
                </div>
                <div className="file-path-wrapper">
                  <input className="file-path validate" type="text" />
                </div>
              </div>
            </>
          )}
        </div>

        <div className="row">
          <div className="input-field col s12">
            <input
              type="email"
              name="emailCreer"
              id="emailCreer"
              onChange={(e) => setUserEmailModif(e.target.value)}
              value={userEmailModif}
              className="validate"
            />
            <label className="active" htmlFor="emailCreer">
              Email
            </label>
          </div>
        </div>

        <div className="row">
          <div className="input-field col s12">
            <input
              type="text"
              name="username"
              id="username"
              onChange={(e) => setUsernameModif(e.target.value)}
              value={usernameModif}
              className="validate"
            />
            <label className="active" htmlFor="username">
              Username
            </label>
          </div>
        </div>

        <Button>Envoyer</Button>
      </form>
    </div>
  );
};
