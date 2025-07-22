import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import About from './pages/About.tsx'
import App from './App.tsx'
import Home from './pages/Home.tsx'
import Projects from './pages/Projects.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router'

const router = createBrowserRouter([{

  element: <App/>,
  children:[ {
    path:"/",
    element : <Home/>
  },
  {
    path:"/projects",
    element : <Projects/>
  },
  {
    path:"/about",
    element: <About/>
  },
    
  ]
}])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router = {router}/>
  </StrictMode>,
)
