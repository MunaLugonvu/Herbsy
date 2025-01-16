import React from 'react';
import FeaturedProducts from '../components/Products/featuredProducts';
import FeaturedArticles from '../components/Articles/featuredArticles';
import LearnSection from '../components/Articles/LearnSection';

const Home = () => {
  return (
    <>
    <section className="bg-white dark:bg-gray-900  border-b-2">
    <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 ">
        <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Welcome to Herbsy</h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">  
                Your one-stop destination for discovering the wonders of herbs and spices! Explore their origins, uses in cooking, and natural health benefits. 
                From adding flavor to your dishes to boosting your well-being, Herbsy has everything you need. 
                Shop for fresh herbs and spices, and visit our blog for recipes, tips, and wellness insights.</p>
            <a href="/" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 dark:focus:ring-green-900">
                Go to Shop
                <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
            <a href="/" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                Herbsy Blog
            </a> 
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src="https://img.freepik.com/free-photo/jars-with-natural-herbs-table_23-2148550476.jpg?t=st=1736945499~exp=1736949099~hmac=d3362e91f4b5aa3ca93686e0e6beb55a9bcbde73201551d58dc12fcb4d2a4679&w=900" alt="mockup"/>
        </div>                
    </div>
</section>
<FeaturedProducts />
<FeaturedArticles/>
<LearnSection/>
    </>
  );
};

export default Home;


