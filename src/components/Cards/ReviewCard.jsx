import { useEffect, useState } from 'react'

const API_URL = process.env.REACT_APP_MET_API

const ReviewCard = ({review, user}) => {
  const [art, setArt] = useState({})

  function getArtData(artId) {
    fetch(`${API_URL + artId}`)
      .then((res) => res.json())
      .then(data => setArt(data))
      .catch(err => console.log('ERROR',err))
  }

  useEffect(() => {
    getArtData(review.art_id)
  },[])


  return(
    <div className="w-full min-h-80 bg-gray-200 rounded overflow-hidden group-hover:opacity-75 group-hover:scale-110 lg:h-80 lg:aspect-none">
        <div>
          <img className='w-full h-full  object-cover lg:w-full lg:h-full' src={art.primaryImage} alt="" />
          
          <div className="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-6xl text-white font-semibold">

            <p className={review.text.length > 25 ? 'text-base bg-black/[.9]' : 'bg-black/[.9]'}>{review.text}</p>

            <div className="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex">
              {
                user.id === review.profile_id &&
                <div class='flex'>
                  <button className='bg-yellow-100/[.9] hover:bg-yellow-400/[.9] text-black px-5 rounded-sm max-h-5 max-w-5 text-sm' >edit.</button>
                  <button className='bg-red-100/[.9] hover:bg-red-400/[.9] text-black px-5 rounded-sm max-h-5 max-w-5 text-sm' >delete.</button>
                </div>
              }
            </div>
          </div>
        </div>
    </div>
  )
}

export default ReviewCard