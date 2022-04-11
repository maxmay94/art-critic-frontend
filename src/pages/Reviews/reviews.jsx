import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const API_URL = 'https://collectionapi.metmuseum.org/public/collection/v1/objects/'
let rand = Math.round(Math.random() * 856655)

const Reviews = ({user}) => {
  const [art, setArt] = useState({})

  useEffect(() => {
    getArtData(rand)
  }, [])

  function getArtData(rand) {
    let art = `${API_URL + rand}`
    fetch(art).then((res) => res.json()).then(data => {
      if(!data.primaryImage) getArtData(Math.round(Math.random() * 856655))
      else setArt(data)
    })
    .catch(err => console.log(err))
  }

  
  return (
    <div className="flex-auto text-center min-h-screen">
      <h1 className="rounded-sm m-20 font-semibold text-6xl text-white bg-red-800/[.8]"> <Link to=''>review a random work of art</Link> </h1>
    </div>
  )
}

export default Reviews