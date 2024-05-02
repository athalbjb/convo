import StreamVideoProvider from '@/providers/stream-client-provider';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Convo',
  description: 'Video calling app',
  icons: {
    icon: '/logo.svg',
  },
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <StreamVideoProvider>{children}</StreamVideoProvider>
    </main>
  );
};

export default RootLayout;
