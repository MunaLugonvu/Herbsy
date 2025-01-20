import React from 'react';

const Footer = () => {
  return (
    <footer className=" bg-gray-100 text-sm h-28  flex items-center  text-gray-800 p-4 mt-1">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Herbsy. All rights reserved.</p>
        <p>
          Follow us on{' '}
          <a href="/" className="text-green-400 hover:underline">
            Twitter
          </a>{' '}
          and{' '}
          <a href="/" className="text-green-400 hover:underline">
            Instagram
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
