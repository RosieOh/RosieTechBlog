import Link from 'next/link';

interface BlogPostProps {
  date: string;
  title: string;
  des: string;
  slug: string;
}

const DateDisplay = ({ date }: { date: string }) => (
  <div className="font-medium text-xs transition-colors duration-300 text-gray-500 dark:text-gray-300 group-hover:text-green-400">
    {date}
  </div>
);

const TitleDisplay = ({ title }: { title: string }) => (
  <div className="font-extrabold text-xl sm:text-2xl mt-2 transition-colors duration-300 text-black dark:text-white group-hover:text-green-500 dark:group-hover:text-green-400">
    {title}
  </div>
);

const DescriptionDisplay = ({ des }: { des: string }) => (
  <div className="font-medium text-lg transition-colors duration-300 text-gray-600 dark:text-gray-400 sm:text-xl mt-1 group-hover:text-gray-900 dark:group-hover:text-gray-200">
    {des}
  </div>
);

const BlogPost = ({ date, title, des, slug }: BlogPostProps) => {
  return (
    <Link href={`/blog/post/${slug}`} passHref className="card w-full my-7 p-6 block">
      <DateDisplay date={date} />
      <TitleDisplay title={title} />
      <DescriptionDisplay des={des} />
    </Link>
  );
};

export default BlogPost;
