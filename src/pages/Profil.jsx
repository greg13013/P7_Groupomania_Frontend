import React from 'react'
import { useSelector } from 'react-redux'

export const Profil = () => {

  const user = useSelector((state) => state.userReducer);

  const state = useSelector((state) => state)

  console.log(state);
  console.log(user);

  return (
    <div>Profil</div>
  )
}
