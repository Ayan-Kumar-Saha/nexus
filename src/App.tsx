import { createBrowserRouter, RouterProvider } from 'react-router'
import './App.css'
import Layout from './Layout'
import Home from './pages/Home'
import AboutMe from './pages/AboutMe'
import Projects from './pages/Projects'
import Blogs from './pages/Blogs'
import Contact from './pages/Contact'
import { Toaster } from '@/components/ui/sonner'



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
    <div>
      <RouterProvider router={appRouter} />
      <Toaster position='bottom-center' richColors />
    </div>

  )
}

export default App
