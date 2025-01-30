import Link from 'next/link';

interface BlogPostProps {
  date: string;
  title: string;
  des: string;
  slug: string;
}

const DateDisplay = ({ date }: { date: string }) => (
  <div className="font-medium text-xs transition text-gray-500 dark:text-gray-300">{date}</div>
);

const TitleDisplay = ({ title }: { title: string }) => (
  <div className="font-extrabold text-xl sm:text-2xl mt-2 transition text-black dark:text-white hover:text-green-500 dark:hover:text-green-500">
    {title}
  </div>
);

const DescriptionDisplay = ({ des }: { des: string }) => (
  <div className="font-medium text-lg transition text-gray-600 dark:text-gray-400 sm:text-xl mt-1">
    {des}
  </div>
);

const BlogPost = ({ date, title, des, slug }: BlogPostProps) => {
  return (
    <Link href={`/blog/post/${slug}`} passHref className="w-full my-7">
      <DateDisplay date={date} />
      <TitleDisplay title={title} />
      <DescriptionDisplay des={des} />
    </Link>
  );
};

export default BlogPost;
