import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deletePost } from "../actions/post.actions";
import { LikeDislike } from "./LikeDislike";

export const CardPost = ({ post, user }) => {
  const dispatch = useDispatch();
  const userConnecter = useSelector((state) => state.userReducer);

  if (user) {
    var username = user.username;
    var userId = user.id;
    var userImage = user.image;
  }

  if (post.Like){
    var totalLikes = post.Like.length;
    var totalDislikes = post.Dislike.length;
  }

  const toggleDelete = () => {
    if (window.confirm("Etes vous certain de vouloir supprimer ce post ?")) {
      dispatch(deletePost(post.id));
    }
  };

  return (
    <div className="cardPerso cardPost centrerContainer flexColumn">
      {userConnecter.id === userId && (
        <div className="profilIcon">
          <img
            onClick={() => toggleDelete()}
            src="./img/icons/delete.svg"
            alt="delete"
            className="circle responsive-img"
            title="Delete"
          />
        </div>
      )}
      <div className="card-img-user">
        <img src={userImage} alt={userImage} className="circle responsive-img" />
      </div>
      <div className="card-titre">Publié par {username}</div>
      <div className="card-header col s12 centrerContainer">
        <img src={post.image} alt={post.image} className="responsive-img" />
      </div>
      <div className="card-contenu">{post.contenu}</div>
      <div className="card-footer">Crée le {post.createdAt}</div>

        <LikeDislike totalDislikes={totalDislikes} totalLikes={totalLikes} post={post} />

    </div>
  );
};
