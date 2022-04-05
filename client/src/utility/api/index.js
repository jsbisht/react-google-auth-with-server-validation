import { SERVER_URL } from '../constants/app'
import { GET } from '../constants/path'

export async function callListApi({ verb = GET, path, data, headers }) {
  const serverUrl = `${SERVER_URL}${path}`
  try {
    const response = await fetch(serverUrl, {
      method: verb,
      headers: {
        'Content-Type': 'application/json',
        ...headers
      },
      body: JSON.stringify(data)
    })
    if (response.status !== 200) {
      return errorMessage(response)
    }
    const result = await response.json()
    return {
      data: result,
      err: false
    }
  } catch (error) {
    return errorMessage(null)
  }
}

function errorMessage(response) {
  if (!response) {
    return { err: true, msg: 'Could not connect to list server' }
  }

  return { err: true, msg: 'Error occured' }
}
