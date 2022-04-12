import React, { useState } from 'react'

const Stars = () => {
  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(0)
  return (
    <div className='text-2xl'>
      {[...Array(5)].map((star, i) => {
        i += 1
        return (
          <button
            type='button'
            key={i}
            className={i <= rating ? 'text-yellow-400' : 'text-black/[.4]'}
            onClick={() => setRating(i)}
            onMouseEnter={() => setHover(i)}
            onMouseLeave={() => setHover(rating)}
          >
            <span className='star'>&#9733;</span>
          </button>
        )
      })}
    </div>
  )
}

export default Stars