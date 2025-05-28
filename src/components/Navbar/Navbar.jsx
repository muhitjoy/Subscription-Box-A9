import React, { use } from 'react';
import userIcon from "../../assets/Sample_User_Icon.png"
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../../Provider/AuthProvider';
import { toast  } from 'react-toastify';
import { BsFillGiftFill } from "react-icons/bs";

const Navbar = () => {
  const {user, logOut} = use(AuthContext);
  const handleLogout = () => {
    console.log("user trying to logout");
    logOut().then(() => {
      toast.success("user logged out succesfully");
    }).catch((error) => {
     console.log(error);
  
    });
    
  }
    const links = <>
   <NavLink  className={({isActive})=> isActive ? "text-green-500 && underline " : ""} to='/'><li className='m-3  text-[16px] mr-6 font-semibold '> Home</li></NavLink>
    <NavLink  className={({isActive})=> isActive ? "text-green-500 && underline  " : ""} to="/profile"><li className='m-3 text-[16px]  mr-6 font-semibold'>Profile</li></NavLink>
    <NavLink  className={({isActive})=> isActive ? "text-green-500 && underline " : ""} to='/blogs'><li className='m-3 text-[16px]  font-semibold mr-6'> Blogs</li></NavLink>
    
    </>
    return (
        <div>
          <div className="navbar shadow-sm lg:px-10  fixed top-0 z-50 bg-gray-100 ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="p-1 hover:bg-gray-200 lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              {links}
            </ul>
          </div>
          <div className='mr-2 text-purple-500 sm:block hidden'><BsFillGiftFill size={40}></BsFillGiftFill></div>
          <a className=" text-3xl font-bold text-purple-600">Box<span className='text-amber-500'>Subscription</span></a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {links}
          </ul>
        </div>
        <div className="navbar-end"> 
          
           <Link to="/profile"> {user && (
            <div className="relative group sm:block hidden">
              <img 
                className="w-14 rounded-full cursor-pointer border-2 border-blue-300" 
                src={user.photoURL || userIcon} 
                alt="user" 
              />

              {/* Tooltip Box */}
              <div className="absolute right-0 mt-2 w-60 bg-white text-black p-4 rounded shadow-lg hidden group-hover:block z-20">
                <p className="font-bold">{user.displayName || "No Name"}</p>
                <p className="text-sm text-gray-600">{user.email}</p>
              </div>
            </div>
          )}</Link>

          {user ? (
            <Link to="/auth/login"><button onClick={handleLogout} className="btn hover:bg-green-400 hover:text-white ml-2">Logout</button></Link>
          ) : (
            <Link to="/auth/login" className="btn hover:bg-green-400 hover:text-white ml-2">Login</Link>
          )}
         

        </div>
      </div>
        </div>
    );
};

export default Navbar;