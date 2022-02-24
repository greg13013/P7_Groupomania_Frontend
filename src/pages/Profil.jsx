import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { FormModifCompte } from './FormModifCompte';

export const Profil = () => {

  const user = useSelector((state) => state.userReducer);

  const [editToggle, setEditToggle] = useState(false)

  const toggleUpdate = () => {
    setEditToggle(!editToggle)
  }

  return (
    <div className='ui text container centered segment'>
      <img
            onClick={() => toggleUpdate()}
            src="./img/icons/edit.svg"
            alt="edit"
          />
          {!editToggle ? <>
      <h2>{user.username}</h2>
      <img src={user.image} alt="logo utilisateur" className='ui image large centered' />
      <p>Username : {user.username}</p>
      <p>Email : {user.email}</p>
      <p>Membre depuis le : {user.createdAt}</p>
      <p>Dernier update le : {user.updatedAt}</p>
      <p>Admin : {user.admin ? 'oui' : 'non'}</p>
      </>
    : <FormModifCompte id={user.id} username={user.username} email={user.email} image={user.image} toggle={toggleUpdate} />}
    </div>
  )
}
