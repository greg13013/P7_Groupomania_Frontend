import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getAllPost } from "../actions/post.actions";
import { LoaderSpinner } from "../components/LoaderSpinner";
import { CardPost } from "../components/Post/CardPost";

export const Posts = () => {
  const posts = useSelector((state) => state.postReducer);
  const dispatch = useDispatch();

  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    //Afficher le loader le temp du chargement des posts
    setShowLoader(true);

    dispatch(getAllPost())
      .then((res) => {
        console.log("Get All post :", res);

        //Suppresion du loader après le chargement des posts
        setShowLoader(false);
      })
      .catch((err) => {
        console.log("ERROR get all post : ", err);
        setShowLoader(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (showLoader) {
    return <LoaderSpinner />;
  }

  return (
    <div>
      <h3>Fil d'actualité</h3>
      {posts
        .sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt))
        .map((post, index) => {
          return (
            <div className="row centrerContainer" key={index}>
              <div className="col s12 l6">
                <CardPost post={post} user={post.user} />
              </div>
            </div>
          );
        })}
    </div>
  );
};
