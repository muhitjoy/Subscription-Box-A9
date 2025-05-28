import React from 'react';
import errorImage from "../../assets/errorImage.avif"
import { IoIosHome } from 'react-icons/io';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className='min-h-screen flex flex-col justify-center items-center p-5 space-y-3'>
            <img className='w-72' src={errorImage} alt="" />
            <h1 className='text-xl text-center text-gray-700'>Oops! The page you're looking  for seems <br /> to  have vanished.</h1>
            <div className='space-x-6'>
                <Link to="/"><button className="btn btn-lg bg-purple-600 text-white"><IoIosHome />Home</button></Link>
                <Link to="/"><button className="btn btn-lg bg-blue-700 text-white"><FaArrowLeft />Go Back</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;