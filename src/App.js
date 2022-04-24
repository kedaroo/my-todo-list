import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'
import Home from './pages/home/Home'
import Navbar from './components/Navbar'
import { useAuthContext } from './context/AuthContext'

import './App.css'

export default function App() {

  const { user, authIsReady } = useAuthContext()

  return (
    <div className="App">
      {authIsReady && (
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route 
              path='/' 
              element={user ? <Home /> : <Navigate to='/login' />} 
            />
            <Route 
              path='/login' 
              element={user ? <Navigate to='/' /> : <Login />} 
            />
            <Route 
              path='/signup' 
              element={user ? <Navigate to='/' /> : <Signup />} 
            />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  )
}