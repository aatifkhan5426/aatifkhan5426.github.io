import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const BlogCard = ({ post }) => {
  return (
    <motion.div
      className="rounded-xl overflow-hidden shadow-md dark:shadow-lg bg-white dark:bg-gray-800 hover:shadow-xl transition duration-300"
      whileHover={{ y: -6, scale: 1.02 }}
    >
      <img
        src={post.image}
        alt={post.title}
        className="h-48 w-full object-cover"
      />
      <div className="p-5">
        <p className="text-sm text-primary font-semibold mb-1">{new Date(post.date).toDateString()}</p>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{post.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">{post.excerpt}</p>
        <Link
          to={post.slug}
          className="inline-block text-sm text-primary hover:underline font-medium transition"
        >
          Read More →
        </Link>
      </div>
    </motion.div>
  );
};

export default BlogCard;
