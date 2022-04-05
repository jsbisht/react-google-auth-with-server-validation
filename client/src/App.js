import React from 'react'
import { Routes, Route } from 'react-router-dom'
import styled from 'styled-components'

import HomePage from './pages/home'
import LoginPage from './pages/login'
import { AuthProvider } from './state/AuthProvider'

function App() {
  return (
    <AuthProvider>
      <header></header>
      <main>
        <Routes>
          <Route path="home" element={<HomePage />} />
          <Route path="/" element={<LoginPage />} />
        </Routes>
      </main>
    </AuthProvider>
  )
}

const StyledApp = styled(App)`
  :root {
    --primary-yellow: #fed925;
  }

  code {
    display: block;
    width: 500px;
    text-align: left;
  }
`

export default StyledApp
