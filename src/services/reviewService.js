import * as tokenService from '../services/tokenService'
const BASE_URL = `${process.env.REACT_APP_API_URL}/api/reviews/`

export async function getAll() {
  const res = await fetch(`${BASE_URL}index`, {
    headers: { Authorization: `Bearer ${tokenService.getToken()}` },
  })
  return await res.json()
}

export async function addReview(review) {
  try {
    const res = await fetch(BASE_URL, {
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