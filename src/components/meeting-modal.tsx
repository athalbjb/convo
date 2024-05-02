import { LucideIcon } from 'lucide-react';
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';

interface MeetingModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  className?: string;
  children?: React.ReactNode;
  handleClick?: () => void;
  buttonText?: string;
  buttonIcon?: LucideIcon;
  icon?: LucideIcon;
}

const MeetingModal = ({
  isOpen,
  onClose,
  className,
  title,
  buttonText,
  children,
  handleClick,
  icon,
  buttonIcon,
}: MeetingModalProps) => {
  const Icon = icon;
  const ButtonIcon = buttonIcon;
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className='flex w-full max-w-[520px] flex-col gap-6 border-none bg-dark-1 px-6 py-9 text-white'>
        <div className='flex flex-col gap-6'>
          {Icon && (
            <div className='flex justify-center'>
              <Icon className='h-16 w-16' />
            </div>
          )}
          <h1 className={cn('text-3xl font-bold leading-[42px]', className)}>
            {title}
          </h1>
          {children}
          <Button
            className='bg-blue-1 focus-visible:ring-0 focus-visible:ring-offset-0'
            onClick={handleClick}
          >
            {ButtonIcon && <ButtonIcon className='h-4 w-4' />} &nbsp;
            {buttonText || 'Schedule Meeting'}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MeetingModal;
