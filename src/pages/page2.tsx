import React from 'react'
import { useQuery } from '@tanstack/react-query'
import Link from 'next/link'
import type { Data } from './api/hello'

const queryFn = async () => {
  return (await fetch('/api/hello').then((res) => res.json())) as Data
}

const Page2 = () => {
  const { data, status } = useQuery(['query1'], queryFn)
  console.log('page2 querykey: query1', 'status:', status, 'data:', data)

  return (
    <main>
      <p>Status: {status}</p>
      <p>Data: {data?.name}</p>
      <div id='links'>
        <Link href='/'>
          <button>Page 1</button>
        </Link>
        <Link href='/page2'>
          <button>Page 2</button>
        </Link>
      </div>
      <p>
        Question: why is useQuery not returning cached data? If both pages are
        using the same queryKey
      </p>
    </main>
  )
}

export default Page2
