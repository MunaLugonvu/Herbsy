import React from 'react';

const FeaturedArticles = () => {
  
  const blogs = [
    {
      id: 1,
      title: '10 Must-Have Spices for Every Kitchen',
      excerpt: 'Discover the top 10 spices every home chef should have in their pantry.',
      image: 'https://img.freepik.com/free-photo/top-view-spices-chillies-black-background_23-2148211128.jpg?t=st=1737023892~exp=1737027492~hmac=3d998798f2a3dd253659066d3dccb6ce12e02ee84fd9fefb25109d2f6cea4759&w=900',
      link: '/blog/10-must-have-spices',
    },
    {
      id: 2,
      title: 'The Health Benefits of Herbs You Should Know',
      excerpt: 'Learn about the amazing health benefits of common herbs used in cooking.',
      image: 'https://img.freepik.com/free-photo/different-herbs-white-wooden-table-top-view_144627-30570.jpg?t=st=1737023794~exp=1737027394~hmac=d5db6e66dac8ea72f96e4fe24957261af535c55f1af1199baccb48c9541c1a85&w=740',
      link: '/blog/health-benefits-of-herbs',
    },
    {
      id: 3,
      title: 'Spice Blends to Elevate Your Cooking',
      excerpt: 'Take your dishes to the next level with these simple yet flavorful spice blends.',
      image: 'https://img.freepik.com/free-photo/top-view-heaps-spices-herbs-yellow-background_141793-7810.jpg?t=st=1737023717~exp=1737027317~hmac=a5473a4dc0e542eddeb50280a5cfb9b5804412a0980d1ba237f16f2d70f4ef80&w=900',
      link: '/blog/spice-blends',
    },
  ];

  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-screen-xl">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-8 text-center">Blog Highlights</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div key={blog.id} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full">
              {/* Image */}
              <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover aspect-video" />
  
              {/* Content */}
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-gray-900">{blog.title}</h3>
                <p className="text-gray-600 my-2 flex-grow">{blog.excerpt}</p>
  
                {/* Read More Button */}
                <a
                  href={blog.link}
                  className="text-green-600 hover:text-green-800 font-medium mt-auto"
                >
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedArticles;
