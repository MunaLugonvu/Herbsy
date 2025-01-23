import React from 'react';


export const products = [
  {
    id: 1,
    name: 'Basil',
    description: 'A fragrant herb often used in Italian cuisine. Great for boosting immunity.',
    image: 'https://img.freepik.com/free-photo/dried-purple-flowers-wooden-bowl_114579-84691.jpg',
    categories: ['Herb', 'Culinary', 'Medicinal'],
    price: 5000
  },
  {
    id: 2,
    name: 'Turmeric',
    description: 'A spice with powerful anti-inflammatory properties, used in many Asian dishes.',
    image: 'https://img.freepik.com/premium-photo/aromatic-turmeric-root-black-wooden-rustic-background_1347891-3573.jpg?w=900',
    categories: ['Spice', 'Culinary', 'Medicinal'],
    price: 70000
  },
  {
    id: 3,
    name: 'Rosemary',
    description: 'An aromatic herb known for enhancing memory and focus.',
    image: 'https://img.freepik.com/premium-photo/rosemary-basket-white-wall_55883-10174.jpg?w=996',
    categories: ['Herb', 'Culinary', 'Medicinal'],
    price:10000
  },
  {
    id: 4,
    name: 'Cinnamon',
    description: 'A warm spice commonly used in baking and known to help regulate blood sugar.',
    image: 'https://img.freepik.com/free-photo/many-cinnamon-sticks-white-surface_114579-32424.jpg?t=st=1736947209~exp=1736950809~hmac=ba42d0bb494024d12dc187c8e91ad6f5cca01d99c52c3c4e8ac9b1187b2f2085&w=900',
    categories: ['Spice', 'Culinary'],
  },
  {
    id: 5,
    name: 'Mint',
    description: 'Cool and refreshing herb.',
    image: 'https://img.freepik.com/free-photo/fresh-mint-leaves-isolated-white_144627-11355.jpg',
    categories: ['Herb', 'Culinary', 'Medicinal'],
    price: 5000
  },
  {
    id: 6,
    name: 'Ginger',
    description: 'A root spice with many medicinal benefits.',
    image: 'https://img.freepik.com/free-photo/fresh-ginger-root-white-background_130865-1698.jpg',
    categories: ['Spice', 'Medicinal'],
    price: 3000
  },
];

const FeaturedProducts = () => {
  return (
    <section className="bg-white py-8">
      <div className="container mx-auto px-4 max-w-screen-xl">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.slice(0, 4).map((product) => (
            <div key={product.id} className="border rounded-lg p-4 shadow-md flex flex-col h-full">
              <img src={product.image} alt={product.name} className="w-full aspect-video object-cover rounded-md mb-4" />
              <h3 className="text-xl font-bold mb-2">{product.name}</h3>
              <p className="text-gray-700 mb-4 flex-grow">{product.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {product.categories.map((category, index) => (
                  <span
                    key={index}
                    className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded"
                  >
                    {category}
                  </span>
                ))}
              </div>
              <button className="bg-green-700 text-white px-4 py-2 rounded-md hover:bg-green-800 self-start">Buy Now</button>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <a
            href="/shop"
            className="inline-block bg-green-700 text-white px-6 py-3 rounded-lg  font-medium hover:bg-green-800"
          >
            Go to Shop to See More
          </a>
        </div>
      </div>
    </section>
  );
};


export default FeaturedProducts;
