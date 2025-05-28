import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Header from '../components/Header/Header';
import { Outlet, useNavigation } from 'react-router';
import SubscriptionBoxes from '../components/SubscriptionBoxes/SubscriptionBoxes';
import ChooseBox from '../components/ChooseBox/ChooseBox';
import SubscribersReview from '../components/SubscribersReview/SubscribersReview';
import FrequentlyAskedSec from '../components/FrequentlyAskedSec/FrequentlyAskedSec';
import Footer from '../components/Footer/Footer';
import Loading from '../Pages/Loading/Loading';
import { ToastContainer } from 'react-toastify';



const HomeLayouts = () => {

    const {state} = useNavigation()
    console.log(state);
    
    return (
        <div >
           <section className='mx-auto'>
                <Navbar></Navbar>   
                <Header></Header>
                {import.meta.env.VITE_name}  
                <SubscriptionBoxes></SubscriptionBoxes>     
                <ChooseBox></ChooseBox>
                <SubscribersReview></SubscribersReview>
                <FrequentlyAskedSec></FrequentlyAskedSec>     
               {state == "loading" ? <Loading></Loading> : <Outlet></Outlet>}
            </section>  
                <Footer></Footer> 
                <ToastContainer></ToastContainer>  
        </div>
        
    );
};

export default HomeLayouts;