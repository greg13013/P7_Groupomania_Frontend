import React from "react";

export const CardPost = ({ post }) => {
  return (
    <div className="cardPerso centrerContainer flexColumn">
      <div className="card-header">
        <img src={post.image} alt={post.image} className="responsive-img" />
      </div>
      <div className="card-contenu">{post.contenu}</div>
      <div className="card-footer">{post.createdAt}</div>
    </div>
  );
};
