import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteUser, getAllUser } from "../actions/admin.actions";

export const Admin = () => {
  const dispatch = useDispatch();
  const users = Array.from(useSelector((state) => state.adminReducer));

  useEffect(() => {
    dispatch(getAllUser())
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  }, []);

  const toggleDelete = (id) => {
    if (window.confirm("Etes vous certain de vouloir supprimer ce compte ?")) {
      dispatch(deleteUser(id));
    }
  };

  return (
    <div>
      <table className="ui selectable celled table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Admin</th>
            <th>Image</th>
            <th>Username</th>
            <th>Email</th>
            <th>Creation</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => {
            return (
              <tr key={index}>
                <td>{user.id}</td>
                <td>{user.admin ? "oui" : "non"}</td>
                <td><img src={user.image} className="ui mini rounded image" alt={user.username} /></td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.createdAt}</td>
                <td>
                  {!user.admin && <img
                    onClick={() => toggleDelete(user.id)}
                    src="./img/icons/delete.svg"
                    className="icons"
                    alt="delete"
                  />}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
