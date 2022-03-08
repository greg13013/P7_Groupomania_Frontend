import React, { useState } from "react";
import { Button } from "react-materialize";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deletePost, updatePost } from "../../actions/post.actions";
import { Commentaires } from "./Commentaires";
import { LikeDislike } from "./LikeDislike";
import { ModalCommentaires } from "./ModalCommentaires";

export const CardPost = ({ post, user }) => {
  const dispatch = useDispatch();
  const userConnecter = useSelector((state) => state.userReducer);

  const [editToggle, setEditToggle] = useState(false);
  const [contenu, setContenu] = useState(post.contenu);

  if (user) {
    var username = user.username;
    var userId = user.id;
    var userImage = user.image;
  }

  if (post.Like) {
    var totalLikes = post.Like.length;
    var totalDislikes = post.Dislike.length;
  }

  const toggleDelete = () => {
    if (window.confirm("Etes vous certain de vouloir supprimer ce post ?")) {
      dispatch(deletePost(post.id));
    }
  };

  const toggleUpdate = () => {
    setEditToggle(!editToggle);
  };

  const sendForm = (e) => {
    e.preventDefault();
    dispatch(updatePost(contenu, post.id))
      .then((res) => {
        console.log(res);
        setEditToggle(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const trigger = (
    <div className="btnAjoutCommentaire">
      <i className="fa-solid fa-pen"></i>
      <span>Ajouter un commentaire</span>
    </div>
  );

  

  return (
    <div className="cardPerso cardPost centrerContainer flexColumn">
      {userConnecter.id === userId || userConnecter.admin ? (
        <div className="profilIcon">
          <i className="fa-solid fa-pen margin1REM" onClick={() => toggleUpdate()}></i>
          <i className="fa-solid fa-trash-can" onClick={() => toggleDelete()}></i>
        </div>
      ) : null}
      <div className="card-img-user">
        <img src={userImage} alt={userImage} className="circle responsive-img" />
      </div>
      <div className="card-titre">Publié par {username}</div>
      <div className="card-header col s12 centrerContainer">
        <img src={post.image} alt={post.image} className="responsive-img" />
      </div>
      <div className={editToggle ? "card-contenu col s12" : "card-contenu"}>
        {editToggle ? (
          <form onSubmit={sendForm}>
            <div className="row">
              <div className="input-field col s12">
                <textarea
                  name="contenu"
                  id="contenu"
                  onChange={(e) => setContenu(e.target.value)}
                  value={contenu}
                  className="materialize-textarea"
                />
                <label className="active" htmlFor="contenu">
                  Contenu
                </label>
              </div>
            </div>
            <Button>Valider</Button>
          </form>
        ) : (
          post.contenu
        )}
      </div>
      <div className="card-created">Crée le {new Date(post.createdAt).toLocaleDateString("fr", { hour: 'numeric', minute: 'numeric', second: 'numeric' })}</div>
      <div className="card-updated">Modifié le {new Date(post.updatedAt).toLocaleDateString("fr", { hour: 'numeric', minute: 'numeric', second: 'numeric' })}</div>


      <ModalCommentaires trigger={trigger} postId={post.id} />
          <Commentaires post={post} />

      <LikeDislike totalDislikes={totalDislikes} totalLikes={totalLikes} post={post} />
    </div>
  );
};
