import React from 'react';
import TechBoxSlide from './TechBoxSlide';
import { FaGift } from 'react-icons/fa';


const Header = () => {
    return (
        <div className="hero mx-auto mt-14 bg-gradient-to-r from-purple-800 to-blue-500 lg:h-[600px] p-6">
        <div className="hero-content flex-col lg:flex-row-reverse md:gap-28">
          {/* <img
            src="/public/subscription-box-1.jpg"
            className="w-[500px] object-cover rounded-lg "
          /> */}
        
         
             <div>
              <TechBoxSlide></TechBoxSlide>
             </div>
               
          <div className='text-center md:text-left'>
            <h1 className="text-3xl md:text-5xl animate-pulse font-bold text-white">Discover Amazing Products <br /> Every Month</h1>
            <p className="py-6 md:text-xl text-white">
            Join our subscription box service and receive carefully curated items delivered right to your <br /> doorstep. Perfect for those who love surprises!
            </p>
            <button className="btn btn-primary bg-white rounded-lg p-5 text-[15px] text-blue-600 font-semibold"><FaGift></FaGift>Browse Subscriptions</button>
          </div>
        </div>
      </div>
    );
};

export default Header;
