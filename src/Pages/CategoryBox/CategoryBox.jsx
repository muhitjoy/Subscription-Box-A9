import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';

const CategoryBox = ({ showAll }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('/data.json')
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  const displayedCategories = showAll ? categories : categories.slice(0, 6);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-10 p-8">
      {displayedCategories.map((category) => (
        <div key={category.id} className="card bg-base-100 shadow-sm  hover:scale-105 transition-transform duration-300">
          <figure>
            <img className='w-full h-60 object-cover"
    src={category.banner}' src={category.banner} alt={category.name} />
          </figure>
          <div className="card-body">
            
            <h2 className="card-title">
              {category.name}
              <div className="badge badge-secondary">{category.frequency}</div>
            </h2>
            <h2 className='font-bold text-blue-500'>{category.tech_category}</h2>
            
            <div className="card-actions justify-between pt-5">
              <div className="text-2xl font-bold text-purple-600 items-center">${category.price}</div>
              <Link to={`/more-details/${category.id}`} className="btn btn-soft hover:bg-purple-400 hover:text-white">View More</Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryBox;
