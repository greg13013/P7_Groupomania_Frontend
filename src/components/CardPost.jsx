import React from "react";

export const CardPost = ({ post }) => {
  return (
    <div className="cardPerso cardPost centrerContainer flexColumn">
      <div className="card-header col s12 centrerContainer">
        <img src={post.image} alt={post.image} className="responsive-img" />
      </div>
      <div className="card-contenu">{post.contenu}</div>
      <div className="card-footer">Crée le {post.createdAt}</div>
    </div>
  );
};
