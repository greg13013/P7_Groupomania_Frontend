import React, { useState } from "react";
import { Collapsible, CollapsibleItem } from "react-materialize";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getCommentaire } from "../../actions/commentaire.actions";

export const Commentaires = ({ post }) => {
  const dispatch = useDispatch();
  const commentaireData = useSelector((state) => state.commentaireReducer);

  const [load, setLoad] = useState(false);

  const afficherCommentaire = () => {
    if (!load) {
      let check
      commentaireData.forEach((array, index) => {

        //Vérifie si les commentaires sont déjà chargé dans le store
        check = array.some(element => element.postId === post.id)

        console.log(check);
        setLoad(true)
      })
      if (!check) {

        dispatch(getCommentaire(post.id))
        .then((res) => {
          
          setLoad(true);
          
        })
        .catch((err) => {
          console.log(err);
        });
      }
    }
  };

  return (
    <Collapsible className="col s12 collapseCommentaire" onClick={afficherCommentaire}>
      <CollapsibleItem expanded={false} header="Voir les commentaires" node="div">
        {load &&
          commentaireData.map((array) => {
            return array
              .filter((element) => element.postId === post.id)
              .sort((a,b) => a.id - b.id)
              .map((commentaire, index) => {
                return (
                  <div className="commentaire" key={index}>
                    <img
                      className="circle responsive-img"
                      src={commentaire.user.image}
                      alt={commentaire.user.image}
                    />
                    {commentaire.contenu}
                    <div className="commentaire-footer">
                      Crée le {commentaire.createdAt}
                    </div>
                  </div>
                );
              });
          })}
      </CollapsibleItem>
    </Collapsible>
  );
};
