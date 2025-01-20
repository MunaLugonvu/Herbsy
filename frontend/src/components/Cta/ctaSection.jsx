import React from 'react';

const CTASection = () => {
    return (
      <section className="bg-green-700  w-full py-12">
        <div className="container mx-auto px-4 max-w-screen-lg text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">Stay Updated with Herbsy!</h2>
          <p className="text-lg text-gray-100 mb-6">
            Be the first to know about new blogs, products, and exciting herb & spice insights. Subscribe now!
          </p>
          <form className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full sm:w-2/3 px-4 py-3 text-gray-700 bg-white rounded-lg focus:ring-2 focus:ring-green-300 focus:outline-none"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 bg-white text-green-600 font-semibold rounded-lg hover:bg-gray-100 focus:ring-2 focus:ring-green-300 focus:outline-none"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    );
  };
  
  export default CTASection;
  