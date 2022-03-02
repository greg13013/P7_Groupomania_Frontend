import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Button } from "react-materialize";
import { login, signUp } from "../actions/user.actions";
import { InputFile } from "../components/Form/InputFile";

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
        admin: false,
      };

      //Création formData pour upload donnée & image
      const formData = new FormData();
      formData.append("username", username);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("admin", 0);
      formData.append("image", file);

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
      <h3 className="center">Formulaire d'enregistrement</h3>
      <div className="row centrerContainer">
        <form ref={form} onSubmit={sendForm} className="cardPerso formCreerCompte col s8 l6">
 

        <InputFile file={file} setFile={setFile} erreurFile={erreurFile} />


          <div className="row">
            <div className="input-field col s12">
              <input
                type="text"
                name="username"
                id="username"
                onChange={(e) => setUsername(e.target.value)}
                className="validate"
              />
              <label htmlFor="username">Username</label>
              <div className="error" ref={erreurUsername}></div>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s12">
              <input
                type="email"
                name="emailCreer"
                id="emailCreer"
                onChange={(e) => setEmail(e.target.value)}
                className="validate"
              />
              <label htmlFor="emailCreer">Email</label>
              <div className="error" ref={erreurEmail}></div>
              <div className="error">{erreurAPI}</div>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s12">
              <input
                type="password"
                name="passwordCreer"
                id="passwordCreer"
                onChange={(e) => setPassword(e.target.value)}
                className="validate"
              />
              <label htmlFor="passwordCreer">Password</label>
              <div className="error" ref={erreurPassword}></div>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s12">
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="validate"
              />
              <label htmlFor="confirmPassword">Confirmer le password</label>
              <div className="error" ref={erreurConfirm}></div>
            </div>
          </div>

          <Button>Envoyer</Button>
        </form>
      </div>
    </>
  );
};
