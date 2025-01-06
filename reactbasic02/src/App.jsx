import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  

  return (
  <>
  <h1 className='bg-green-500 text-black rounded p-3'>Tailwind Test</h1>
  <Card model="Lawrence Chismorie" age ="25" country="Germany" folloewrs="60M"/>
  <Card model="Selena Gomez" age ="27"country="United States" folloewrs="80M"/>
  
  </>
  )
} 

export default App
