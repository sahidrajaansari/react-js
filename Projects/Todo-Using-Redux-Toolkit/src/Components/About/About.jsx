import React from 'react';
import { FaFontAwesome } from 'react-icons/fa';

const About = () => {
  return (
    <div className="mx-auto p-4 bg-white dark:bg-gray-800 h-[80vh] w-[100%]">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 text-center">About</h1>
      <p className="text-gray-900 dark:text-gray-100 text-center">
        This is a simple todo application built with React and Tailwind CSS. It allows you to add, edit, and delete tasks.
      </p>
      <div className="flex justify-center mt-4">
        <FaFontAwesome className="fab fa-react text-blue-500 text-4xl mx-2"/>
        <FaFontAwesome className="fab fa-js-square text-yellow-500 text-4xl mx-2"/>
        <FaFontAwesome className="fab fa-tailwind text-blue-500 text-4xl mx-2"/>
      </div>
    </div>
  );
};

export default About;
