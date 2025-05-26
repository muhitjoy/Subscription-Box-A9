import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { Link, useLoaderData, useParams } from 'react-router'
import { FaArrowLeft, FaStar } from 'react-icons/fa'
import AboutDetailsCard from '../../components/AboutDetailsCard/AboutDetailsCard'
import Footer from '../../components/Footer/Footer'


const MoreDetails = () => {
	const data = useLoaderData()
	const { id } = useParams()
	const [subscription, setSubscription] = useState({})
	// console.log(data, id, subscription);
	

	useEffect(() => {
		const subscriptionDetails = data.find(
			(singleDetails) => singleDetails.id == id,
		)
		setSubscription(subscriptionDetails)
	}, [data, id])

	return (
		<div className=''>
			<header>
				<Navbar></Navbar>
			</header>
			<main className='mt-5'>
				<div
					className='relative w-full h-[400px] object-cover bg-cover bg-center text-white'
					style={{ backgroundImage: `url(${subscription.banner})` }}
				>
					{/* Overlay */}
					<div className="absolute inset-0 bg-black/20 "></div>

					{/* Content */}
					<div className='relative z-10 max-w-5xl mx-auto h-full flex items-center px-4'>
						<div>
							<Link
								to='/'
								className='inline-flex items-center gap-2 text-white bg-gray-800 bg-opacity-70 hover:bg-opacity-90 px-3 py-2 rounded'
							>
								<FaArrowLeft /> Back to All Boxes
							</Link>

							<h1 className='text-4xl font-bold mt-6'>{subscription.name}</h1>

							{/* Rating */}
							<div className='flex items-center mt-2 gap-2'>
								<div className='flex text-yellow-400'>
									<FaStar />
									<FaStar />
									<FaStar />
									<FaStar />
									<FaStar className='text-gray-400' />
								</div>
								<p className='text-white font-semibold text-sm'>{subscription.ratings} ( {subscription.number_of_reviews} reviews )</p>
							</div>
						</div>
					</div>
				</div>
				{/* about section */}
				<AboutDetailsCard subscription={subscription}></AboutDetailsCard>
			</main>
			<footer>
				<Footer></Footer>
			</footer>
		</div>
		
	)
}

export default MoreDetails
