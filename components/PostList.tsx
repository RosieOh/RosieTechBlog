import BlogPost from '@/components/blogPost/BlogPost';
import { Post } from 'contentlayer/generated';

interface RecentPostsProps {
  posts: Post[];
}

export default function PostList({ posts }: RecentPostsProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {posts.map((post: Post) => (
        <BlogPost
          date={post.date}
          title={post.title}
          des={post.description}
          slug={post._raw.flattenedPath}
          key={post._id}
        />
      ))}
    </div>
  );
}
