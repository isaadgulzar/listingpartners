/* eslint-disable jsx-a11y/alt-text */
'use client'
import React, { useState, useEffect } from 'react'
import TagManager from 'react-gtm-module'

import Image from 'next/image'
import Link from 'next/link'

import { SwiperSlide } from 'swiper/react'

import Logo from '../../public/assets/Logo.svg'
import VideoThumbnail from '../../public/assets/images/videoImage.svg'
import StepOneImage from '../../public/assets/images/StepOneImage.svg'
import Form from '../../public/assets/images/Form.svg'
import StepTwoPerson from '../../public/assets/images/StepTwoPerson.svg'
import StepThreeLeft from '../../public/assets/images/StepThreeLeft.svg'
import StepThreeRight from '../../public/assets/images/StepThreeRight.svg'
import StepFourImage from '../../public/assets/images/StepFourImage.svg'
import StepFourCard from '../../public/assets/images/StepFourCard.svg'
import FirstServiceImage from '../../public/assets/images/FirstServiceImage.svg'
import SecondServiceImage from '../../public/assets/images/SecondServiceImage.svg'
import CardImage1 from '../../public/assets/images/card1.svg'
import CardImage2 from '../../public/assets/images/card2.svg'
import CardImage3 from '../../public/assets/images/card3.svg'
import CardImage4 from '../../public/assets/images/card4.svg'
import CardImage5 from '../../public/assets/images/card5.svg'

import Intersect from '../../public/assets/backgrounds/Intersect.svg'
import Union from '../../public/assets/backgrounds/Union.svg'
import Pattern from '../../public/assets/backgrounds/Pattern.svg'

import Century21 from '../../public/assets/partners/century21.svg'
import Elders from '../../public/assets/partners/Elders.svg'
import Hooker from '../../public/assets/partners/Hooker.svg'
import McGrath from '../../public/assets/partners/McGrath.svg'
import Remax from '../../public/assets/partners/Remax.svg'

import ArrowRight from '../../public/assets/icons/ArrowRight.svg'
import PlayIcon from '../../public/assets/icons/Play.svg'
import Line from '../../public/assets/icons/Line.svg'
import Scan from '../../public/assets/icons/Scan.svg'
import StepTwoIcon from '../../public/assets/icons/StepTwoIcon.svg'
import StepThreeIcon from '../../public/assets/icons/StepThreeIcon.svg'
import StepFourIcon from '../../public/assets/icons/StepFourIcon.svg'
import Instagram from '../../public/assets/icons/instagram.svg'
import Linkedin from '../../public/assets/icons/linkedin-in.svg'
import TwitterX from '../../public/assets/icons/x.svg'
import OpenMenu from '../../public/assets/icons/menu-open.svg'
import Cross from '../../public/assets/icons/cross.svg'

import SwiperSlider from '@/components/SwiperSlider'
import Card from '@/components/Card'
import ContactModal from '@/components/ContactModal'

