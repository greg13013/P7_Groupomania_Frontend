import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Button } from "semantic-ui-react";
import { login, signUp } from "../actions/user.actions";

export const FormCreerCompte = () => {
  const form = useRef();

  //Variable div erreur formulaire
  const erreurUsername = useRef();
  const erreurFile = useRef();
  const erreurEmail = useRef();
  const erreurPassword = useRef();
  const erreurConfirm = useRef();

  //Variable stockage donnée formulaire
  const [file, setFile] = useState(null);
  const [username, setUsername] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);

  const dispatch = useDispatch();

  const [erreurAPI, setErreurAPI] = useState(null);

  const sendForm = async (e) => {
    e.preventDefault();
    console.log("formulaire envoyer");

    //Gestion des erreurs
    gestionErreur();

    if (file && email && password && username && confirmPassword && password === confirmPassword) {
      console.log(file);
      const user = {
        username: username,
        email: email,
        password: password,
        admin: 0
      };

      //Création formData pour upload donnée & image
      const formData = new FormData();  
      formData.append("username", username)
      formData.append("email", email)
      formData.append("password", password)
      formData.append("admin", 0)
      formData.append("image", file)

      dispatch(signUp(formData))
        .then((res) => {
          setErreurAPI("");
          console.log("signup  form : ", res);

          dispatch(login(user))
            .then((res) => {
              console.log("LOGIN FORM : ", res);
            })
            .catch((err) => console.log("ERREUR LOGIN FORM : ", err));
        })
        .catch((err) => {
          setErreurAPI(err);
          console.log("ERREUR signup  form : ", err);
        });
    }
  };

  const gestionErreur = () => {
    !file
      ? (erreurFile.current.innerHTML = "Le champ ne peut pas être vide")
      : (erreurFile.current.innerHTML = "");
    !email
      ? (erreurEmail.current.innerHTML = "Le champ ne peut pas être vide")
      : (erreurEmail.current.innerHTML = "");
    !username
      ? (erreurUsername.current.innerHTML = "Le champ ne peut pas être vide")
      : (erreurUsername.current.innerHTML = "");
    !password
      ? (erreurPassword.current.innerHTML = "Le champ ne peut pas être vide")
      : (erreurPassword.current.innerHTML = "");
    !confirmPassword
      ? (erreurConfirm.current.innerHTML = "Le champ ne peut pas être vide")
      : (erreurConfirm.current.innerHTML = "");

    if (password !== confirmPassword) {
      erreurPassword.current.innerHTML = "Les mots de passes ne correspondent pas";
      erreurConfirm.current.innerHTML = "Les mots de passes ne correspondent pas";
    }
  };

  return (
    <>
      <h2 className="ui center aligned header">Formulaire d'enregistrement</h2>
      {/* <Message negative hidden={showError} floating content={erreurUser}></Message> */}
      <div className="ui text container centered">
        <form ref={form} onSubmit={sendForm} className="formCreerCompte ui form fluid segment">
          <div className="field">
            {file && (
              <img
                src={URL.createObjectURL(file)}
                alt="previewupload"
                className="ui circular image"
              />
            )}
            <label htmlFor="file">Upload image</label>
            <input type="file" name="file" id="file" onChange={(e) => setFile(e.target.files[0])} />
            <div className="error" ref={erreurFile}></div>
          </div>

          <div className="field">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <div className="error" ref={erreurUsername}></div>
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
            <div className="error" ref={erreurEmail}></div>
            <div className="error">{erreurAPI}</div>
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
            <div className="error" ref={erreurPassword}></div>
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
            <div className="error" ref={erreurConfirm}></div>
          </div>

          <Button primary>Envoyer</Button>
        </form>
      </div>
    </>
  );
};
