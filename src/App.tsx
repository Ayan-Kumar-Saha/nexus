import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import Layout from './Layout'
import { NAV_LINKS } from './constants/navlinks'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
        {
          NAV_LINKS
            .filter(link => link.isActive)
            .map(({ path, element: Page}) => (
              <Route path={path} element={<Page />} />
            ))
        }
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
