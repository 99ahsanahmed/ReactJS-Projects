import React from 'react'
import  './App.css'
import Home from './components/home/Home'
import Shabab from './components/Shabab/shabab'
import {createBrowserRouter , RouterProvider, Link} from 'react-router-dom';

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<>  <Home/> </>
    },
    {
      path:'/shabab',
      element:<>  <Shabab/> </>
    }
  ])
  return (
    <>
    <RouterProvider router = {router}/>
    </>

   
  )
}

export default App
