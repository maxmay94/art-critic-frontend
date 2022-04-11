import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const API_URL = 'https://collectionapi.metmuseum.org/public/collection/v1/objects/'
let rand = Math.round(Math.random() * 856655)

const Reviews = ({user}) => {
  const [art, setArt] = useState({})
  
  useEffect(() => {
    getArtData(rand)
  }, [])

  useEffect(() => {
    console.log('useEffect() art ---> ', art)
  }, [art])

  function getArtData(rand) {
    fetch(`${API_URL + rand}`)
      .then((res) => res.json())
      .then(data => {
        if(!data.primaryImage) getArtData(Math.round(Math.random() * 856655))
        else setArt(data)
      })
    .catch(err => console.log('ERROR',err))
  }

  return (
    <div className="flex-auto text-center min-h-screen">
      <h1 className="rounded-sm m-20 font-semibold text-6xl text-white bg-red-800/[.8]"> <button onClick={() => {getArtData(rand)}} >view a random work of art</button> </h1>
      <div className='flex m-10 p-10 bg-black/[.9]'>
        <img className='max-h-max max-w-full self-center' src={art.primaryImage} alt="" />
      </div>
    </div>
  )
}

export default Reviews