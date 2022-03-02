import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { deleteUser } from "../actions/user.actions";
import { FormModifCompte } from "../components/Form/FormModifCompte";

export const Profil = () => {
  const user = useSelector((state) => state.userReducer);

  const dispatch = useDispatch();

  const [editToggle, setEditToggle] = useState(false);

  const toggleUpdate = () => {
    setEditToggle(!editToggle);
  };

  const toggleDelete = () => {
    if (window.confirm("Etes vous certain de vouloir supprimer votre compte ?")) {
      dispatch(deleteUser(user.id));
    }
  };

  return (
    <div className="row centrerContainer flexColumn">
      <h3>Profil</h3>
      <div className="col s12 l8 centrerContainer flexColumn cardPerso">
        <div className="profilIcon">
          <i className="fa-solid fa-pen margin1REM" onClick={() => toggleUpdate()}></i>
          <i className="fa-solid fa-trash-can margin1REM" onClick={() => toggleDelete()}></i>
        </div>
        {!editToggle ? (
          <>
            <h4>{user.username}</h4>
            <img
              src={user.image}
              alt="logo utilisateur"
              className="responsive-img col s6 margin1REM"
            />
            <div className="centrerContainer flexColumn col s12">
              <p>Username : {user.username}</p>
              <p>Email : {user.email}</p>
              <p>Membre depuis le : {user.createdAt}</p>
              <p>Dernier update le : {user.updatedAt}</p>
              <p>Admin : {user.admin ? "oui" : "non"}</p>
            </div>
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
    </div>
  );
};
