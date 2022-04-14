import { Navigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getOne } from '../../services/reviewService'

const API_URL = process.env.REACT_APP_MET_API

const EditReview = ({user, editReview}) => {
  const { id } = useParams()

  const [art, setArt] = useState({})
  const [form, setForm] = useState({
    id: id,
    text: '',
    rating: 0,
    art_id: 0,
    user_id:user.id
  })

  function getArtData(artId) {
    fetch(`${API_URL + artId}`)
      .then((res) => res.json())
      .then(data => setArt(data))
      .catch(err => console.log('ERROR',err))
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    // form.art_id = art.objectID
    editReview(form)
    // return <Navigate to='/reviews/index' />
  }

  const handleChange = (evt) => {
    setForm({ ...form, [evt.target.name]: evt.target.value })
  }

  useEffect(() => {
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
    <div className='min-h-screen'>
        <h1 className='m-5 lg:mx-20 lg:my-5 font-semibold rounded-sm border-0 bg-amber-500/[.7] text-black/[.8] hover:text-white/[.8] text-6xl'> edit. </h1>
        <div className='m-5 lg:mx-20 lg:my-5 bg-black/[.8]'>
          {
            art &&
            <img src={art.primaryImage} alt="" />
          }
          <form onSubmit={handleSubmit}>
            <textarea className='bg-white/[.7] rounded mt-2' 
              name="text" id="text" 
              defaultValue={form.text}
              cols="30" rows="2" 
              onChange={handleChange}
            >   
            </textarea>
            <br />
            <button className='rounded-sm bg-red-800 text-red-400' onClick={() => <Navigate to='/reviews/index' />}>submit</button>
          </form>
        </div>
    </div>
  )
}

export default EditReview