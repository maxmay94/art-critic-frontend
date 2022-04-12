import { useState } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Profiles from './pages/Profiles/Profiles'
import Reviews from './pages/Reviews/reviews'
import * as authService from './services/authService'

const backgrounds = [
  'bg-cover bg-[url(https://images.metmuseum.org/CRDImages/ep/original/LC-EP_1993_132_suppl_CH-001.jpg)]',
  'bg-cover bg-[url(https://images.metmuseum.org/CRDImages/ep/original/LC-EP_1993_132_suppl_CH-001.jpg)]',
  'bg-cover bg-[url(https://images.metmuseum.org/CRDImages/ep/original/LC-EP_1993_132_suppl_CH-002.jpg)]',
  'bg-cover bg-[url(https://images.metmuseum.org/CRDImages/ep/original/LC-EP_1993_132_suppl_CH-002.jpg)]',
  'bg-cover bg-[url(https://images.metmuseum.org/CRDImages/ep/original/LC-EP_1993_132_suppl_CH-003.jpg)]', // fav
  'bg-cover bg-[url(https://images.metmuseum.org/CRDImages/ep/original/LC-EP_1993_132_suppl_CH-003.jpg)]', // fav
  'bg-cover bg-[url(https://images.metmuseum.org/CRDImages/ep/original/LC-EP_1993_132_suppl_CH-003.jpg)]', // fav
  'bg-cover bg-[url(https://images.metmuseum.org/CRDImages/ep/original/LC-EP_1993_132_suppl_CH-003.jpg)]', // fav
  'bg-cover bg-[url(https://images.metmuseum.org/CRDImages/ep/original/LC-EP_1993_132_suppl_CH-004.jpg)]',
  'bg-cover bg-[url(https://images.metmuseum.org/CRDImages/ep/original/DT1567.jpg)]',
  'bg-cover bg-[url(https://images.metmuseum.org/CRDImages/dp/original/DP821010.jpg)]',
  'bg-cover bg-[url(https://images.metmuseum.org/CRDImages/dp/original/DP835833.jpg)]',
  'bg-cover bg-[url(https://images.metmuseum.org/CRDImages/dp/original/DP812936.jpg)]',
  'bg-cover bg-[url(https://images.metmuseum.org/CRDImages/ep/original/DP328558.jpg)]',
  'bg-cover bg-[url(https://images.metmuseum.org/CRDImages/dp/original/DP853518.jpg)]',
  'bg-cover bg-[url(https://images.metmuseum.org/CRDImages/ph/original/DP152246.jpg)]',
  'bg-cover bg-[url(https://images.metmuseum.org/CRDImages/ph/original/DP155035.jpg)]',
  'bg-cover bg-[url(https://images.metmuseum.org/CRDImages/dp/original/DP803410.jpg)]',
  'bg-cover bg-[url(https://images.metmuseum.org/CRDImages/ph/original/DP202998.jpg)]',
  'bg-cover bg-[url(https://images.metmuseum.org/CRDImages/dp/original/DP822502.jpg)]',
  'bg-cover bg-[url(https://images.metmuseum.org/CRDImages/ph/original/DP339363.jpg)]',
  'bg-cover bg-[url(https://images.metmuseum.org/CRDImages/dp/original/DP822251.jpg)]',
  'bg-cover bg-[url(https://images.metmuseum.org/CRDImages/dp/original/DP810124.jpg)]',
  'bg-cover bg-[url(https://images.metmuseum.org/CRDImages/gr/original/DP337492.jpg)]',
  'bg-cover bg-[url(https://images.metmuseum.org/CRDImages/dp/original/DP228765.jpg)]',
  'bg-cover bg-[url(https://images.metmuseum.org/CRDImages/dp/original/DP827783.jpg)]',
  'bg-cover bg-[url(https://images.metmuseum.org/CRDImages/dp/original/DP836919.jpg)]',
]

const App = () => {
  const [user, setUser] = useState(authService.getUser())
  const navigate = useNavigate()
  console.log(user)

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }

  return (
    <>
    {/* <div className="bg-cover bg-[url('https://images.metmuseum.org/CRDImages/ep/original/LC-EP_1993_132_suppl_CH-003.jpg')]"> */}
    <div className={backgrounds[Math.floor(Math.random() * backgrounds.length)]}>
      <NavBar user={user} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Landing user={user} />} />
        <Route
          path="/signup"
          element={<Signup handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/login"
          element={<Login handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/profiles"
          element={user ? <Profiles /> : <Navigate to="/login" />}
        />
        <Route 
          path='/reviews/new'
          element={user? <Reviews user={user} /> : <Navigate to='/login' />} 
        />
      </Routes>
    </div>
    </>
  )
}

export default App