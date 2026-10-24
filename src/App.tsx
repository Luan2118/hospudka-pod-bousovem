
import { Route, Routes } from 'react-router'
import './App.css'
import NasPribeh from './pages/NasPribeh/NasPribeh'
import Layout from './components/layout/Layout'
import Homepage from './pages/homepage/Homepage'
import Galerie from './pages/galerie/Galerie'
import NotFound from './pages/notFound/NotFound'

function App() {


  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path='/nas-pribeh' element={<NasPribeh />} />
        <Route path='/galerie' element={<Galerie />} />
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
