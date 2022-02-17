import React from 'react'
import { Container } from './components/Container'
import { Sidebar } from './components/Sidebar'

export const App = () => {
  return (
    <div className='global-container'>
      <Sidebar />
      <Container />
    </div>
  )
}

