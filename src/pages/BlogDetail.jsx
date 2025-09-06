import { useParams, Link } from 'react-router-dom';
import blogData from '../data/blogData.json';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiArrowLeft } from 'react-icons/fi'; // Feather icons


const BlogDetail = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const foundPost = blogData.find((p) => p.slug === `/blogs/${slug}`);
    setBlog(foundPost);

  }, [slug]);

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-[#121212] text-gray-700 dark:text-white">
        <p>Loading blog post...</p>
      </div>
    );
  }
  return (
    <motion.section
      className="min-h-screen px-6 py-16 dark:bg-[#121212] bg-white text-gray-800 dark:text-white"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-4xl mx-auto">
        <Link
          to="/blogs"
          className="flex items-center text-primary hover:underline mb-6"
        >
          <FiArrowLeft  className="w-4 h-4 mr-2" />
          Back to Blog
        </Link>

        <motion.img
          src={`.${blog.image}`}
          alt={blog.title}
          className="rounded-xl shadow-lg w-full h-auto max-h-[400px] object-cover mb-8"
          initial={{ opacity: 0.5 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        />

        <h1 className="text-3xl md:text-4xl font-bold mb-4">{blog.title}</h1>

        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
          By <span className="font-medium text-primary">{blog.author}</span> •{' '}
          {new Date(blog.date).toLocaleDateString()}
        </p>

        <div className="prose dark:prose-invert prose-lg max-w-none leading-relaxed text-justify">
          {blog.content.split('\n\n').map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default BlogDetail;