import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';

const HeroSection = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  // المسار الكامل للصورة بناءً على اسم الريبو على GitHub
  const imagePath = '/dr-mohamed-abdelsaboor-portfolio1/images/doctor-new.jpg';

  return (
    <section className="py-10 sm:py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 lg:mb-6">
              Dr. Mohamed Abdelsaboor
            </h1>

            {/* الصورة تظهر فقط على شاشات صغيرة */}
            <div className="mt-4 mb-6 lg:hidden max-w-xs mx-auto rounded-xl overflow-hidden shadow-lg">
              <img
                src={imagePath}
                alt="Dr. Mohamed Abdelsaboor"
                className="object-cover w-full h-auto rounded-xl"
              />
            </div>

            <h2
              className={`text-xl md:text-2xl font-semibold mb-3 ${
                isDark ? 'text-primary-400' : 'text-primary-500'
              }`}
            >
              Pediatric Cardiology Consultant
            </h2>

            <p
              className={`mt-0 text-base md:text-lg ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}
            >
              Dedicated to excellence in pediatric cardiac care with over 15 years of experience
              at the Magdi Yacoub Heart Foundation. Specializing in congenital heart defects,
              advanced diagnostics, and innovative treatment approaches.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row sm:flex-wrap gap-4 justify-center lg:justify-start">
              <Link
                to="/about"
                className={`inline-flex items-center justify-center px-6 py-3 rounded-md text-white font-medium transition-colors w-full sm:w-auto ${
                  isDark
                    ? 'bg-primary-500 hover:bg-primary-600'
                    : 'bg-primary-500 hover:bg-primary-600'
                }`}
              >
                Learn More
                <ArrowRight size={18} className="ml-2" />
              </Link>

              <Link
                to="/contact"
                className={`inline-flex items-center justify-center px-6 py-3 rounded-md font-medium transition-colors w-full sm:w-auto ${
                  isDark
                    ? 'bg-gray-800 text-white hover:bg-gray-700'
                    : 'bg-white text-gray-900 border border-gray-300 hover:bg-gray-100'
                }`}
              >
                Contact Me
              </Link>
            </div>
          </motion.div>

          {/* الصورة تظهر فقط على شاشات كبيرة */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div
              className={`absolute inset-0 rounded-xl ${
                isDark
                  ? 'bg-gradient-to-tr from-primary-500/20 to-secondary-500/20'
                  : 'bg-gradient-to-tr from-primary-100 to-secondary-100'
              }`}
            />

            <div className="relative">
              <div className="rounded-xl overflow-hidden aspect-w-1 aspect-h-1 max-w-full">
                <img
                  src={imagePath}
                  alt="Dr. Mohamed Abdelsaboor"
                  className="object-cover w-full h-full rounded-xl"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
