import * as tokenService from '../services/tokenService'
const BASE_URL = `${process.env.REACT_APP_API_URL}/api/reviews`

export async function getAllReviews() {
  console.log('::: reviewService getAllReviews :::')
  const res = await fetch(BASE_URL, {
    headers: { Authorization: `Bearer ${tokenService.getToken()}` },
  })
  return await res.json()
}

export async function addReview(review, art_id) {
  console.log('reviewService ---> addReview')
  try {
    const res = await fetch(`${BASE_URL}`, {
      method: 'POST',
      headers: {
        'content-Type': 'application/json',
        'Authorization': `Bearer ${tokenService.getToken()}`
      },
      body: JSON.stringify(review)
    })
    return await res.json()

  } catch(err) {
    throw err
  }
}