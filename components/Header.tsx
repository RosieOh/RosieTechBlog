import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import Nav from './Nav';

type Theme = null | 'dark' | 'light';

export default function Header() {
  const headerRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLDivElement>(null);
  const [onToggle, setOnToggle] = useState<boolean>(false);
  const [theme, setTheme] = useState<Theme>(null);

  const handleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    window.localStorage.setItem('theme', newTheme);
    document.body.className = newTheme;
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      headerRef.current?.classList.add(
        'shadow-[0_5px_7px_0px_#ececec]',
        'backdrop-blur-sm',
        'bg-white/80',
        'dark:bg-[#111111]/80',
      );
      return;
    }
    headerRef.current?.classList.remove(
      'shadow-[0_5px_7px_0px_#ececec]',
      'backdrop-blur-sm',
      'bg-white/80',
      'dark:bg-[#111111]/80',
    );
  };

  const handleToggle = () => {
    if (onToggle) {
      toggleRef.current?.classList.add('hidden');
      toggleRef.current?.classList.remove('animate-fadeIn');
    } else {
      toggleRef.current?.classList.remove('hidden');
      toggleRef.current?.classList.add('animate-fadeIn');
    }
    setOnToggle((prev) => !prev);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    setTheme(document.body.className as Theme);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Rosie Oh</title>
        <meta property="og:title" content="Rosie's Tech Blog" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="오늘을 새롭게 내일을 이롭게 기록합니다." />
        <meta property="og:url" content="https://rosiesblog.vercel.app/" />
        <meta property="og:image" content="https://rosiesblog.vercel.app/images/title.svg" />
      </Head>
      <header
        ref={headerRef}
        className="sticky top-0 left-0 w-full z-10 h-20 font-mono transition-all duration-500 bg-white dark:bg-[#111111]"
      >
        <div className="text-black max-w-screen-md h-20 flex flex-nowrap items-center justify-between m-auto px-8">
          <Link href="/" className="group">
            {theme === 'dark' ? (
              <Image
                src="/images/title.svg"
                alt="profile"
                width={180}
                height={30}
                className="transition-transform duration-300 group-hover:scale-105"
              />
            ) : (
              <Image
                src="/images/title.svg"
                alt="Rosie Tech Note"
                width={180}
                height={30}
                className="transition-transform duration-300 group-hover:scale-105"
              />
            )}
          </Link>
          <div className="flex flex-nowrap gap-8 items-center">
            <button
              type="button"
              className="m-0 p-0 transition-transform duration-300 hover:scale-110 hover:rotate-12"
              onClick={handleTheme}
            >
              {theme === 'dark' ? (
                <Image src="/images/moon.svg" alt="dark mode" width={30} height={30} />
              ) : (
                <Image src="/images/sun.svg" alt="light mode" width={30} height={30} />
              )}
            </button>
            <button
              type="button"
              className="m-0 p-0 sm:hidden transition-transform duration-300 hover:scale-110"
              onClick={handleToggle}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-7 h-7 transition duration-500 stroke-black dark:stroke-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
            <div className="flex-nowrap items-center justify-center gap-5 text-center hidden sm:flex">
              <Nav type="normal" />
            </div>
          </div>
        </div>
        <div
          ref={toggleRef}
          className="w-full h-screen absolute top-20 left-0 bg-white/95 flex-col flex-nowrap p-5 flex hidden dark:bg-[#111111]/95 backdrop-blur-sm"
        >
          <Nav type="toggle" onClick={handleToggle} />
        </div>
      </header>
    </>
  );
}
