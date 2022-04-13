import { useEffect, useState } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Profiles from './pages/Profiles/Profiles'
import Reviews from './pages/Reviews/reviews'
import EditReview from './pages/Reviews/EditReview'
import ReviewIndex from './pages/Reviews/ReviewIndex'

import * as authService from './services/authService'
import * as reviewService from './services/reviewService'

const backgrounds = [
  'bg-cover bg-center bg-[url(https://images.metmuseum.org/CRDImages/ep/original/LC-EP_1993_132_suppl_CH-001.jpg)]',
  'bg-cover bg-center bg-[url(https://images.metmuseum.org/CRDImages/ep/original/LC-EP_1993_132_suppl_CH-001.jpg)]',
  'bg-cover bg-center bg-[url(https://images.metmuseum.org/CRDImages/ep/original/LC-EP_1993_132_suppl_CH-002.jpg)]',
  'bg-cover bg-center bg-[url(https://images.metmuseum.org/CRDImages/ep/original/LC-EP_1993_132_suppl_CH-002.jpg)]',
  'bg-cover bg-center bg-[url(https://images.metmuseum.org/CRDImages/ep/original/LC-EP_1993_132_suppl_CH-003.jpg)]', // fav
  'bg-cover bg-center bg-[url(https://images.metmuseum.org/CRDImages/ep/original/LC-EP_1993_132_suppl_CH-003.jpg)]', // fav
  'bg-cover bg-center bg-[url(https://images.metmuseum.org/CRDImages/ep/original/LC-EP_1993_132_suppl_CH-003.jpg)]', // fav
  'bg-cover bg-center bg-[url(https://images.metmuseum.org/CRDImages/ep/original/LC-EP_1993_132_suppl_CH-003.jpg)]', // fav
  'bg-cover bg-center bg-[url(https://images.metmuseum.org/CRDImages/ep/original/LC-EP_1993_132_suppl_CH-004.jpg)]',
  'bg-cover bg-center bg-[url(https://images.metmuseum.org/CRDImages/ep/original/LC-EP_1993_132_suppl_CH-001.jpg)]',
  'bg-cover bg-center bg-[url(https://images.metmuseum.org/CRDImages/ep/original/LC-EP_1993_132_suppl_CH-001.jpg)]',
  'bg-cover bg-center bg-[url(https://images.metmuseum.org/CRDImages/ep/original/LC-EP_1993_132_suppl_CH-002.jpg)]',
  'bg-cover bg-center bg-[url(https://images.metmuseum.org/CRDImages/ep/original/LC-EP_1993_132_suppl_CH-002.jpg)]',
  'bg-cover bg-center bg-[url(https://images.metmuseum.org/CRDImages/ep/original/LC-EP_1993_132_suppl_CH-003.jpg)]', // fav
  'bg-cover bg-center bg-[url(https://images.metmuseum.org/CRDImages/ep/original/LC-EP_1993_132_suppl_CH-004.jpg)]',
  'bg-cover bg-center bg-[url(https://images.metmuseum.org/CRDImages/ep/original/DT1567.jpg)]',
  'bg-cover bg-center bg-[url(https://images.metmuseum.org/CRDImages/dp/original/DP821010.jpg)]',
  'bg-cover bg-center bg-[url(https://images.metmuseum.org/CRDImages/dp/original/DP835833.jpg)]',
  'bg-cover bg-center bg-[url(https://images.metmuseum.org/CRDImages/dp/original/DP812936.jpg)]',
  'bg-cover bg-center bg-[url(https://images.metmuseum.org/CRDImages/ep/original/DP328558.jpg)]',
  'bg-cover bg-center bg-[url(https://images.metmuseum.org/CRDImages/dp/original/DP853518.jpg)]',
  'bg-cover bg-center bg-[url(https://images.metmuseum.org/CRDImages/ph/original/DP152246.jpg)]',
  'bg-cover bg-center bg-[url(https://images.metmuseum.org/CRDImages/ph/original/DP155035.jpg)]',
  'bg-cover bg-center bg-[url(https://images.metmuseum.org/CRDImages/dp/original/DP803410.jpg)]',
  'bg-cover bg-center bg-[url(https://images.metmuseum.org/CRDImages/ph/original/DP202998.jpg)]',
  'bg-cover bg-center bg-[url(https://images.metmuseum.org/CRDImages/dp/original/DP822502.jpg)]',
  'bg-cover bg-center bg-[url(https://images.metmuseum.org/CRDImages/ph/original/DP339363.jpg)]',
  'bg-cover bg-center bg-[url(https://images.metmuseum.org/CRDImages/dp/original/DP822251.jpg)]',
  'bg-cover bg-center bg-[url(https://images.metmuseum.org/CRDImages/dp/original/DP810124.jpg)]',
  'bg-cover bg-center bg-[url(https://images.metmuseum.org/CRDImages/gr/original/DP337492.jpg)]',
  'bg-cover bg-center bg-[url(https://images.metmuseum.org/CRDImages/dp/original/DP228765.jpg)]',
  'bg-cover bg-center bg-[url(https://images.metmuseum.org/CRDImages/dp/original/DP827783.jpg)]',
  'bg-cover bg-center bg-[url(https://images.metmuseum.org/CRDImages/ph/original/DP146144.jpg)]',
  'bg-cover bg-center bg-[url(https://images.metmuseum.org/CRDImages/dp/original/DT5662.jpg)]',
  'bg-cover bg-center bg-[url(https://images.metmuseum.org/CRDImages/dp/original/DP819192.jpg)]',
  'bg-cover bg-center bg-[url(https://images.metmuseum.org/CRDImages/dp/original/DP884236.jpg)]',
  'bg-cover bg-center bg-[url(https://images.metmuseum.org/CRDImages/rl/original/DP-19531-036.jpg)]',
  'bg-cover bg-center bg-[url(https://images.metmuseum.org/CRDImages/dp/original/DP875889.jpg)]',
  'bg-cover bg-center bg-[url(https://images.metmuseum.org/CRDImages/dp/original/DP815781.jpg)]',
  'bg-cover bg-center bg-[url(https://images.metmuseum.org/CRDImages/ph/original/DP274777.jpg)]',
  'bg-cover bg-center bg-[url(https://images.metmuseum.org/CRDImages/dp/original/DP874326.jpg)]',
  'bg-cover bg-center bg-[url(https://images.metmuseum.org/CRDImages/ep/original/DP276131.jpg)]',
  'bg-cover bg-center bg-[url(https://images.metmuseum.org/CRDImages/rl/original/DP-19531-017.jpg)]',
]

