import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { CiUser } from 'react-icons/ci';
import { FaUser } from 'react-icons/fa';
import { MdOutlineMailOutline } from 'react-icons/md';
import { IoLogOutOutline } from 'react-icons/io5';

const Profile = () => {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <p className="text-center mt-10">Loading user data...</p>;
  }

  return (
    <div className='mt-20'>
      <header>
        <Navbar />
      </header>
      <main>
        <div className="px-4 py-10 bg-gray-50 min-h-screen">
  <h2 className="text-3xl font-bold text-center mb-6">My Account</h2>
  <p className="text-center text-gray-600 mb-10">
    Manage your profile, subscriptions, and account settings.
  </p>

  <div className="flex flex-col lg:flex-row gap-6">
  
    {/* Main Card */}
    <div className="bg-white p-10 rounded-xl mx-auto shadow w-full lg:w-3/4 flex flex-col gap-6 md:flex-row">
      <div className="text-center md:w-1/3">
        <img
          className="w-28 h-28 rounded-full mx-auto border-2 border-blue-500"
          src={user.photoURL}
          alt="Profile"
        />
        <h3 className="mt-4 text-xl font-semibold">{user.displayName}</h3>
        <p className="text-gray-500 break-words">{user.email}</p>
        <button className="text-blue-500 mt-2 underline">Edit Profile</button>
      </div>

      <div className="flex-1 space-y-5 text-center md:text-left px-4">
  <h4 className="text-2xl font-bold mb-4">Account Information</h4>

  <div>
    <p className="text-gray-500">Full Name:</p>
    <div className="flex items-center justify-center md:justify-start gap-3 text-black font-semibold">
      <FaUser size={20} className="text-blue-500" />
      <span>{user.displayName}</span>
    </div>
  </div>

  <div>
    <p className="text-gray-500">Email Address:</p>
    <div className="flex items-center justify-center md:justify-start gap-3 text-black font-semibold">
      <MdOutlineMailOutline size={25} className="text-blue-500" />
      <span>{user.email}</span>
    </div>
  </div>

  <div>
    <p className="text-gray-500">Account Status:</p>
    <span className="text-green-600 font-semibold">Active</span>
  </div>

 
</div>

    </div>
  </div>
</div>

      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Profile;
