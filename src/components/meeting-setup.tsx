'use client';

import {
  DeviceSettings,
  useCall,
  VideoPreview,
} from '@stream-io/video-react-sdk';
import { useEffect, useState } from 'react';
import { Checkbox } from './ui/checkbox';
import { Button } from './ui/button';

const MeetingSetup = ({
  setIsSetupComplete,
}: {
  setIsSetupComplete: (value: boolean) => void;
}) => {
  const [isMicCamToggledOn, setIsMicCamToggledOn] = useState(false);

  const call = useCall();

  if (!call) {
    throw new Error('useCall must be used with StreamCall component.');
  }
  useEffect(() => {
    if (isMicCamToggledOn) {
      call?.camera.disable();
      call?.microphone.disable();
    } else {
      call?.camera.enable();
      call?.microphone.enable();
    }
  }, [isMicCamToggledOn, call?.camera, call?.microphone]);
  return (
    <div className='flex h-screen w-full flex-col items-center justify-center gap-3 text-white'>
      <h1 className='text-2xl font-bold'>Setup</h1>
      <VideoPreview />
      <div className='flex h-16 items-center justify-center gap-3'>
        <Checkbox
          id='check1'
          checked={isMicCamToggledOn}
          onCheckedChange={() => {
            setIsMicCamToggledOn(!isMicCamToggledOn);
          }}
        />
        <label
          htmlFor='check1'
          className='flex items-center justify-center gap-2 font-medium'
        >
          Join with Mic and Camera off
        </label>
        <DeviceSettings />
      </div>
      <Button
        className='bg-green-500 px-4 py-2.5 '
        onClick={() => {
          call.join();
          setIsSetupComplete(true);
        }}
      >
        Join Meeting
      </Button>
    </div>
  );
};

export default MeetingSetup;
