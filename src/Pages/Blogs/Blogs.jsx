import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import DetailsBlogs from './DetailsBlogs';
import { useLoaderData } from 'react-router';

const Blogs = () => {
    const data = useLoaderData()
     
    return (
        <div>
              <header>
                <Navbar></Navbar>
            </header>
            <main>
               <DetailsBlogs data={data}></DetailsBlogs>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default Blogs;