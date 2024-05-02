import CallList from '@/components/call-list';
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Upcoming',
};

const Upcoming = () => {
  return (
    <section className='flex size-full flex-col gap-10 text-white'>
      <h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl'>
        Upcoming Meetings
      </h1>
      <CallList type='upcoming' />
    </section>
  );
};

export default Upcoming;
