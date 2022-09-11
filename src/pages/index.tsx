import React from 'react'
import Link from 'next/link'
import { useQuery } from '@tanstack/react-query'
import type { Data } from './api/hello'

const queryFn = async () => {
  return (await fetch('/api/hello').then((res) => res.json())) as Data
}

const Page1 = () => {
  const { data, status } = useQuery(['query1'], queryFn)
  console.log('page1 queryKey: query1', 'status:', status, 'data:', data)

  return (
    <main>
      
        <p>Status: {status}</p>
        <p>Data: {data?.name}</p>
        <Link href='/page2'>
          <a>Link to Page 2</a>
        </Link>
        <p>
          Question: why is useQuery not returning cached data? If both pages are
          using the same queryKey
        </p>
 
    </main>
  )
}

export default Page1
