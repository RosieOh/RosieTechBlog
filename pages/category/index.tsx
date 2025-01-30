import CategoryList from '@/components/categoryList/CategoryList';
import PostList from '@/components/PostList';
import { Post, allPosts } from 'contentlayer/generated';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import { useState } from 'react';

export const getStaticProps: GetStaticProps = async () => {
  const posts = allPosts.sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)));

  return {
    props: {
      posts,
    },
  };
};

export default function Category({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  const [sellect, setSellect] = useState<string>('');

  return (
    <>
      <Head>
        <meta property="og:title" content="Rosie's Tech Blog" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="오늘을 새롭게 내일을 이롭게 기록합니다." />
        <meta property="og:url" content="https://rosiesblog.vercel.app/" />
        <meta property="og:image" content="https://rosiesblog.vercel.app/images/title.svg" />
      </Head>
      <section className="mt-12 mb-8 flex flex-col gap-12">
        <h1 className="font-bold text-2xl sm:text-4xl font-mono">🗂 Category</h1>
        <CategoryList sellect={sellect} setSellect={setSellect} />
      </section>
      {sellect === '' ? (
        <PostList posts={posts} />
      ) : (
        <PostList posts={(posts as Post[]).filter((post) => post.category === sellect)} />
      )}
    </>
  );
}
