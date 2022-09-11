import React from 'react';
import Link from 'next/link';
import { useQuery } from '@tanstack/react-query';
import type { Data } from './api/hello';

const queryFn = async () => {
  return (await fetch('/api/hello').then((res) => res.json())) as Data;
};

const Page1 = () => {
  const { data, status } = useQuery(['query1'], queryFn);
  console.log('page1 queryKey: query1', 'status:', status, 'data:', data);

  return (
    <main>
      <h2>Overview</h2>
      <ul>
        <li>queryClient is created in _app and input to QueryProvider</li>
        <li>Two nextJs pages each `useQuery` with same queryKey</li>
      </ul>

      <h3>Problem</h3>
      <ul>
        <li>Even though page 2 uses the same queryKey as this page</li>
        <li>
          on page 2, while useQuery status is 'loading', data is returned as
          'undefined'
        </li>
        <li>rather, shouldn't the cached data be returned?</li>
      </ul>
      <Link href="/page2">
        <a>Link to Page 2</a>
      </Link>
    </main>
  );
};

export default Page1;
