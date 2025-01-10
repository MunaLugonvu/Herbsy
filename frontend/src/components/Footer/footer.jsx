import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-green-800 text-white p-4 mt-8">
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
