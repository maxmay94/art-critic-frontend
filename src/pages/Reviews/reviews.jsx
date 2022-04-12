import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Stars from '../../components/Rating/Stars.jsx'

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
    <div className="flex-auto justify-center text-center min-h-screen">
      <h1 className="rounded-sm m-20 font-semibold text-6xl text-white/[.8] bg-red-800/[.45] hover:bg-red-800/[.7] hover:text-orange-500/[.9]"> <button onClick={() => {getArtData(rand)}} >view a random work of art</button> </h1>
      <div className='flex justify-center m-20 p-10 max-w-fit bg-black/[.8]'>
        <img className='items-center max-h-96 justify-center rounded-sm' src={art.primaryImage} alt="" />
      </div>
      <Stars />
    </div>
  )
}

export default Reviews