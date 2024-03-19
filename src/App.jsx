import { useState } from 'react'
import Navbar from './components/Navbar'
import Card from './components/Card'
import './App.css'

export default function App() {
  return (
    <div className="container">
      <Navbar />
      <Card />
    </div>
  )
}

