import { useEffect, useState } from 'react'

const API_URL = process.env.REACT_APP_MET_API

const ReviewCard = ({review}) => {
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

  console.log(art)

  return(
    <div className="m-2 rounded-sm bg-white w-96 h-80">
        <img className='h24' src={art.primaryImage} alt="" />
    </div>
  )
}

export default ReviewCard