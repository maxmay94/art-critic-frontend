import { React, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const API_URL = process.env.REACT_APP_MET_API

const ReviewCard = ({review, user, deleteReview, editReview}) => {
  const navigate = useNavigate()
  const [art, setArt] = useState({})
  const [text, setText] = useState()

  function getArtData(artId) {
    fetch(`${API_URL + artId}`)
      .then((res) => res.json())
      .then(data => setArt(data))
      .catch(err => console.log('ERROR',err))
  }

  function handleDelete(){
    console.log('HANDLE DELETE REVIEW', review.id)
    deleteReview(review.id)
  }

  useEffect(() => {
    getArtData(review.art_id)
    setText(review.text)
  },[])


  return(
    <div className="w-full min-h-80 bg-gray-200 rounded overflow-hidden group-hover:opacity-75 group-hover:scale-110 lg:h-80 lg:aspect-none">

        <div className='align-middle justify-center'>
          <img className='sm:w-full sm:h-full lg:w-full lg:h-full' src={art.primaryImage} alt={art.title} />
          <div className="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-3xl md:text-4xl lg:text-6xl text-white font-semibold">
            <p className={review.text.length > 35 ? 'text-base bg-black/[.9]' : 'bg-black/[.9]'} >{review.text.toLowerCase()}</p>
            <div className="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex-end">
              {
                user.id === review.profile_id &&
                <div className='flex'>
                  <button onClick={() => navigate(`/reviews/${review.id}/edit`, { state: review })} className='bg-yellow-100/[.9] hover:bg-yellow-400/[.9] text-black px-5 rounded-sm max-h-5 max-w-5 text-sm'>edit.</button>
                  <button onClick={handleDelete} className='bg-red-100/[.9] hover:bg-red-400/[.9] text-black px-5 rounded-sm max-h-5 max-w-5 text-sm' >delete.</button>
                </div>
              }
            </div>
          </div>
        </div>
    </div>
  )
}

export default ReviewCard