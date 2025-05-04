import { nav } from '@/data/nav';
import Link from 'next/link';

interface NavProps {
  type: 'toggle' | 'normal';
  onClick?: () => void;
}

export default function Nav({ type, onClick }: NavProps) {
  const defaultStyleString =
    'group relative dark:text-white dark:hover:text-green-400 text-center transition-all duration-300 hover:text-green-500 hover:scale-110 hover:drop-shadow-lg';

  const underlineStyle =
    'absolute bottom-0 left-0 w-0 h-0.5 bg-green-500 transition-all duration-300 group-hover:w-full';

  return (
    <>
      {nav.map((item) => {
        const { title, location } = item;
        return (
          <Link
            href={location}
            key={title}
            className={
              type === 'normal'
                ? defaultStyleString + ' mx-4'
                : defaultStyleString + ' text-lg py-4 block'
            }
            onClick={onClick || undefined}
          >
            {title}
            <span className={underlineStyle} />
          </Link>
        );
      })}
    </>
  );
}
