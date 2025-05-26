import React, { useEffect, useState } from 'react';

const SubscribersReview = () => {
  const [reviews, setReviews] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetch('/data.json')
      .then(res => res.json())
      .then(data => setReviews(data));
  }, []);

  const visibleReviews = showAll ? reviews : reviews.slice(0, 6);

  return (
    <div className='mt-10 p-8 mx-auto '>
      <div className='text-center space-y-3 '>
        <h1 className='text-4xl font-bold'>What Our Subscribers Say</h1>
        <p className='text-gray-500'>
          Join thousands of satisfied customers who have transformed their lifestyles with our subscription boxes.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 ">
        {visibleReviews.map(review => (
          <div key={review.id} className="max-w-md bg-white rounded-xl shadow-md p-6 space-y-4">
            <div className="text-blue-500 text-5xl">❝</div>
            <p className="text-gray-700 text-lg italic">{review.description}</p>
            <hr className="border-gray-200" />
            <div className="flex items-center gap-4">
              <img
                src={review.thumbnail}
                alt={review.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h3 className="font-semibold text-gray-900">{review.author_name}</h3>
                <p className="text-sm text-gray-500">{review.name} subscriber</p>
                <div className="flex mt-1 text-yellow-500">
                  <div className="rating rating-xs">
                    <input type="radio" name={`rating-${review.id}`} className="mask mask-star-2 bg-orange-400" aria-label="1 star" />
                    <input type="radio" name={`rating-${review.id}`} className="mask mask-star-2 bg-orange-400" aria-label="2 star" defaultChecked />
                    <input type="radio" name={`rating-${review.id}`} className="mask mask-star-2 bg-orange-400" aria-label="3 star" />
                    <input type="radio" name={`rating-${review.id}`} className="mask mask-star-2 bg-orange-400" aria-label="4 star" />
                    <input type="radio" name={`rating-${review.id}`} className="mask mask-star-2 bg-orange-400" aria-label="5 star" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {reviews.length > 6 && (
        <div className='items-center text-center mx-auto pt-5'>
          {showAll ? (
            <button className='btn btn-secondary' onClick={() => setShowAll(false)}>
              View Less
            </button>
          ) : (
            <button className='btn btn-primary' onClick={() => setShowAll(true)}>
              View All Reviews ({reviews.length})
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default SubscribersReview;
