import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer/Footer';
import { ToastContainer } from 'react-toastify';

const AuthLayout = () => {
    return (
        <div className='bg-base-100 min-h-screen' >
           <header className=''>
             <Navbar></Navbar>
           </header>
           <main className='p-4 mx-auto py-5'>
            <Outlet></Outlet>
           </main>
           <footer>
            <Footer></Footer>
           </footer>
           <ToastContainer></ToastContainer>
        </div>
    );
};

export default AuthLayout;