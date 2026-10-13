
import { Route, Routes } from 'react-router'
import './App.css'
import NasPribeh from './pages/NasPribeh/NasPribeh'
import Layout from './components/layout/Layout'
import Homepage from './pages/homepage/Homepage'

function App() {


  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path='/nas-pribeh' element={<NasPribeh />} />
      </Route>
    </Routes>
  )
}

export default App
