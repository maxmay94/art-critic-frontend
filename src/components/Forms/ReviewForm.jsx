import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Stars from '../../components/Rating/Stars.jsx'

const ReviewForm = (props) => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [form, setForm] = useState({})

const handleSubmit = async (e) => {
  console.log('handle submit, e ------> ', e)
  // on submit add art_id to form
}

const handleChange = (e) => {
  console.log('handleChange')
  setForm({ ...form, [e.target.name]: e.target.value })
}

useEffect(() => {

}, [])

  return(
    <div>
      <form onSubmit={handleSubmit}>
        
        <label className='text-xl p-1 text-black text-right' htmlFor="text"></label>
        <br />
        <Stars onChange={handleChange} />
        <textarea className='bg-white/[.7] rounded mt-2' name="text" id="text" cols="30" rows="2" onChange={handleChange}></textarea>
        <br />
        <button className='bg-white/[.6] hover:bg-green-100 rounded-sm p-1'>Submit Review</button>
      </form>
    </div>
  )
}

export default ReviewForm