import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'

import './App.css'

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route path='/' element={<Home />} /> */}
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}


