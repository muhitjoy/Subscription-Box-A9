import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

const TermsandConditions = () => {
    return (
        <div>
            <header>
                <Navbar></Navbar>             
            </header>
            <main>
                     <div className="max-w-3xl mx-auto p-6 bg-white  rounded-md text-gray-800 mt-20">
      <h1 className="text-2xl font-bold mb-2">Terms and Conditions</h1>
      <p className="text-sm text-gray-500 mb-6">Last Updated: May 30, 2025</p>

      <div className="space-y-6">
        <section>
          <h2 className="font-semibold text-xl">1. Agreement to Terms</h2>
          <p>
            By accessing and using our subscription box service, you agree to be bound by these Terms and Conditions.
            If you do not agree with any part of these terms, please do not use our service.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-xl">2. Subscription Services</h2>
          <p>
            Our subscription box service offers periodic deliveries of curated products. By subscribing, you authorize us
            to charge your payment method for the subscription plan you've selected. Subscriptions automatically renew
            unless canceled before the next billing cycle.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-xl">3. Pricing and Billing</h2>
          <p>
            All prices are displayed in the currency indicated on our website. We reserve the right to adjust pricing
            at any time, with notice provided to subscribers before changes take effect. Subscriptions will be charged
            according to their selected subscription plan.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-xl">4. Cancellation and Refunds</h2>
          <p>
            You may cancel your subscription at any time through your account settings. Cancellations must be made
            before the billing cycle to avoid further charges. Refund policies vary by subscription type and are detailed
            in our Refund Policy.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-xl">5. Delivery and Shipping</h2>
          <p>
            We make every effort to deliver subscriptions boxes within the estimated timeframe. Shipping times may vary
            based on location and other factors outside our control. We are not responsible for delays caused by
            courier service or other circumstances beyond our reasonable control.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-xl">6. Product Availability</h2>
          <p>
            We reserve the right to substitute items in subscriptions boxes based on availability. While we strive to
            include items as advertised, exact contents may vary. All substitutions will be of equal or greater value.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-xl">7. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, we are not liable for any damages that arise from your use of our
            service, including indirect, special, incidental, or consequential damages of any kind.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-xl">8. Changes to Terms</h2>
          <p>
            We reserve the right to modify these Terms and Conditions at any time. Changes will be effective when
            posted on our website. Continued use of our service after changes constitutes acceptance of those changes.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-xl">9. Contact Information</h2>
          <p>
            If you have any questions about our Terms and Conditions, please contact us at:
          </p>
          <ul className="ml-5 list-disc">
            <li><strong>Email:</strong> muhitjoy2004@gmail.com</li>
            <li><strong>Phone:</strong> 01839******</li>
            <li><strong>Address:</strong>  Habiganj district, Sylhet, Bangladesh</li>
          </ul>
        </section>
      </div>
    </div>
             </main>
             <footer>
                <Footer></Footer>
             </footer>
        </div>
    );
};

export default TermsandConditions;