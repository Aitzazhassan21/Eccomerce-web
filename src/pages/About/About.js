// import React from 'react';
// import { motion } from 'framer-motion';

// const About = () => {
//   return (
//     <motion.div 
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 1.5 }}
//       className="flex flex-col lg:flex-row bg-gray-100 text-gray-800 py-12 px-4"
//     >
//           <motion.img 
//         src="https://media.licdn.com/dms/image/C4E12AQGFPMDClkuWSA/article-cover_image-shrink_600_2000/0/1576605600080?e=2147483647&amp;v=beta&amp;t=5Y5NU8DtNEuL58alRA8bPqify9luD8FTE3WMkkj1fPg"
//         initial={{ x: -200, opacity: 0 }}
//         animate={{ x: 0, opacity: 1 }}
//         transition={{ type: 'spring', stiffness: 100 }}
//         className="lg:w-1/2 h-auto rounded-lg mb-8 lg:mb-0 lg:mr-8"
//       />
//       <div className="max-w-4xl mx-auto">
//         <motion.h2 
//           initial={{ x: -200, opacity: 0 }}
//           animate={{ x: 0, opacity: 1 }}
//           transition={{ type: 'spring', stiffness: 100 }}
//           className="text-3xl font-bold mb-4"
//         >
//         <span>ABOUT US</span><br/>
//           Discover the Best Shopping Experience
//         </motion.h2>
//         <motion.p 
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.5 }}
//           className="mb-4"
//         >
//           Welcome to our e-commerce platform where you can find everything you need for a seamless shopping experience. From the latest gadgets to trendy fashion items, we've got you covered.
//         </motion.p>
//         <motion.p 
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 1 }}
//           className="mb-8"
//         >
//           Our mission is to provide high-quality products at affordable prices, delivered right to your doorstep. Browse through our extensive collection and start shopping today!
//         </motion.p>
//         <motion.div 
//           className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white  bg-black hover:bg-black"
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//         >
//           <a href="/contact" className="flex items-center">
//             Contact Us
        
//           </a>
//         </motion.div>
//       </div>
//     </motion.div>
//   );
// };

// export default About;

import React from 'react';
import { motion } from 'framer-motion';
import { FiShoppingBag, FiTruck, FiShield, FiHeadphones } from 'react-icons/fi';
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";

const About = () => {
  const features = [
    {
      icon: <FiShoppingBag className="text-3xl" />,
      title: "Wide Selection",
      description: "Thousands of products across multiple categories to choose from"
    },
    {
      icon: <FiTruck className="text-3xl" />,
      title: "Fast Delivery",
      description: "Quick and reliable shipping to your doorstep"
    },
    {
      icon: <FiShield className="text-3xl" />,
      title: "Secure Payments",
      description: "Safe and secure payment methods for your peace of mind"
    },
    {
      icon: <FiHeadphones className="text-3xl" />,
      title: "24/7 Support",
      description: "Our customer support team is always here to help"
    }
  ];

  return (
    <div className="max-w-container mx-auto px-4 py-10">
      <Breadcrumbs title="About" />
      
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col lg:flex-row bg-white rounded-2xl shadow-lg overflow-hidden mb-16"
      >
        <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl font-bold mb-6 text-primeColor"
          >
            Welcome to comming
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg text-gray-600 mb-6 leading-relaxed"
          >
            Your premier destination for quality products and exceptional shopping experiences. We're passionate about bringing you the best products at competitive prices.
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-gray-600 mb-8 leading-relaxed"
          >
            Our mission is to provide high-quality products at affordable prices, delivered right to your doorstep. Browse through our extensive collection and start shopping today!
          </motion.p>
          <motion.a
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-primeColor text-white font-semibold rounded-lg hover:bg-black transition-colors duration-200 w-fit"
          >
            Contact Us
          </motion.a>
        </div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="lg:w-1/2"
        >
          <img
            src="https://images.unsplash.com/photo-1554232456-8727aae0cfa4?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="w-3/5 h-3/5 object-cover min-h-[200px]  ms-28 mt-28 round-20"
            alt="About "
          />
        </motion.div>
      </motion.div>

      {/* Features Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <h3 className="text-3xl font-bold text-center mb-12">Why Choose Us?</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 text-center"
            >
              <div className="bg-primeColor w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                {feature.icon}
              </div>
              <h4 className="font-bold text-xl mb-2">{feature.title}</h4>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Stats Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-16 bg-primeColor rounded-2xl p-8 lg:p-12 text-white"
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold mb-2">10K+</div>
            <div className="text-gray-200">Happy Customers</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">5K+</div>
            <div className="text-gray-200">Products</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">50+</div>
            <div className="text-gray-200">Categories</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">24/7</div>
            <div className="text-gray-200">Support</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
