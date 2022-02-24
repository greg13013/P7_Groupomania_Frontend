import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { deleteUser } from "../actions/user.actions";
import { FormModifCompte } from "./FormModifCompte";

export const Profil = () => {
  const user = useSelector((state) => state.userReducer);

  const dispatch = useDispatch();

  const [editToggle, setEditToggle] = useState(false);

  const toggleUpdate = () => {
    setEditToggle(!editToggle);
  };

  const toggleDelete = () => {

    if (window.confirm('Etes vous certain de vouloir supprimer votre compte ?')) {
      dispatch(deleteUser(user.id))
    }
  }

  return (
    <div className="ui text container centered segment">
      <img onClick={() => toggleUpdate()} src="./img/icons/edit.svg" alt="edit" />
      <img onClick={() => toggleDelete()} src="./img/icons/delete.svg" alt="delete" />
      {!editToggle ? (
        <>
          <h2>{user.username}</h2>
          <img src={user.image} alt="logo utilisateur" className="ui image large centered" />
          <p>Username : {user.username}</p>
          <p>Email : {user.email}</p>
          <p>Membre depuis le : {user.createdAt}</p>
          <p>Dernier update le : {user.updatedAt}</p>
          <p>Admin : {user.admin ? "oui" : "non"}</p>
        </>
      ) : (
        <FormModifCompte
          id={user.id}
          username={user.username}
          email={user.email}
          image={user.image}
          toggle={toggleUpdate}
        />
      )}
    </div>
  );
};
