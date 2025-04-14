import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import Layout from './Layout'
import { NAV_LINKS } from './constants/navlinks'
import { Suspense } from 'react'
import Loading from './components/shared/Loading'
import NotFound from './pages/NotFound'
import ThemeProvider from './components/theme/ThemeProvider'


function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            {
              NAV_LINKS
                .filter(link => link.isActive)
                .map(({ path, element: Page }) => (
                  <Route
                    key={path}
                    path={path}
                    element={
                      <Suspense fallback={<Loading />}>
                        <Page />
                      </Suspense>
                    } />
                ))
            }
            <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App;
