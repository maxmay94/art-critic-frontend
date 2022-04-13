import { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import Stars from '../../components/Rating/Stars.jsx'
import * as reviewService from '../../services/reviewService'

const ReviewForm = (props) => {
  const navigate = useNavigate()
  const [rating, setRating] = useState()
  const [form, setForm] = useState({
    text: '',
    rating: 0,
    art_id: 0,
    user_id:props.user.id
  })

const handleSubmit = async (evt) => {
  evt.preventDefault()
  form.art_id = props.art.objectID
  reviewService.addReview(form)
  
}

const handleChange = (e) => {
  console.log('rating: ', rating)
  setForm({ ...form, [e.target.name]: e.target.value })
}

const getRating = (starsData) => {
  this.setState({rating: starsData})
}

  return(
    <div>
      <form onSubmit={handleSubmit}>
        
        <br />
        <Stars rating={getRating} onChange={setRating} />
        <textarea className='bg-white/[.7] rounded mt-2' 
          name="text" id="text" 
          cols="30" rows="2" 
          onChange={handleChange}
          value={form.text}
        ></textarea>
        <br />
        <button className='bg-white/[.6] hover:bg-green-100 rounded-sm p-1'>Submit Review</button>
      </form>
    </div>
  )
}

export default ReviewForm