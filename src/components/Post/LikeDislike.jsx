import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  dislikePost,
  likePost,
  supprimerDislikePost,
  supprimerLikePost,
} from "../../actions/post.actions";

export const LikeDislike = ({ post, totalLikes, totalDislikes }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userReducer);

  const idPost = post.id;

  const [siLike, setSiLike] = useState(null);
  const [siDislike, setSiDislike] = useState(null);

  useEffect(() => {
    if (post.Like && post.Dislike) {
      var tabLike = post.Like;
      var tabDislike = post.Dislike;

      //Verifie si l'utilisateur a déjà like ou dislike
      tabLike.some((element) => element.id === user.id) ? setSiLike(true) : setSiLike(false);
      tabDislike.some((element) => element.id === user.id)
        ? setSiDislike(true)
        : setSiDislike(false);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [post.Like, post.Dislike]);

  const toggleLike = () => {
    dispatch(likePost(idPost, user))
      .then((res) => {
        console.log(res);
        setSiLike(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const toggleSupprimerLike = () => {
    dispatch(supprimerLikePost(idPost, user))
      .then((res) => {
        console.log(res);
        setSiLike(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const toggleDislike = () => {
    dispatch(dislikePost(idPost, user))
      .then((res) => {
        console.log(res);
        setSiDislike(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const toggleSupprimerDislike = () => {
    dispatch(supprimerDislikePost(idPost, user))
      .then((res) => {
        console.log(res);
        setSiDislike(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="card-likeDislike">
      {siLike ? (
        <i className="fa-solid fa-thumbs-up marginLike" onClick={toggleSupprimerLike}>
          {totalLikes}
        </i>
      ) : (
        <i className={siDislike ? "fa-regular fa-thumbs-up marginLike disabledIcon" : "fa-regular fa-thumbs-up marginLike"} onClick={toggleLike}>
          {totalLikes}
        </i>
      )}
      {siDislike ? (
        <i className="fa-solid fa-thumbs-down marginLike" onClick={toggleSupprimerDislike}>
          {totalDislikes}
        </i>
      ) : (
        <i className={siLike ? 'fa-regular fa-thumbs-down marginLike disabledIcon' : "fa-regular fa-thumbs-down marginLike"} onClick={toggleDislike}>
          {totalDislikes}
        </i>
      )}
    </div>
  );
};
