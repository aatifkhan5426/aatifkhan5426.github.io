// src/components/Testimonials.jsx

const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Product Manager at FintechX',
      feedback:
        'Working with you was a pleasure. You delivered everything on time and the quality was top-notch!',
    },
    {
      id: 2,
      name: 'James Lee',
      role: 'CTO at DevSolutions',
      feedback:
        'Your professionalism and attention to detail made a huge difference. Highly recommend your services.',
    },
    {
      id: 3,
      name: 'Priya Kumar',
      role: 'Founder at EduNext',
      feedback:
        'The final product exceeded our expectations. You truly understood our vision and brought it to life.',
    },
  ];
  
  const Testimonials = () => {
    return (
      <section className="bg-gray-50 dark:bg-[#1a1625] py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Testimonials
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white dark:bg-[#2f2b3a] rounded-xl p-6 shadow-md hover:shadow-lg transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-8 h-8 text-primary mb-4"
                >
                  <path d="M7.17 6A4.17 4.17 0 0 0 3 10.17v2.09a4.17 4.17 0 0 0 4.17 4.17A4.17 4.17 0 0 0 11.33 12.2V10.1A4.17 4.17 0 0 0 7.17 6Zm9.66 0A4.17 4.17 0 0 0 12.66 10.17v2.09a4.17 4.17 0 0 0 4.17 4.17 4.17 4.17 0 0 0 4.17-4.17V10.1A4.17 4.17 0 0 0 16.83 6Z" />
                </svg>
                <p className="text-gray-700 dark:text-gray-200 italic mb-4">
                  “{testimonial.feedback}”
                </p>
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  {testimonial.name}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {testimonial.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Testimonials;
  