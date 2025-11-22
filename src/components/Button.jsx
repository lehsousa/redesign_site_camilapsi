import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyles = "px-6 py-3 rounded-full font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-primary text-secondary hover:bg-opacity-90 focus:ring-primary shadow-lg hover:shadow-xl",
    secondary: "bg-secondary text-white hover:bg-opacity-90 focus:ring-secondary shadow-lg hover:shadow-xl",
    outline: "border-2 border-secondary text-secondary hover:bg-secondary hover:text-white focus:ring-secondary",
    ghost: "text-secondary hover:bg-gray-100 focus:ring-gray-200",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;
