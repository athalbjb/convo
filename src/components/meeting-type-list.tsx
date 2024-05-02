'use client';

import { useState } from 'react';
import HomeCard from './home-card';
import {
  Calendar,
  CircleCheckBig,
  Copy,
  Plus,
  UserRoundPlus,
  Video,
} from 'lucide-react';
import { useRouter } from 'next/navigation';
import MeetingModal from './meeting-modal';
import { useUser } from '@clerk/nextjs';
import { Call, useStreamVideoClient } from '@stream-io/video-react-sdk';
import { useToast } from '@/components/ui/use-toast';
import { Textarea } from './ui/textarea';
import ReactDatePicker from 'react-datepicker';
import { Input } from './ui/input';

const MeetingTypeList = () => {
  const router = useRouter();
  const [meetingState, setMeetingState] = useState<
    'isScheduleMeeting' | 'IsJoiningMeeting' | 'isInstantMeeting' | undefined
  >();
  const [values, setValues] = useState({
    dateTime: new Date(),
    description: '',
    link: '',
  });
  const { toast } = useToast();
  const [callDetails, setCallDetails] = useState<Call>();
  const { user } = useUser();
  const client = useStreamVideoClient();
  const createMeeting = async () => {
    if (!user || !client) return;

    try {
      if (!values.dateTime) {
        toast({
          title: 'Please select a date and time.',
        });
        return;
      }

      const id = crypto.randomUUID();
      const call = client.call('default', id);

      if (!call) throw new Error('Failed to create call');

      const startsAt =
        values.dateTime.toISOString() || new Date(Date.now()).toISOString();
      const description = values.description || 'Instant Meeting';
      await call.getOrCreate({
        data: {
          starts_at: startsAt,
          custom: {
            description,
          },
        },
      });

      setCallDetails(call);

      if (!values.description) {
        router.push(`/meeting/${call.id}`);
      }
      toast({
        title: 'Meeting Created',
      });
    } catch (error) {
      console.log(error);
      toast({
        title: 'Failed to create Meeting.',
      });
    }
  };

  const meetingLink = `${process.env.NEXT_PUBLIC_BASE_URL}/meeting/${callDetails?.id}`;

  return (
    <section className='grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4'>
      <HomeCard
        icon={Plus}
        title='New Meeting'
        description='Setup a new recording'
        handleClick={() => setMeetingState('isInstantMeeting')}
        className='bg-orange-1'
      />
      <HomeCard
        icon={UserRoundPlus}
        title='Join Meeting'
        description='via invitation link'
        handleClick={() => setMeetingState('IsJoiningMeeting')}
        className='bg-blue-1'
      />
      <HomeCard
        icon={Calendar}
        title='Schedule Meeting'
        description='Plan your meeting'
        handleClick={() => setMeetingState('isScheduleMeeting')}
        className='bg-purple-1'
      />
      <HomeCard
        icon={Video}
        title='View Recordings'
        description='Meeting recordings'
        handleClick={() => router.push('/recordings')}
        className='bg-yellow-1'
      />

      {!callDetails ? (
        <MeetingModal
          isOpen={meetingState === 'isScheduleMeeting'}
          onClose={() => setMeetingState(undefined)}
          title='Create Meeting'
          handleClick={createMeeting}
        >
          <div className='flex flex-col gap-2.5'>
            <label className='text-base font-normal leading-6 text-sky-2'>
              Add a description
            </label>
            <Textarea
              onChange={(e) => {
                setValues({ ...values, description: e.target.value });
              }}
              className='border-none bg-dark-3 focus-visible:ring-0 focus-visible:ring-offset-0'
            />
          </div>
          <div className='flex w-full flex-col gap-2.5'>
            <label className='text-base font-normal leading-6 text-sky-2'>
              Select Date & Time
            </label>
            <ReactDatePicker
              selected={values.dateTime}
              onChange={(date) => {
                setValues({ ...values, dateTime: date! });
              }}
              showTimeSelect
              timeFormat='HH:mm'
              timeIntervals={15}
              timeCaption='time'
              dateFormat='MMMM d, yyyy h:mm aa'
              className='w-full rounded bg-dark-3 p-2 focus:outline-none'
            />
          </div>
        </MeetingModal>
      ) : (
        <MeetingModal
          isOpen={meetingState === 'isScheduleMeeting'}
          onClose={() => setMeetingState(undefined)}
          title='Meeting Created'
          className='text-center'
          buttonText='Copy Meeting Link'
          handleClick={() => {
            navigator.clipboard.writeText(meetingLink);
            toast({ title: 'Link Copied' });
          }}
          icon={CircleCheckBig}
          buttonIcon={Copy}
        />
      )}
      <MeetingModal
        isOpen={meetingState === 'isInstantMeeting'}
        onClose={() => setMeetingState(undefined)}
        title='Start an Instant Meeting'
        className='text-center'
        buttonText='Start Meeting'
        handleClick={createMeeting}
      />
      <MeetingModal
        isOpen={meetingState === 'IsJoiningMeeting'}
        onClose={() => setMeetingState(undefined)}
        title='Type the link here'
        className='text-center'
        buttonText='Join Meeting'
        handleClick={() => router.push(values.link)}
      >
        <Input
          placeholder='Meeting Link'
          className='border-none bg-dark-3 focus-visible:ring-0 focus-visible:ring-offset-0'
          onChange={(e) => setValues({ ...values, link: e.target.value })}
        />
      </MeetingModal>
    </section>
  );
};

export default MeetingTypeList;
