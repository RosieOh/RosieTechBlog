import { useEffect, useState } from 'react';

export default function SplashScreen() {
  const [hide, setHide] = useState(false);
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // 첫 방문 체크
    const hasVisited = localStorage.getItem('hasVisited');
    if (hasVisited) {
      setShowSplash(false);
      return;
    }

    // 첫 방문이면 스플래시 보여주고 방문 기록 저장
    localStorage.setItem('hasVisited', 'true');
    const timer = setTimeout(() => setHide(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!showSplash) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-green-200 via-white to-green-100 dark:from-[#222] dark:via-[#111] dark:to-[#333] transition-all duration-1000 ${
        hide ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="flex flex-col items-center gap-4 animate-fadeIn">
        <span className="text-4xl sm:text-6xl font-extrabold text-green-600 dark:text-green-400 drop-shadow-lg tracking-tight">
          Rosie&apos;s Tech Blog
        </span>
        <span className="text-base sm:text-lg text-gray-700 dark:text-gray-300 font-mono animate-pulse">
          오늘을 새롭게, 내일을 이롭게
        </span>
      </div>
    </div>
  );
}
