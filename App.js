// @ts-check
import React from 'react'
import { Main } from './components/Main'
import { AuthProvider } from './context/AuthContext'

export default function App() {
  return (
    <AuthProvider>
      <Main />
    </AuthProvider>
  )
}
