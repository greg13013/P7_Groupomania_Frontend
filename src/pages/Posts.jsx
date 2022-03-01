import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getAllPost } from "../actions/post.actions";
import { CardPost } from "../components/CardPost";

export const Posts = () => {
  const posts = useSelector((state) => state.postReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPost())
      .then((res) => {
        console.log("Get All post :", res);
      })
      .catch((err) => {
        console.log("ERROR get all post : ", err);
      });
  }, []);

  return (
    <div>
      <h3>Fil d'actualité</h3>
      {posts.map((post, index) => {
        return (
          <div className="row centrerContainer" key={index}>
            <div className="col s12 l6">
              <CardPost post={post} />
            </div>
          </div>
        );
      })}
    </div>
  );
};
