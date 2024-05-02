'use client';

import { sidebarLinks } from '@/constants';
import { cn } from '@/lib/utils';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <section className='w-full max-w-[264px]'>
      <Sheet>
        <SheetTrigger asChild>
          <Menu className='h-8 w-8 text-white sm:hidden' />
        </SheetTrigger>
        <SheetContent
          side={'left'}
          className='border-none bg-dark-1 text-white'
        >
          <Link href='/' className='flex items-center gap-1'>
            <Image
              src='/logo.svg'
              alt='logo'
              width={32}
              height={32}
              className='max-sm:size-10'
            />
            <p className='text-xl font-extrabold'>Convo</p>
          </Link>
          <div className='flex h-[calc(100vh-72px)] flex-col justify-between overflow-y-auto'>
            <SheetClose asChild>
              <section className='flex h-full flex-col gap-6 pt-16'>
                {sidebarLinks.map((link) => {
                  const LinkIcon = link.icon;
                  const isActive = pathname === link.route;
                  return (
                    <SheetClose asChild key={link.route}>
                      <Link
                        key={link.label}
                        href={link.route}
                        className={cn(
                          'flex items-center justify-start gap-4 rounded-lg p-4',
                          { 'bg-blue-1': isActive }
                        )}
                      >
                        <LinkIcon className='w-6' />
                        <p className='text-lg font-semibold'>{link.label}</p>
                      </Link>
                    </SheetClose>
                  );
                })}
              </section>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
