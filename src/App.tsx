import { createBrowserRouter, RouterProvider } from 'react-router'
import './App.css'
import Layout from './components/Layout'
import Home from './components/Home'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import Blogs from './components/Blogs'
import Contact from './components/Contact'


const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/about-me',
        element: <AboutMe />
      },
      {
        path: '/projects',
        element: <Projects />
      },
      {
        path: '/blogs',
        element: <Blogs />
      },
      {
        path: '/contact',
        element: <Contact />
      }
    ]
  }
])

function App() {
  return (
    <RouterProvider router={appRouter} />
  )
}

export default App