export default function Home() {
	const [hideVideoThumbnail, setHideVideoThumbnail] = useState(false)
	const [showNav, setShowNav] = useState(false)
	const [showContactModal, setShowContactModal] = useState(false)

	useEffect(() => {
		const handleRouteChange = (url) => {
			// Initialize GTM on the initial page load
			TagManager.initialize({ gtmId: 'GTM-PQNT5XPD' })

			// Send a page view event on route change
			window.dataLayer.push({
				event: 'pageview',
				pagePath: url,
			})
		}

		// Initialize GTM and handle route changes
		const pageUrl = window?.location?.href | ''
		handleRouteChange(pageUrl)
	}, [])

	const reviews = [
		{
			id: 1,
			name: 'Sarah',
			location: 'Victoria',
			desc: `We couldn't have been more delighted with the Listing Partners! 

      Their method of handpicking premier agents and creating unique terms and conditions resulted in a flawlessly smooth selling experience.`,
			image: CardImage1,
		},
		{
			id: 2,
			name: 'Telal',
			location: 'Queensland',
			desc: `Their proficiency in selecting the optimal agents for our selling requirements, while establishing fixed commissions and advertising budgets, ensured a stress-free process. 

      Their commitment to maintaining our predefined expectations without altering benefits for the agents was highly appreciated.`,
			image: CardImage2,
		},
		{
			id: 3,
			name: 'Marc',
			location: 'New South Wales',
			desc: `Collaborating with the Listing Partners was an exceptional journey! They adeptly guided us through the selling process by thoughtfully selecting the finest agents for our auction. 

      Their exclusive strategy concerning terms and conditions, combined with upfront cost support, highlighted their unwavering dedication. 
      
      A special acknowledgment to Nathan from their team for his exceptional front-facing role with the agents.`,
			image: CardImage3,
		},
		{
			id: 4,
			name: 'Danny',
			location: 'New South Wales',
			desc: `Listing Partners streamlined the sale of our house! Their fresh approach involved meticulously selecting the top five local agents and organizing an auction that catered to our preferences, open for any agents willing to work on our terms. 

      Their distinctive business proposal ensured a smooth and uninterrupted process from start to finish.`,
			image: CardImage4,
		},
		{
			id: 5,
			name: 'Donna',
			location: 'Victoria',
			desc: `Selling alongside the Listing Partners was a game-changer! 

			Their personalized guidance accompanied us at every step. They adeptly negotiated fixed commissions and advertising budgets, allowing us to cover upfront costs using settlement fees. 
			
			Despite being a newly established startup, taking a chance on them proved incredible, given their focus on a limited clientele to provide exceptional service.`,
			image: CardImage5,
		},
	]

	return (
		<main className={`w-full font-montserrat text-negative`}>
			{/* Header Section */}
			<header className="relative px-6 md:px-10 h-[50px] lg:h-[84px] flex flex-col justify-center bg-primary">
				<nav className="flex justify-between items-center max-w-screen-2xl mx-auto w-full">
					<div className="flex items-center justify-between max-w-3xl w-full">
						<Link href="#" className="w-28 h-4 md:h-7 md:w-52">
							<Image src={Logo} alt="Logo" className="w-full h-full" />
						</Link>

						<ul
							className={`${
								showNav ? 'hidden' : 'hidden md:flex'
							} flex justify-center items-center gap-2 md:gap-12 relative`}
						>
							<li>
								<Link href="#" className="link active">
									Home
								</Link>
							</li>
							<li>
								<Link href="#about" className="link">
									About
								</Link>
							</li>
							<li>
								<Link href="#contact" className="link">
									Contact
								</Link>
							</li>
						</ul>
					</div>
					<button onClick={() => setShowNav(!showNav)} className="md:hidden">
						{showNav ? (
							<Image src={Cross} alt="Cross" className="h-10" />
						) : (
							<Image src={OpenMenu} alt="Union" className="h-10" />
						)}
					</button>

					<a href="#about" className="btn-solid hidden md:flex">
						Get Started{' '}
						<Image src={ArrowRight} alt="ArrowRight" className="h-3 w-3.5" />
					</a>
				</nav>
				<nav className={`${showNav ? 'flex w-full' : 'hidden'}`}>
					<ul className="absolute top-14 left-0 z-40 flex w-full flex-col bg-secondary pt-0 h-40 justify-center items-center gap-2 md:gap-4 lg:gap-6">
						<li>
							<Link href="#" className="nav-item">
								Home
							</Link>
						</li>
						<li>
							<Link href="#about" className="nav-item">
								About
							</Link>
						</li>
						<li>
							<Link href="#contact" className="nav-item">
								Contact
							</Link>
						</li>
					</ul>
				</nav>
			</header>

			{/* Hero Section */}
			<div className="relative bg-primary">
				<Image
					src={Intersect}
					alt="Intersect"
					className="w-full h-screen object-cover absolute top-0 left-0"
				/>
				<section className="hero-section max-w-screen-2xl mx-auto w-full px-6 xl:px-10">
					<aside className="relative pt-32 lg:pt-0">
						<h1 className="text-4xl lg:text-7xl font-bold font-montserrat leading-[normal] tracking-[1.08px] mb-5 lg:mb-2.5 max-w-lg">
							Let’s find your perfect match{' '}
							<span className="text-ternary -ml-3 lg:-ml-6">.</span>
						</h1>
						<p className="paragraph max-w-sm pb-10">
							Sell your home with confidence – choose ListingPartners, your
							go-to platform for connecting with the perfect real estate agent
							in Australia.
						</p>
						<a href="#about" className="btn-primary max-w-max">
							Get Started{' '}
							<Image src={ArrowRight} alt="ArrowRight" className="h-3 w-3.5" />
						</a>
					</aside>
					<aside className="relative w-full h-[300px] md:h-[400px] md:w-[550px]">
						<div className="absolute -right-7 -bottom-7 md:h-[300px] md:w-[380px] bg-ternary"></div>
						<iframe
							className="h-full w-full relative"
							src="https://www.youtube-nocookie.com/embed/_27uAZAVGtA?si=VLahgbTa476cL30o"
							title="YouTube video player"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						></iframe>
						{!hideVideoThumbnail && (
							<div className="w-full h-full absolute top-0 left-0">
								<Image
									src={VideoThumbnail}
									alt="Video Thumbnail"
									className="w-full h-full object-cover"
									width={'auto'}
									height={'auto'}
									priority
								/>
								<Image
									src={PlayIcon}
									alt="Video Thumbnail"
									className="w-20 h-20 absolute top-[40%] left-[45%] cursor-pointer hover:shadow-md hover:shadow-negative/50 rounded-full"
									onClick={() => setHideVideoThumbnail(true)}
									width={'auto'}
									height={'auto'}
									priority
								/>
							</div>
						)}
					</aside>
				</section>
			</div>

			{/* Partners Section */}
			<div className="relative bg-secondary">
				<section className="bg-secondary main-container max-w-screen-2xl mx-auto w-full">
					<div className="section-header">
						<h2 className="section-heading">Trusted by</h2>
						<p className="section-desc">
							Sell your home with confidence – choose ListingPartners, your
							go-to platform for connecting with the perfect.
						</p>
					</div>
					<div className="flex flex-col lg:flex-row justify-center items-center gap-7 lg:gap-14">
						<div className="partner-item">
							<Image
								src={Century21}
								alt="Century21"
								className="h-6 lg:h-12 w-[236px]"
								width={'auto'}
								height={'auto'}
								quality={80}
							/>
						</div>
						<div className="partner-item">
							<Image
								src={Hooker}
								alt="Hooker"
								className="h-6 lg:h-12 w-[191px]"
								width={'auto'}
								height={'auto'}
								quality={80}
							/>
						</div>
						<div className="partner-item">
							<Image
								src={McGrath}
								alt="McGrath"
								className="h-6 lg:h-12 w-[166px]"
								width={'auto'}
								height={'auto'}
								quality={80}
							/>
						</div>
						<div className="partner-item">
							<Image
								src={Elders}
								alt="Elders"
								className="h-6 lg:h-12 w-[123px]"
								width={'auto'}
								height={'auto'}
								quality={80}
							/>
						</div>
						<div className="partner-item">
							<Image
								src={Remax}
								alt="Remax"
								className="h-6 lg:h-12 w-[172px]"
								width={'auto'}
								height={'auto'}
								quality={80}
							/>
						</div>
					</div>
				</section>
				<Image
					src={Pattern}
					alt="Pattern"
					className="w-full mt-20"
					width={'auto'}
					height={'auto'}
				/>
			</div>

			{/* How-it-works Section */}
			<div id="about" className="relative bg-primary overflow-hidden">
				<Image
					src={Union}
					alt="Union"
					className="w-full h-[1935px] absolute top-10 -right-56 z-10"
					width={'auto'}
					height={'auto'}
				/>
				<div className="max-w-screen-2xl mx-auto bg-primary">
					<section className="main-container items-center max-w-5xl mx-auto gap-[60px] lg:gap-[140px] pb-[60px] lg:pb-[180px] relative">
						<div className="section-header">
							<h2 className="section-heading">How does it work?</h2>
							<p className="section-desc">
								Sell your home with confidence – choose ListingPartners, your
								go-to platform for connecting with the perfect.
							</p>
						</div>
						{/*Step 1 */}
						<section className="two-column-layout relative z-20">
							<aside className="h-full w-full flex items-center">
								<div className="description-box">
									<p className="step-title">
										<Image
											src={Line}
											alt="Line"
											className="w-6 h-[2px]"
											width={'auto'}
											height={'auto'}
										/>
										Step one
									</p>
									<h2 className="section-heading">Assessment</h2>
									<p className="paragraph">
										Sellers complete a comprehensive form outlining their
										property details, needs, and sales strategy preferences.
									</p>
									<p className="paragraph">
										We analyze this information to understand their specific
										requirements.
									</p>
								</div>
							</aside>
							<aside className="h-full w-full flex justify-center relative">
								<div className="relative">
									<Image
										src={StepOneImage}
										alt="Property Image"
										className="h-[300px]"
										width={'auto'}
										height={'auto'}
										quality={70}
									/>
									<Image
										src={Scan}
										alt="Scan"
										className="icon-size absolute top-10 lg:top-8 -left-4 lg:-left-9"
										width={'auto'}
										height={'auto'}
										quality={70}
									/>
									<Image
										src={Form}
										alt="Form Image"
										className="absolute bottom-0 -left-4 lg:-left-24"
										width={'auto'}
										height={'auto'}
										quality={70}
									/>
								</div>
							</aside>
						</section>
						{/*Step 2 */}
						<section className="two-column-layout relative z-20">
							<aside className="relative mr-auto">
								<Image
									src={StepTwoIcon}
									alt="image"
									className="icon-size absolute -right-28 -top-5"
									width={'auto'}
									height={'auto'}
									quality={70}
								/>
								<Image
									src={StepTwoPerson}
									alt="image"
									className="h-[380px]"
									width={'auto'}
									height={'auto'}
									quality={70}
								/>
								<p className="absolute -bottom-4 lg:-bottom-10 right-0 lg:-right-1/2 w-[299px] paragraph rounded-lg bg-secondary border border-primary p-3 lg:p-5 text-negative">
									We believe these agents are a good fit. Check them out!
								</p>
							</aside>
							<aside className="h-full w-full flex md:justify-end items-center order-first md:order-last">
								<div className="description-box w-[75%] md:w-[80%] lg:w-[90%]">
									<p className="step-title">
										<Image
											src={Line}
											alt="Line"
											className="w-6 h-[2px]"
											width={'auto'}
											height={'auto'}
										/>
										Step two
									</p>
									<h2 className="section-heading">Recommendations</h2>
									<p className="paragraph w-[90%]">
										Sellers receive a curated list of recommended agents, each
										tailored to meet their unique selling objectives.
									</p>
									<p className="paragraph w-[85%]">
										We provide detailed profiles highlighting agent expertise,
										track record, and approach to selling homes.
									</p>
								</div>
							</aside>
						</section>
						{/*Step 3 */}
						<section className="two-column-layout relative z-20">
							<aside className="h-full w-full flex items-center">
								<div className="description-box">
									<p className="step-title">
										<Image
											src={Line}
											alt="Line"
											className="w-6 h-[2px]"
											width={'auto'}
											height={'auto'}
										/>
										Step three
									</p>
									<h2 className="section-heading">Matching</h2>
									<p className="paragraph">
										Leveraging our extensive network, we identify and match
										sellers with top-performing real estate agents in their
										area.
									</p>
									<p className="paragraph">
										{
											"Agents are selected based on expertise, local market knowledge, and alignment with the seller's goals."
										}
									</p>
								</div>
							</aside>
							<aside className="h-full w-full flex justify-center relative">
								<div className="grid grid-cols-2  relative">
									<div className="relative">
										<Image
											src={StepThreeLeft}
											alt="Property Image"
											className="h-[260px] "
											width={'auto'}
											height={'auto'}
											quality={70}
										/>
										<Image
											src={StepThreeIcon}
											alt="icon"
											className="icon-size absolute bottom-14 lg:bottom-32 -right-5 lg:-right-10 z-10"
											width={'auto'}
											height={'auto'}
											quality={70}
										/>
									</div>
									<Image
										src={StepThreeRight}
										alt="Property Image"
										className="relative -right-2 lg:-right-5 top-28 lg:top-44 h-[260px]"
										width={'auto'}
										height={'auto'}
										quality={70}
									/>
									<p className="paragraph absolute rounded-lg bg-secondary border border-primary p-3 lg:p-5 bottom-0 lg:bottom-14 left-8 lg:left-14">
										{"It's a match!"}
									</p>
								</div>
							</aside>
						</section>
						{/*Step 4 */}
						<section className="two-column-layout">
							<div className="relative">
								<Image
									src={StepFourImage}
									alt="image"
									className="h-[420px]"
									width={'auto'}
									height={'auto'}
									quality={70}
								/>
								<Image
									src={StepFourIcon}
									alt="image"
									className="icon-size absolute top-20 -left-5 lg:top-6 lg:-left-10"
									width={'auto'}
									height={'auto'}
									quality={70}
								/>
								<Image
									src={StepFourCard}
									alt="image"
									className="absolute w-[390px] h-[140px] -bottom-2 lg:-bottom-8 -left-4 lg:-left-20 "
									width={'auto'}
									height={'auto'}
									quality={70}
								/>
							</div>
							<aside className="h-full w-full flex md:justify-end items-center order-first md:order-last">
								<div className="description-box w-[75%] md:w-[80%] lg:w-[90%]">
									<p className="step-title">
										<Image
											src={Line}
											alt="Line"
											className="w-6 h-[2px]"
											width={'auto'}
											height={'auto'}
										/>
										Step four
									</p>
									<h2 className="section-heading">Engagement</h2>
									<p className="paragraph w-[90%]">
										Once the seller chooses their preferred agent, the
										collaboration begins.
									</p>
									<p className="paragraph w-[85%]">
										Our role includes facilitating communication and ensuring a
										smooth partnership between the seller and agent.
									</p>
								</div>
							</aside>
						</section>
						<div className="w-full flex justify-center">
							<a href="#services" className="btn-primary">
								Get started today{' '}
								<Image
									src={ArrowRight}
									alt="ArrowRight"
									className="h-3 w-3.5"
									width={'auto'}
									height={'auto'}
								/>
							</a>
						</div>
					</section>
				</div>
			</div>

			{/* Services Section */}
			<div id="services" className="bg-secondary">
				<section className="main-container items-center max-w-5xl mx-auto gap-[60px] lg:gap-[140px] pb-[60px] lg:pb-[180px]">
					<div className="section-header">
						<h2 className="section-heading">You hold all the cards</h2>
						<p className="section-desc">
							Sell your home with confidence – choose ListingPartners, your
							go-to platform for connecting with the perfect.
						</p>
					</div>
					<section className="two-column-layout md:!gap-8 lg:!gap-32">
						<aside className="h-full w-full flex items-center">
							<div className="description-box !w-full">
								<p className="step-title">
									<Image
										src={Line}
										alt="Line"
										className="w-6 h-[2px]"
										width={'auto'}
										height={'auto'}
									/>
									Consult
								</p>
								<h2 className="section-heading">Consultation and decision</h2>
								<p className="paragraph max-w-md">
									Sellers have the opportunity to schedule consultations with
									the selected agents where sellers can ask questions, discuss
									strategies, and determine the best fit before making a
									decision.
								</p>
								<div className="mt-4">
									<button
										onClick={() => setShowContactModal(true)}
										className="btn-primary"
									>
										Book a time{' '}
										<Image
											src={ArrowRight}
											alt="ArrowRight"
											className="h-3 w-3.5"
											width={'auto'}
											height={'auto'}
										/>
									</button>
								</div>
							</div>
						</aside>
						<aside className="h-full w-full flex justify-center relative z-0">
							<Image
								src={SecondServiceImage}
								alt="Property Image"
								width={'auto'}
								height={'auto'}
								quality={70}
							/>
						</aside>
					</section>
					<section className="two-column-layout md:!gap-8 lg:!gap-32">
						<aside className="h-full w-full flex justify-center relative z-0">
							<Image
								src={FirstServiceImage}
								alt="Property Image"
								width={'auto'}
								height={'auto'}
								quality={70}
							/>
						</aside>
						<aside className="h-full w-full flex md:justify-end items-center order-first md:order-last">
							<div className="description-box w-full">
								<p className="step-title">
									<Image
										src={Line}
										alt="Line"
										className="w-6 h-[2px]"
										width={'auto'}
										height={'auto'}
									/>
									Support
								</p>
								<h2 className="section-heading">
									Optimized selling experience
								</h2>
								<p className="paragraph max-w-sm">
									Throughout the selling process, we offer support, guidance,
									and advice to ensure a successful sale.
								</p>
								<p className="paragraph max-w-sm">
									We aim for a seamless experience, empowering sellers and
									agents toward their shared goal: a successful home sale.
								</p>
								<div className="mt-4">
									<a href="#contact" className="btn-primary max-w-max">
										Contact us{' '}
										<Image
											src={ArrowRight}
											alt="ArrowRight"
											className="h-3 w-3.5"
											width={'auto'}
											height={'auto'}
										/>
									</a>
								</div>
							</div>
						</aside>
					</section>
				</section>
			</div>

			{/* Testimonials Section */}
			<div className="bg-primary relative">
				<section className="main-container max-w-5xl mx-auto px-5 items-center pt-[60px] lg:pt-[100px] pb-[180px]">
					<div className="two-column-layout lg:gap-32">
						<aside className="h-full w-full flex items-center">
							<div className="description-box !w-full">
								<p className="step-title">
									<Image
										src={Line}
										alt="Line"
										className="w-6 h-[2px]"
										width={'auto'}
										height={'auto'}
									/>
									Testimonials
								</p>
								<h2 className="section-heading">
									Hear what others say about us
								</h2>
								<p className="paragraph">
									Sellers have the opportunity to schedule consultations with
									the selected agents where sellers can ask questions, discuss
									strategies, and determine the best fit before making a
									decision.
								</p>

								<div className="mt-4">
									<button
										onClick={() => setShowContactModal(true)}
										className="btn-primary"
									>
										Book a time{' '}
										<Image
											src={ArrowRight}
											alt="ArrowRight"
											className="h-3 w-3.5"
											width={'auto'}
											height={'auto'}
										/>
									</button>
								</div>
							</div>
						</aside>

						<aside className="w-full">
							<div className="lg:w-[700px] lg:absolute top-24 right-5 lg:right-0">
								<SwiperSlider
									slidesData={reviews}
									slidesPerView={1.7}
									spaceBetween={40}
								>
									{reviews.map((data) => (
										<SwiperSlide key={data?.id} className="z-0">
											<Card key={data?.id} review={data} />
										</SwiperSlide>
									))}
								</SwiperSlider>
							</div>
						</aside>
					</div>
				</section>
			</div>

			{/* Footer section */}
			<div className=" bg-secondary">
				<footer
					id="contact"
					className="main-container gap-[30px] lg:gap-[120px] py-5 lg:py-11 grid lg:grid-cols-3 max-w-screen-2xl mx-auto"
				>
					<aside className="flex flex-col justify-between">
						<Image
							src={Logo}
							alt="logo"
							className="w-[150px] h-[25px] lg:w-[207px] lg:h-[30px]"
							width={'auto'}
							height={'auto'}
						/>
						<section className="hidden lg:flex flex-col gap-4 mt-10 lg:mt-44">
							<p className="paragraph text-negative/75">ABN: 86 768 265 615</p>
							<p className="paragraph text-negative/75">
								Level 13 / 465 Victoria Ave, Chatswood New South Wales Australia
								2067
							</p>
							<p className="text-xs md:text-sm mt-4 opacity-50">
								Copyright © 2023, ListingPartners. All rights reserved.
							</p>
						</section>
					</aside>

					<aside className="lg:col-span-2 grid grid-cols-2 lg:grid-cols-4 gap-7 md:gap-4 order-1">
						<div className="col-span-2 lg:col-span-1 footer-links-container">
							<p className="footer-links-heading">social</p>
							<div className="flex items-center gap-3 md:gap-8">
								<a href="#" className="link">
									<Image
										src={Linkedin}
										alt="image"
										className="h-4 w-4 md:w-5 md:h-5"
										width={'auto'}
										height={'auto'}
									/>
								</a>
								<a href="#" className="link">
									<Image
										src={TwitterX}
										alt="image"
										className="h-4 w-4 md:w-5 md:h-5"
										width={'auto'}
										height={'auto'}
									/>
								</a>
								<a href="#" className="link">
									<Image
										src={Instagram}
										alt="image"
										className="h-4 w-4 md:w-5 md:h-5"
										width={'auto'}
										height={'auto'}
									/>
								</a>
							</div>
						</div>
						<div className="footer-links-container">
							<p className="footer-links-heading">Services</p>
							<a href="#" className="link">
								Get Started
							</a>
							<a href="#" className="link">
								How it works
							</a>
							<a href="#" className="link">
								Our Support
							</a>
							<a href="#" className="link">
								Testimonials
							</a>
							<a href="#" className="link">
								FAQ
							</a>
						</div>

						<div className="footer-links-container">
							<p className="footer-links-heading">Navigation</p>
							<a href="#" className="link">
								Home
							</a>
							<a href="#" className="link">
								About us
							</a>
							<a href="#" className="link">
								Terms of service
							</a>
							<a href="#" className="link">
								Privacy policy
							</a>
						</div>
						<div className="col-span-2 lg:col-span-1 footer-links-container gap-4">
							<p className="footer-links-heading">Contact</p>
							<a href="tel:+611300619528" className="link">
								+61 1300 619 528
							</a>
							<div>
								<button
									onClick={(e) => {
										e.stopPropagation()
										setShowContactModal(true)
									}}
									className="btn-primary"
								>
									Contact us
									<Image
										src={ArrowRight}
										alt="ArrowRight"
										className="h-2.5 w-2 lg:h-3.5 lg:w-3"
										width={'auto'}
										height={'auto'}
									/>
								</button>
							</div>
						</div>
					</aside>

					<section className="flex lg:hidden flex-col gap-4 mt-10 lg:mt-44 order-2">
						<p className="paragraph text-negative/75">ABN: 86 768 265 615</p>
						<p className="paragraph text-negative/75">
							Level 13 / 465 Victoria Ave, Chatswood New South Wales Australia
							2067
						</p>
						<p className="text-xs md:text-sm mt-4 opacity-50">
							Copyright © 2023, ListingPartners. All rights reserved.
						</p>
					</section>
				</footer>
			</div>
			{showContactModal && (
				<ContactModal handleClose={() => setShowContactModal(false)} />
			)}
		</main>
	)
}
