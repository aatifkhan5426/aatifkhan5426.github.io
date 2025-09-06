import { useEffect, useState } from 'react';
import BlogCard from '../components/BlogCard';
import blogData from '../data/blogData.json';

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setPosts(blogData);
  }, []);

  return (
    <section className="min-h-screen bg-gray-100 dark:bg-gray-900 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Latest Blog Posts
        </h2>

        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
