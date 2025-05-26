import React from 'react';

const FrequentlyAskedSec = () => {
    return (
        <div className='w-10/12 mx-auto mt-24'>
            <div className='text-center space-y-2'>
                <h1 className='text-4xl font-bold'>Frequently Asked Questions</h1>
                <p className='text-gray-500'>Find answers to common questions about our subscription box service.</p>
            </div>
           <div className='mt-10'>
             <div className="collapse  collapse-arrow bg-base-100 border border-base-300">
  <input type="radio" name="my-accordion-2" defaultChecked />
  <div className="md:text-xl collapse-title font-semibold">How does the subsription box service work?</div>
  <div className="collapse-content text-gray-600 text-sm">Our subscription box service delivers a curated selection of products to your door every month. Choose a subscription plan that suits you, and we'll ship your box at the beginning of each billing cycle. You can skip a month or cancel anytime.</div>
            </div>
            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
  <input type="radio" name="my-accordion-2" />
  <div className="md:text-xl collapse-title font-semibold">Can I customize my subscription box?</div>
  <div className="collapse-content text-gray-600 text-sm">Yes! We offer various customization options. After subscribing, you can set your preferences in your account dashboard, and we'll tailor future boxes to match your tastes and needs as closely as possible.</div>
            </div>
           <div className="collapse collapse-arrow bg-base-100 border border-base-300">
  <input type="radio" name="my-accordion-2" />
  <div className="md:text-xl collapse-title font-semibold">When will my subscription box ship?</div>
  <div className="collapse-content text-gray-500 text-sm">Subscription boxes ship on the 5th of each month. If you subscribe after the 1st, your first box will ship the following month. You'll receive tracking information via email once your box is on its way.</div>
           </div>
           <div className="collapse collapse-arrow bg-base-100 border border-base-300">
  <input type="radio" name="my-accordion-2" />
  <div className="md:text-xl collapse-title font-semibold">How do I cancel or pause my subscription?</div>
  <div className="collapse-content text-gray-600 text-sm">Canceling or pausing is easy. Simply log into your account, go to the subscription management section, and select your preferred option. Changes must be made 3 days before your billing date to take effect for the next cycle.</div>
           </div>
           <div className="collapse collapse-arrow bg-base-100 border border-base-300">
  <input type="radio" name="my-accordion-2" />
  <div className="md:text-xl collapse-title font-semibold">Are there any shipping fees?</div>
  <div className="collapse-content text-gray-600 text-sm">Standard shipping is free within Bangladesh. For international orders or expedited shipping options, additional fees apply which will be displayed at checkout.</div>
           </div>
           <div className="collapse collapse-arrow bg-base-100 border border-base-300">
  <input type="radio" name="my-accordion-2" />
  <div className="md:text-xl collapse-title font-semibold">Do you offer gift subscription?</div>
  <div className="collapse-content text-gray-600 text-sm">Absolutely! Our subscription boxes make perfect gifts. Choose from various gift subscription lengths, and we'll send a digital gift notification to the recipient or directly to you for personal delivery.</div>
           </div>
           </div>

           <div className='text-center pt-8 space-y-3 mx-auto'>
            <p className='text-stone-600'>Still have questions? We're here to help!</p>
           <button className='btn btn-primary'>Contact support</button>
           </div>
        </div>
    );
};

export default FrequentlyAskedSec;