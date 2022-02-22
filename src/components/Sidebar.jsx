import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import { getUser } from '../actions/user.actions';

export const Sidebar = () => {


    const user = useSelector(state => state.userReducer)
    const dispatch = useDispatch();

    
    useEffect(() => {
        
        if (user.isLog) dispatch(getUser(user.userId, user.token))
        
    }, [user.isLog])

    console.log(user);
    
    return (
        <div>
            <div className='sideBar'>

                <div className='sideBar-logo'>
                    <img src='img/logo_groupomania.png' alt='logo groupomania' />
                </div>

                <div className="sideBar-user">

                {user.isLog ? <img src={user.image} alt="logo utilisateur" /> : null }
                <div style={{wordBreak: 'break-all'}}>{user.username}</div>
                <div style={{wordBreak: 'break-all'}}>{user.email}</div>

                </div>
                
                <div activeclass="active" className='bloc-link'>
                    <span className='nav-links'>Créer un post</span>
                </div>
    
            </div>
        </div>
    )
}
