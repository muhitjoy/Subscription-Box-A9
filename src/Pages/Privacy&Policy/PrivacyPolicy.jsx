import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

const PrivacyPolicy = () => {
    return (
        <div className='mt-20'>
            <header>
                <Navbar></Navbar>
            </header>
            <main>
                 <div className="max-w-4xl mx-auto px-4 py-8 text-gray-800">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p className="text-sm text-gray-500 mb-6">Last updated: May 30, 2025</p>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">1. Introduction</h2>
        <p>Subscription box respects your privacy and is committed to protecting your personal data...</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">2. Information We Collect</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>Personal information such as name, email address, postal address, phone number, and payment information</li>
          <li>Account information including username and password</li>
          <li>Usage data about how you interact with our service</li>
          <li>Device and browser information</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">3. How We Use Your Information</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>To manage your subscription and account</li>
          <li>Communications like newsletters and support</li>
          <li>Personalizing your experience</li>
          <li>Marketing and advertising</li>
          <li>Detecting and preventing fraudulent activities</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">4. Information Sharing</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>Vendors and third parties performing services on our behalf</li>
          <li>Compliance with laws or legal processes</li>
          <li>Affiliates and partners with your consent</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">5. Data Security</h2>
        <p>We implement appropriate security measures to protect your data...</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">6. Data Retention</h2>
        <p>We retain your information as long as necessary to fulfill our purposes...</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">7. Your Rights</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>Accessing and reviewing your data</li>
          <li>Correcting incorrect data</li>
          <li>Requesting deletion</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">8. Changes to This Privacy Policy</h2>
        <p>We may update our privacy policy from time to time and notify you accordingly.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">9. Contact Us</h2>
        <p className='text-black'><span className='font-bold'>Email:</span> muhitjoy2004@gmail.com</p>
        <p className='text-black'><span className='font-bold'>Phone:</span> 01839******</p>
        <p className='text-black'><span className='font-bold'>Address:</span> Habiganj District, Sylhet, Bangladesh</p>
      </section>
    </div>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default PrivacyPolicy;