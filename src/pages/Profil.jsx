import React from 'react'
import { useSelector } from 'react-redux'

export const Profil = () => {

  const user = useSelector((state) => state.userReducer);

  return (
    <div className='ui text container centered'>
      <h2>{user.username}</h2>
      <img src={user.image} alt="logo utilisateur" />
      <p>Email : {user.email}</p>
      <p>Membre depuis le : {user.createdAt}</p>
      <p>Admin : {user.admin ? 'oui' : 'non'}</p>
    </div>
  )
}
