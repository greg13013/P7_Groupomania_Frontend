import React, { useRef, useState } from 'react'
import { Button } from 'react-materialize';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createPost } from '../actions/post.actions';
import { InputFile } from '../components/Form/InputFile';

export const FormCreerPost = () => {

    const form = useRef();

  //Variable div erreur formulaire
  const erreurContenu = useRef();
  const erreurFile = useRef();

  //Variable stockage donnée formulaire
  const [file, setFile] = useState(null);
  const [contenu, setContenu] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const sendForm = async (e) => {
    e.preventDefault();
    console.log("formulaire envoyer");

    //Gestion des erreurs
    gestionErreur();

    if (file && contenu) {

      //Création formData pour upload donnée & image
      const formData = new FormData();
      formData.append("contenu", contenu);
      formData.append("image", file);

        dispatch(createPost(formData)).then(res => {
            console.log(res);
            navigate('/accueil');
        }).catch(err => {
            console.log(err);
        })

    }
  };


    const gestionErreur = () => {
        !file
          ? (erreurFile.current.innerHTML = "Le champ ne peut pas être vide")
          : (erreurFile.current.innerHTML = "");
        !contenu
          ? (erreurContenu.current.innerHTML = "Le champ ne peut pas être vide")
          : (erreurContenu.current.innerHTML = "");
      };

  return (
    <div>
      <h3 className="center">Formulaire création de post</h3>
      <div className="row centrerContainer">
        <form ref={form} onSubmit={sendForm} className="formCreerPost col s8 l6 cardPerso">
 

          <InputFile file={file} setFile={setFile} erreurFile={erreurFile} />

          <div className="row">
            <div className="input-field col s12">
              <textarea
                name="contenu"
                id="contenu"
                onChange={(e) => setContenu(e.target.value)}
                className="materialize-textarea"
              />
              <label htmlFor="contenu">Contenu</label>
              <div className="error" ref={erreurContenu}></div>
            </div>
          </div>

          <Button>Envoyer</Button>
        </form>
      </div>
    </div>
  )
}