const App = () => {
  const [user, setUser] = useState(authService.getUser())
  const navigate = useNavigate()
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    const fetchData = async() => {
      const data = await reviewService.getAll()
      setReviews(data)
    }
    fetchData()
  }, [])

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const addReview = async (reviewData) => {
    const review = await reviewService.addReview(reviewData)
    setReviews([...reviews, review])
  }

  const editReview = async (reviewData) => {
    console.log('xxxxxxxxxx  editReview --> reviewData : ', reviewData)
    const updatedReview = await reviewService.update(reviewData)
    setReviews(reviews.map((review) => (
      review.id === updatedReview.id ? updatedReview : review
    )))
  }

  const deleteReview = async (id) => {
    await reviewService.deleteOne(id)
    setReviews(reviews.filter(review => review.id !== parseInt(id)))
  }

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }

  return (
    <>
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
          element={user? <Reviews user={user} addReview={addReview}/> : <Navigate to='/login' />} 
        />
        <Route 
          path='/reviews/index'
          element={user? <ReviewIndex reviews={reviews} user={user} deleteReview={deleteReview} editReview={editReview}/> :  <Navigate to='/login' />}
        />
        <Route
          path='/reviews/:id/edit'
          element={user? <EditReview user={user} editReview={editReview} /> : <Navigate to='/login' />}
        />
      </Routes>
    </div>
    </>
  )
}

export default App