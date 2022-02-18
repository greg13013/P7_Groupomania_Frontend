import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { Accueil } from '../pages/Accueil';
import { NavTop } from './NavTop'

export const Container = () => {
    return (
        <div>
            <NavTop />
            <main className='main-container'>
            <Routes>
                <Route path="" element={<Accueil />} />
            </Routes>
            </main>
        </div>
    )
}
