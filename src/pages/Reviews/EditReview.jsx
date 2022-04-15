import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getOne } from '../../services/reviewService'

// const API_URL = process.env.REACT_APP_MET_API

const EditReview = ({user, editReview}) => {
  const { id } = useParams()
  const navigate = useNavigate()

  // const [art, setArt] = useState({})
  const [form, setForm] = useState({
    id: id,
    text: '',
    rating: 0,
    art_id: 0,
    user_id:user.id
  })

  // COME BACK TO THIS
  // function getArtData(artId) {
  //   fetch(`${API_URL + artId}`)
  //     .then((res) => res.json())
  //     .then(data => setArt(data))
  //     .catch(err => console.log('ERROR',err))
  // }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    editReview(form)
    navigate('/reviews/index')
  }

  const handleChange = (evt) => {
    setForm({ ...form, [evt.target.name]: evt.target.value })
  }

  useEffect(() => {
    // come back to this
    // getArtData(form.art_id)
  }, [form])

  useEffect(() => {
    const fetchOne = async () => {
      const data = await getOne(id)
      setForm(data)
    }
    fetchOne()
  }, [id])


  return(
    <div className='m-5 md:m-10 lg:m-20 min-h-screen'>
      <div className='flex flex-col min-h-full rounded-sm'>
        <h1 className='bg-amber-400/[.7] text-blue-600/[.9] hover:bg-blue-600/[.7] hover:text-amber-400/[.9] font-semibold text-5xl lg:text-6xl text-left'>change your mind.</h1>
        <form onSubmit={handleSubmit} >
          <textarea className='bg-black/[.7] text-white rounded-sm mt-2 text-4xl w-full font-semibold border-0' 
            name="text" id="text" 
            onChange={handleChange}
            value={form.text}
          ></textarea>
          <br />
          <button className='bg-green-100/[.45] hover:bg-green-300/[.4] text-white/[.8] hover:text-pink-500/[.8] font-semibold min-w-full text-4xl rounded-sm p-1'>re-submit review</button>
        </form>
      </div>
    </div>
  )
}

export default EditReview