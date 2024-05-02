import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';
import React from 'react';

interface HomeCardProps {
  className: string;
  icon: LucideIcon;
  title: string;
  description: string;
  handleClick: () => void;
}

const HomeCard = ({
  className,
  icon,
  title,
  description,
  handleClick,
}: HomeCardProps) => {
  const Icon = icon;
  return (
    <div
      className={cn(
        'flex min-h-[260px] w-full cursor-pointer flex-col justify-between rounded-[20px] px-4 py-6 xl:max-w-[270px]',
        className
      )}
      onClick={handleClick}
    >
      <div className='flex-center glassmorphism size-12 rounded-[10px]'>
        <Icon className='h-7 w-7' />
      </div>
      <div className='flex flex-col gap-2'>
        <h3 className='scroll-m-20 text-2xl font-bold tracking-tight'>
          {title}
        </h3>
        <p className='text-lg font-normal'>{description}</p>
      </div>
    </div>
  );
};

export default HomeCard;
