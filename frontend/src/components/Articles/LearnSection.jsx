import React from 'react';

const LearnSection = () => {
    const items = [
      {
        id: 1,
        title: "The Healing Power of Basil",
        description: "Discover how basil has been used in traditional medicine and culinary dishes worldwide.",
        image: "https://img.freepik.com/free-photo/fresh-green-leafs-basil-latin-name-ocimum-basilicum_181624-40506.jpg?t=st=1737024939~exp=1737028539~hmac=7e61d4317c28ecab301f77fa882407eb31bf7ab01d0b82669e6fb445108aaa8e&w=900",
        categories: ["Herb", "Culinary", "Medicinal"],
      },
      {
        id: 2,
        title: "Cinnamon: A Spice for All Seasons",
        description: "Learn about the versatile uses of cinnamon, from sweet treats to health remedies.",
        image: "https://img.freepik.com/free-photo/many-cinnamon-sticks-white-surface_114579-32424.jpg?t=st=1736947209~exp=1736950809~hmac=ba42d0bb494024d12dc187c8e91ad6f5cca01d99c52c3c4e8ac9b1187b2f2085&w=900",
        categories: ["Spice", "Culinary"],
      },
    ];
  
    return (
        <section className="bg-white py-12">
          <div className="container mx-auto px-4 max-w-screen-xl">
            <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">Learn About Herbs & Spices</h2>
            <div className="space-y-8">
              {items.map((item) => (
                <div key={item.id} className="flex flex-col lg:flex-row items-center border-2 bg-white shadow-lg rounded-lg overflow-hidden">
                  {/* Image Section */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full lg:w-1/3 h-60 object-cover"
                  />
    
                  {/* Text Section */}
                  <div className="p-6 lg:w-2/3 flex flex-col">
                   
                    {/* Title */}
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">{item.title}</h3>
                     {/* Category Tags */}
                     <div className="flex flex-wrap gap-2 mb-2">
                      {item.categories.map((category, index) => (
                        <span
                          key={index}
                          className="text-sm font-medium text-green-700 bg-green-100 px-3 py-1 rounded-full"
                        >
                          {category}
                        </span>
                      ))}
                    </div>
                    {/* Description */}
                    <p className="text-gray-600 mb-4">{item.description}</p>
                    {/* Learn More Link */}
                    <a
                      href="/"
                      className="text-green-600 hover:text-green-800 font-medium"
                    >
                      Learn More →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      );
  };
  
  export default LearnSection;
  