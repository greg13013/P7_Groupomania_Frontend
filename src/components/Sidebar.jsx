import React from 'react'

export const Sidebar = () => {
    return (
        <div>
            <div className='sideBar'>

                <div className='sideBar-logo'>
                    <img src='img/logo_groupomania.png' alt='logo groupomania' />
                </div>
                <div activeclass="active" className='bloc-link'>
                    <span className='nav-links'>Créer un post</span>
                </div>
    
            </div>
        </div>
    )
}
