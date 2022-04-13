import { useEffect, useState } from 'react'
import ReviewForm from '../../components/Forms/ReviewForm'


const API_URL = process.env.REACT_APP_MET_API
let rand = Math.round(Math.random() * 856655)

const Reviews = ({user, addReview}) => {
  const [art, setArt] = useState({})
  
  useEffect(() => {
    getArtData(rand)
  },[])

  useEffect(() => {
    console.log('useEffect() art ---> ', art.primaryImage)
  }, [art])

  function getArtData(rand) {
    fetch(`${API_URL + rand}`)
      .then((res) => res.json())
      .then(data => {
        setArt('')
        if(!data.primaryImage) getArtData(Math.round(Math.random() * 856655))
        else setArt(data)
      })
      .catch(err => console.log('ERROR',err))
  }

  return (
    <div className="flex-auto justify-center text-center min-h-screen">
      <h1 className='mx-20 my-5 font-semibold rounded-sm border-0 bg-amber-500/[.7] text-black/[.8] hover:text-white/[.8] text-6xl'> behold. </h1>

      <div className='flex justify-center rounded ml-20 mr-20 bg-black/[.4]'>
        {
          art.title ?
            <div className='flex rounded-sm justify-center m-20 p-10 max-w-fit bg-white/[.9]'>
              <div>
                <img className='items-center max-h-92 justify-center rounded-sm' src={art.primaryImage} alt="" />
                <br />
                <p className='text-xs text-left'>{art.artistDisplayName && art.artistDisplayName}</p>
                <p className='text-xs text-left'>{art.title}</p>
                <p className='text-xs text-left'>{art.artistDisplayBio && art.artistDisplayBio}</p>
                <p className='text-xs text-left'>{art.objectDate}</p>
              </div>
              <div>
              </div>
              <div className='m-5 justify-right'>
                <ReviewForm art={art} user={user} addReview={addReview}/>
              </div>
            </div>
          :
            <div className='loader animate-pulse'><img src="../loading.png" width='200' height='200' alt="" /></div>
        }
      </div>
    </div>
  )
}

export default Reviews