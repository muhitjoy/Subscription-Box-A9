import React from 'react';
import { FaCalendarAlt, FaUser } from 'react-icons/fa';

const DetailsBlogs = ({data}) => {
    console.log(data);
    
    return (
        <div>
            <div className="bg-blue-600 px-4 py-12 md:px-12 space-y-3 text-center md:text-left mt-20">
              <h1 className="text-2xl sm:text-3xl md:text-5xl text-white font-bold leading-tight">
               Subscription Box Blog
             </h1>
            <p className="text-white text-base sm:text-lg md:text-xl leading-relaxed">
             Discover the latest trends, tips, and insights about subscription boxes and <br className="hidden sm:block" />
             curated experiences.
           </p>
        </div>

        <h2 className='text-center pt-10 font-bold text-2xl md:text-3xl text-purple-700'>All Subscription Blogs ({data.length})</h2>

        {/* blogs container */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6 p-5 gap-5'>
            {
                data && data.map((blog, index)=>(
                    <div key={index} className=' '>
                         <div className=" max-w-sm md:max-w-md lg:max-w-lg mx-auto bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative">
             <img
                 src={blog.image}
                 alt="Beauty Box"
                 className="w-[500px] h-72  object-cover hover:scale-105 transition-transform duration-300"
            />
                <span className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-3 py-1 rounded-full shadow">
              {blog.name}
                </span>
              </div>
            <div className="p-4 space-y-2">
                <h2 className="text-xl font-bold text-gray-800">
              {blog.description}
            </h2>
            <div className="flex items-center text-sm text-gray-500 gap-4">
             <div className="flex items-center gap-1">
             <FaCalendarAlt />
             <span>{blog.date}</span>
             </div>
             <div className="flex items-center gap-1">
            <FaUser />
            <span>{blog.username}</span>
                  </div>
             </div>
             <p className="text-gray-600 font-semibold text-[16px]">
            {blog.singleDescription}
             </p>
             <a href="" className="text-blue-600 hover:underline font-medium">
          Read More &rarr;
                </a>
             </div>
                </div>
                    </div>


                ))
            }
        </div>
        </div>
    );
};

export default DetailsBlogs;