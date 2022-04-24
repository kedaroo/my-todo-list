import { Routes, Route, BrowserRouter, Link } from 'react-router-dom'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'

import './App.css'
import Navbar from './components/Navbar'

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* <Route path='/' element={<Home />} /> */}
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}


