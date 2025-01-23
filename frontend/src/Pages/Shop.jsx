import React, { useState } from 'react';
import { products } from '../components/Products/featuredProducts';

const Shop = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategories, setSelectedCategories] = useState([]);
  
    const handleCategoryChange = (category) => {
      setSelectedCategories((prev) =>
        prev.includes(category)
          ? prev.filter((c) => c !== category) // Remove category if already selected
          : [...prev, category] // Add category if not selected
      );
    };
  
    const filteredProducts = products.filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory =
        selectedCategories.length === 0 ||
        selectedCategories.some((cat) => product.categories.includes(cat)); // Ensure "categories" is plural
      return matchesSearch && matchesCategory;
    });
  
    return (
      <div className="container mx-auto p-4">
        {/* Search Bar */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-300 focus:outline-none"
          />
        </div>
  
        <div className="flex gap-8">
          {/* Filter Sidebar */}
          <aside className="w-1/4 bg-white p-4 shadow-md rounded-lg">
            <h3 className="text-lg font-semibold mb-4">Filter by Category</h3>
            <div className="space-y-2">
              {['Herb', 'Spice', 'Culinary', 'Medicinal'].map((category) => (
                <div key={category} className="flex items-center">
                  <input
                    type="checkbox"
                    id={category}
                    value={category}
                    onChange={() => handleCategoryChange(category)}
                    className="mr-2"
                  />
                  <label htmlFor={category} className="text-gray-700">{category}</label>
                </div>
              ))}
            </div>
          </aside>
  
          {/* Products Grid */}
           {/* Products Grid */}
        <main className="w-3/4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-md p-4 flex flex-col h-full"
              >
                {/* Product Image */}
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
                {/* Product Details */}
                <h4 className="text-lg font-bold mb-2">{product.name}</h4>
                <p className="text-gray-600 mb-2 flex-grow">{product.description}</p>
                <div className="mt-2">
                  <span className="text-sm text-gray-500">
                    {product.categories.join(', ')}
                  </span>
                </div>
                {/* Product Price */}
                <p className="text-green-600 font-bold mt-2">{product.price} UGX</p>
                <button
                  className="mt-4 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 focus:ring-2 focus:ring-green-300"
                >
                  Buy Now
                </button>
              </div>
            ))}
          </div>
          {filteredProducts.length === 0 && (
            <p className="text-center text-gray-500 mt-4">No products found.</p>
          )}
        </main>
        </div>
      </div>
    );
  };
  
  export default Shop;