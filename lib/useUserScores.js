
import useSWR from 'swr'
import { getToken } from './userAuth'

export const USERS_URL = `${process.env.NEXT_PUBLIC_API_URL}/users/`

const useUserScores = userId => {
  const fetcher = async url => {
    const res = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    })

    if (!res.ok) {
      const error = new Error('An error occurred while fetching the data.')
      // Attach extra info to the error object.
      error.info = await res.json()
      error.status = res.status
      throw error
    }
    return res.json().then(data => data.scores)
  }
  const { data, error } = useSWR(USERS_URL + userId + '/scores', fetcher)
  return {
    scores: data,
    error: error && error.message,
  }
}

export default useUserScores