import React, { Suspense, useRef, useState } from 'react';
import CategoryBox from '../../Pages/CategoryBox/CategoryBox';

const SubscriptionBoxes = () => {
  const [showAll, setShowAll] = useState(false);
  const boxRef = useRef(null); // Reference for scrolling

  const handleToggle = () => {
    setShowAll(!showAll);

    // Scroll to the category section smoothly
    setTimeout(() => {
      boxRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100); // Small delay to allow rendering
  };

  return (
    <div>
      <div className='text-center mx-auto mt-10 space-y-3 p-5'>
        <h1 className='text-4xl font-bold text-black'>Our Subscription Boxes</h1>
        <p className='text-gray-600'>
          Discover our curated subscription boxes that bring joy and excitement to your doorstep
          every <br /> month. From beauty essentials to smart home gadgets, we have something for everyone.
        </p>
      </div>

      {/* subscription boxes */}
      <div ref={boxRef}>
        <Suspense fallback={<span className="loading loading-spinner text-error"></span>}>
          <CategoryBox showAll={showAll} />
        </Suspense>
      </div>

      {/* toggle view button */}
      <div className='mt-4 text-center mx-auto'>
        <button className='btn btn-primary' onClick={handleToggle}>
          {showAll ? 'Show Less' : 'View All Subscriptions'}
        </button>
      </div>
    </div>
  );
};

export default SubscriptionBoxes;
