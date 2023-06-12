import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Portfolio from './components/Portfolio'

function App() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Services/>
    <Portfolio/>
    </>
  )
}

export default App
