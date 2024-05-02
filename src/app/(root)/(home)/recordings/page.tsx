import CallList from '@/components/call-list';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Recordings',
};

const Recordings = () => {
  return (
    <section className='flex size-full flex-col gap-10 text-white'>
      <h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl'>
        Meeting Recordings
      </h1>
      <CallList type='recordings' />
    </section>
  );
};

export default Recordings;
