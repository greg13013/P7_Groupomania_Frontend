import React from 'react'
import { useSelector } from 'react-redux'

export const Sidebar = () => {


    const user = useSelector(state => state.userReducer)

    return (
        <div>
            <div className='sideBar'>

                <div className='sideBar-logo'>
                    <img src='img/logo_groupomania.png' alt='logo groupomania' />
                </div>

                <div style={{wordBreak: 'break-all'}}>{user.token}</div>

                <div activeclass="active" className='bloc-link'>
                    <span className='nav-links'>Créer un post</span>
                </div>
    
            </div>
        </div>
    )
}
