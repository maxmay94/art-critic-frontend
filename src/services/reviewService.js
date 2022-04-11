import * as tokenService from '../services/tokenService'

const BASE_URL = `${process.env.REACT_APP_API_URL}/api/reviews`

export async function getAllReviews() {
  const res = await fetch(BASE_URL, {
    headers: { Authorization: `Bearer ${tokenService.getToken()}` },
  })
  return await res.json()
}
