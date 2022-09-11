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
      <Link href='/'>
        <a>Link to page 1 (index)</a>
      </Link>
      <p>
        Question: why is useQuery not returning cached data? If both pages are
        using the same queryKey
      </p>
    </main>
  )
}

export default Page2
