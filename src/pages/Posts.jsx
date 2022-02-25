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
        console.log(posts);
      })
      .catch((err) => {
        console.log("ERROR get all post : ", err);
      });
  }, []);

  return (
    <div>
      {posts.map((post, index) => {
        return (
          <div className="row" key={index}>
            <div className="col s12 l6">
              <CardPost post={post} />
            </div>
          </div>
        );
      })}
    </div>
  );
};