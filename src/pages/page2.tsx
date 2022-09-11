import React from 'react';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import type { Data } from './api/hello';

const queryFn = async () => {
  return (await fetch('/api/hello').then((res) => res.json())) as Data;
};

const Page2 = () => {
  const { data, status } = useQuery(['query1'], queryFn);
  console.log('page2 querykey: query1', 'status:', status, 'data:', data);

  return (
    <main>
      <h2>See console</h2>
      <p>data was 'undefined' while loading. why? </p>
      <Link href="/">
        <a>Back to page1 (Index)</a>
      </Link>
    </main>
  );
};

export default Page2;
