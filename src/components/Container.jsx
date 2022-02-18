import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { Accueil } from '../pages/Accueil';
import { CreerCompte } from '../pages/CreerCompte';
import { Profil } from '../pages/Profil';
import { NavTop } from './NavTop'

export const Container = () => {
    return (
        <div>
            <NavTop />
            <main className='main-container'>
            <Routes>
                <Route path="" element={<Accueil />} />
                <Route path="/profil" element={<Profil />} />
                <Route path="/creerCompte" element={<CreerCompte />} />
            </Routes>
            </main>
        </div>
    )
}
