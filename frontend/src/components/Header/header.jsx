import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-green-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          <Link to="/">Herbsy</Link>
        </h1>
        <nav className="flex space-x-4">
          <Link to="/products" className="hover:text-gray-300">
            Shop
          </Link>
          <Link to="/about" className="hover:text-gray-300">
            Blog
          </Link>
          <Link to="/signin" className="hover:text-gray-300">
            Sign In
          </Link>
          <Link to="/signout" className="hover:text-gray-300">
            Sign Out
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
