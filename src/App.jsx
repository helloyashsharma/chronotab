import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import HomePage from './components/pages/HomePage'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  }
])


function App() {

  return (
    <div>
      <RouterProvider router = {router}/>
    </div>
  )
}

export default App
