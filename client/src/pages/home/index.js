import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../state/AuthContext'

import { callListApi } from '../../utility/api'
import { PATH_LIST } from '../../utility/constants/path'

export default function HomePage() {
  const { authData } = useAuth()
  const navigate = useNavigate()
  const [list, setList] = useState([])

  useEffect(() => {
    const getData = async () => {
      const { tokenId } = authData
      const { err, data } = await callListApi({
        path: PATH_LIST,
        headers: {
          authorization: tokenId
        }
      })
      if (err) {
        navigate('/', { replace: true })
      } else {
        setList(data)
      }
    }
    getData()
  }, [])

  return (
    <pre>
      <code>{JSON.stringify(list, null, 2)}</code>
    </pre>
  )
}
