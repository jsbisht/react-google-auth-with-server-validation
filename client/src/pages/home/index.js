import React, { useEffect, useState } from 'react'

import { callListApi } from '../../utility/api'
import { PATH_LIST } from '../../utility/constants/path'

export default function HomePage() {
  const [list, setList] = useState([])

  useEffect(() => {
    const getData = async () => {
      const { data } = await callListApi({
        path: PATH_LIST
      })
      setList(data)
    }
    getData()
  }, [])

  return (
    <pre>
      <code>{JSON.stringify(list, null, 2)}</code>
    </pre>
  )
}
