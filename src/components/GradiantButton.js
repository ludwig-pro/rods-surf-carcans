import React from 'react';

const GradiantButton = ({ text = '', href = '#' }) => {
  return (
    <a
      href={href}
      className="inline-flex px-4 py-2 border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r  to-blue-500 from-teal-500 hover:to-blue-700 hover:from-teal-700 hover:text-white"
    >
      {text}
    </a>
  );
};

export default GradiantButton;
