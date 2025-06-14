import React from 'react'
import './style.css'
import MyRoutes from './Router/Routes'
import { RouterProvider } from 'react-router-dom'

const App = () => {
  return (
    <RouterProvider router = {MyRoutes}>
    </RouterProvider>
   
  )
}

export default App
