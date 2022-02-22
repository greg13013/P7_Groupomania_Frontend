import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getUser } from "../actions/user.actions";

export const Sidebar = () => {
  const user = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (user.isLog) dispatch(getUser(user.userId, user.token));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user.isLog]);

  console.log(user);

  return (
    <div>
      <div className="sideBar">
        <div className="sideBar-logo">
          <img src="img/logo_groupomania.png" alt="logo groupomania" />
        </div>
        {user.isLog ? (
          <div className="sideBar-user">
            <img src={user.image} alt="logo utilisateur" className="ui circular image" />
            <div>{user.username}</div>
            <div>{user.email}</div>
          </div>
        ) : null}

        <div activeclass="active" className="bloc-link">
          <span className="nav-links">Créer un post</span>
        </div>
      </div>
    </div>
  );
};
