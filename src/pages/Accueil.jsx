import React from 'react'
import { useSelector } from 'react-redux'
import { Posts } from './Posts'

export const Accueil = () => {

  const user = useSelector(state => state.userReducer)

  return (
    <div>
      {user.isLog ? 
      <Posts />
      : <h3>Veuillez vous connecter</h3> }
    </div>
  )
}
