import React from 'react';
import giftBox from "../../assets/gift-box-icon-free-vector.jpg";
import shippingCar from "../../assets/shipping.jpg";
import surpriseItem from "../../assets/image_5.webp";
import subscription from "../../assets/flexible.png";
const ChooseBox = () => {
    return (
       <div className='mt-10 bg-stone-100 w-full p-10'>
         <div className='text-center space-y-3'>
              <h1 className='text-4xl font-bold'>Why Choose Our Box</h1>
            <p className='text-gray-500'>Discover what makes our subscription boxes stand out from the rest</p>
        </div>
       <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 mt-10'>
          <div className="max-w-xs mx-auto bg-white rounded-xl shadow-md p-6 text-center space-y-4">
      <div className="flex justify-center">
        <div className="bg-blue-100 p-3 rounded-full">
         <img className='w-12 rounded-xl' src={giftBox} alt="" />
        </div>
      </div>
      <h2 className="text-xl font-bold text-gray-900">Curated Products</h2>
      <p className="text-gray-600 text-sm">
        Each box is carefully curated with premium items selected by our
        experts to match your preferences.
      </p>
    </div>
          <div className="max-w-xs mx-auto bg-white rounded-xl shadow-md p-6 text-center space-y-4">
      <div className="flex justify-center">
        <div className="bg-blue-100 p-3 rounded-full">
         <img className='w-14 rounded-xl' src={shippingCar} alt="" />
        </div>
      </div>
      <h2 className="text-xl font-bold text-gray-900">Free Shipping</h2>
      <p className="text-gray-600 text-sm">
       Enjoy free shipping on all subscription boxes within the continental United States.
      </p>
    </div>
          <div className="max-w-xs mx-auto bg-white rounded-xl shadow-md p-6 text-center space-y-4">
      <div className="flex justify-center">
        <div className="bg-blue-100 p-3 rounded-full">
         <img className='w-12 rounded-xl' src={surpriseItem} alt="" />
        </div>
      </div>
      <h2 className="text-xl font-bold text-gray-900">Surprise Items</h2>
      <p className="text-gray-600 text-sm">
       Every box includes a special surprise item that's not listed to make each delivery exciting.
      </p>
    </div>
          <div className="max-w-xs mx-auto bg-white rounded-xl shadow-md p-6 text-center space-y-4">
      <div className="flex justify-center">
        <div className="bg-blue-100 p-3 rounded-full">
         <img className='w-12 rounded-xl' src={subscription} alt="" />
        </div>
      </div>
      <h2 className="text-xl font-bold text-gray-900">Flexible Subscriptions</h2>
      <p className="text-gray-600 text-sm">
        Choose monthly, quarterly, or annual plans with the option to skip or cancel anytime.
      </p>
    </div>
       </div>
           <section className="bg-blue-600 text-white text-center py-12 px-4 rounded-lg mx-2 md:mx-16 my-8">
      <h2 className="text-2xl md:text-3xl font-bold mb-4">
        Ready to get started?
      </h2>
      <p className="mb-6 text-sm md:text-base">
        Join thousands of happy subscribers and receive your first box within days!
      </p>
      <button className="bg-white text-blue-600 font-semibold px-6 py-2 rounded-md shadow hover:bg-gray-100 transition">
        Subscribe Now
      </button>
    </section>
       </div>
    );
};

export default ChooseBox;