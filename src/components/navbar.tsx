import Image from 'next/image';
import Link from 'next/link';
import MobileNav from './mobile-nav';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';

const Navbar = () => {
  return (
    <nav className='flex-between fixed z-50 w-full bg-dark-1 px-6 py-4 shadow-lg shadow-dark-2 lg:px-10'>
      <Link href='/' className='flex items-center gap-1'>
        <Image
          src='/logo.svg'
          alt='logo'
          width={32}
          height={32}
          className='max-sm:size-10'
        />
        <p className='text-xl font-extrabold text-white max-sm:hidden'>Convo</p>
      </Link>
      <div className='flex-between gap-5'>
        <SignedIn>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
