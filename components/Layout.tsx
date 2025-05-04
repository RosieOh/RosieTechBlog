import { ReactNode } from 'react';
import Footer from './Footer';
import Header from './Header';
import SplashScreen from './SplashScreen';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout(props: LayoutProps) {
  return (
    <>
      <SplashScreen />
      <Header />
      <main className="transition duration-500 min-h-screen bg-white dark:bg-[#111111] text-black dark:text-white">
        <div className="max-w-screen-md flex flex-col px-10 m-auto">{props.children}</div>
      </main>
      <Footer />
    </>
  );
}
