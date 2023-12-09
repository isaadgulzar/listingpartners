/* eslint-disable jsx-a11y/alt-text */
'use client'
import React, { useState } from 'react'
import { SwiperSlide } from 'swiper/react'

import Image from 'next/image'
import Link from 'next/link'

import Logo from '../assets/Logo.svg'
import VideoThumbnail from '../assets/images/videoImage.svg'
import StepOneImage from '../assets/images/StepOneImage.svg'
import Form from '../assets/images/Form.svg'
import StepTwoUpper from '../assets/images/StepTwoUpper.svg'
import StepTwoMiddle from '../assets/images/StepTwoMiddle.svg'
import StepTwoLower from '../assets/images/StepTwoLower.svg'
import StepTwoCard from '../assets/images/StepTwoCard.svg'
import StepThreeLeft from '../assets/images/StepThreeLeft.svg'
import StepThreeRight from '../assets/images/StepThreeRight.svg'
import StepThreeCard from '../assets/images/StepThreeCard.svg'
import StepFourImage from '../assets/images/StepFourImage.svg'
import StepFourCard from '../assets/images/StepFourCard.svg'
import FirstServiceImage from '../assets/images/FirstServiceImage.svg'
import SecondServiceImage from '../assets/images/SecondServiceImage.svg'
import CardImage1 from '../assets/images/card1.svg'
import CardImage2 from '../assets/images/card2.svg'
import CardImage3 from '../assets/images/card3.svg'
import CardImage4 from '../assets/images/card4.svg'
import CardImage5 from '../assets/images/card5.svg'

import Intersect from '../assets/backgrounds/Intersect.svg'
import Union from '../assets/backgrounds/U.svg'
import Pattern from '../assets/backgrounds/Pattern.svg'

import Century21 from '../assets/partners/century21.svg'
import Elders from '../assets/partners/Elders.svg'
import Hooker from '../assets/partners/Hooker.svg'
import McGrath from '../assets/partners/McGrath.svg'
import Remax from '../assets/partners/Remax.svg'

import ArrowRight from '../assets/icons/ArrowRight.svg'
import PlayIcon from '../assets/icons/Play.svg'
import Line from '../assets/icons/Line.svg'
import Scan from '../assets/icons/Scan.svg'
import StepTwoIcon from '../assets/icons/StepTwoIcon.svg'
import StepThreeIcon from '../assets/icons/StepThreeIcon.svg'
import StepFourIcon from '../assets/icons/StepFourIcon.svg'
import FirstServiceIcon from '../assets/icons/FirstServiceIcon.svg'
import SecondServiceIcon from '../assets/icons/SecondServiceIcon.svg'
import Star from '../assets/icons/Star.svg'
import Instagram from '../assets/icons/instagram.svg'
import Linkedin from '../assets/icons/linkedin-in.svg'
import TwitterX from '../assets/icons/x.svg'
import OpenMenu from '../assets/icons/menu-open.svg'
import Cross from '../assets/icons/cross.svg'

import SwiperSlider from '@/components/SwiperSlider'
import Card from '@/components/Card'

export default function Home() {
	const [hideVideoThumbnail, setHideVideoThumbnail] = useState(false)
	const [showNav, setShowNav] = useState(false)

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
		<main className="w-full font-montserrat text-white ">
			{/* Header Section Starts */}
			<header className="relative px-6 md:px-36 h-[50px] lg:h-[84px] flex flex-col justify-center bg-primary">
				<nav className="flex justify-between items-center max-w-screen-2xl mx-auto w-full">
					<Link href="#" className="w-28 h-4 md:h-7 md:w-52">
						<Image src={Logo} alt="Logo" className="w-full h-full" priority />
					</Link>

					<ul
						className={`${
							showNav ? 'hidden' : 'hidden md:flex'
						} flex justify-center items-center gap-2 md:gap-4 lg:gap-6 relative`}
					>
						<li>
							<Link href="#" className="nav-item">
								Home
							</Link>
						</li>
						<li>
							<Link href="#" className="nav-item">
								About
							</Link>
						</li>
						<li>
							<Link href="#" className="nav-item">
								Contact
							</Link>
						</li>
					</ul>

					<button onClick={() => setShowNav(!showNav)} className="md:hidden">
						{showNav ? (
							<Image
								src={Cross}
								alt="Cross"
								className="h-10 text-negative"
								priority
							/>
						) : (
							<Image src={OpenMenu} alt="Union" className="h-10" priority />
						)}
					</button>

					<button className="btn-ternary hidden md:flex">
						Get Started <Image src={ArrowRight} className="h-3.5 w-3" />
					</button>
				</nav>
				<nav className={`${showNav ? 'flex w-full' : 'hidden'}`}>
					<ul className="absolute top-14 left-0 z-40 flex w-full flex-col bg-secondary pt-0 h-40 justify-center items-center gap-2 md:gap-4 lg:gap-6">
						<li>
							<Link href="#" className="nav-item">
								Home
							</Link>
						</li>
						<li>
							<Link href="#" className="nav-item">
								About
							</Link>
						</li>
						<li>
							<Link href="#" className="nav-item">
								Contact
							</Link>
						</li>
					</ul>
				</nav>
			</header>
			{/* Header Section Ends */}

			{/* Hero Section Starts here */}
			<div className="relative h-screen py-10 bg-primary">
				<Image
					src={Intersect}
					alt="Intersect"
					className="w-full h-full object-cover absolute top-0 left-0 z-10"
					priority
				/>
				<section className="hero-section max-w-screen-2xl mx-auto w-full">
					{/* Left Side */}
					<aside className="flex flex-col gap-6 md:gap-8 relative z-20">
						<div>
							<h1 className="main-heading mb-4 md:w-[420px]">
								Let’s find your perfect match
								<span className="full-stop inline">.</span>
							</h1>
							<p className="paragraph w-[77%]">
								Sell your home with confidence – choose ListingPartners, your
								go-to platform for connecting with the perfect real estate agent
								in Australia.
							</p>
						</div>

						<div>
							<button className="btn-primary">
								Get Started <Image src={ArrowRight} className="h-3.5 w-3" />
							</button>
						</div>
					</aside>
					{/* Left Side */}

					{/* Right Side Starts here */}
					<aside className="relative z-20 w-full h-[300px] md:h-[320px] md:w-[440px]">
						<div className="absolute -right-4 -bottom-4 h-[70%] w-[70%] bg-ternary"></div>

						<iframe
							className="h-full w-full relative"
							src="https://www.youtube-nocookie.com/embed/_27uAZAVGtA?si=VLahgbTa476cL30o"
							title="YouTube video player"
							frameborder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							allowfullscreen
						></iframe>

						{!hideVideoThumbnail && (
							<div className="w-full h-full absolute top-0 left-0">
								<Image
									src={VideoThumbnail}
									alt="Video Thumbnail"
									className="w-full h-full object-cover"
								/>
								<Image
									src={PlayIcon}
									alt="Video Thumbnail"
									className="w-20 h-20 absolute top-[40%] left-[40%] cursor-pointer hover:shadow-xl hover:shadow-white rounded-full"
									onClick={() => setHideVideoThumbnail(true)}
								/>
							</div>
						)}
					</aside>
					{/* Right Side Starts here */}
				</section>
			</div>
			{/* Hero Section Ends here */}
			<div className="relative bg-secondary pt-10 ">
				{/* Partners Section Starts here */}
				<section className="partners-section max-w-screen-2xl mx-auto w-full">
					<div className="flex flex-col gap-2 md:gap-4 lg:gap-6 text-center max-w-[550px]">
						<h2 className="section-heading">Trusted by</h2>
						<p className="paragraph">
							Sell your home with confidence – choose ListingPartners, your
							go-to platform for connecting with the perfect.
						</p>
					</div>

					<div className="flex justify-center items-center gap-4 md:gap-6 lg:gap-14 pb-10">
						<div className="partner-item">
							<Image
								src={Century21}
								alt="Century21"
								className="partner-image"
								priority
							/>
						</div>
						<div className="partner-item">
							<Image
								src={Hooker}
								alt="Hooker"
								className="partner-image"
								priority
							/>
						</div>
						<div className="partner-item">
							<Image
								src={McGrath}
								alt="McGrath"
								className="partner-image"
								priority
							/>
						</div>
						<div className="partner-item">
							<Image
								src={Elders}
								alt="Century21"
								className="partner-image"
								priority
							/>
						</div>
						<div className="partner-item">
							<Image
								src={Remax}
								alt="Remax"
								className="partner-image"
								priority
							/>
						</div>
					</div>
				</section>
				<Image
					src={Pattern}
					alt="Pattern"
					className="absolute w-full bottom-0 z-10"
					priority
				/>
			</div>
			{/* Partners Section Ends here */}

			{/* How-it-works Section Starts here */}
			<div className="relative z-0 bg-primary overflow-hidden">
				<Image
					src={Union}
					alt="Union"
					className="w-full h-[2200px] absolute -top-20 -right-40 -z-[1]"
					priority
				/>
				<section className="how-it-works-section max-w-screen-2xl mx-auto w-full">
					{/* Heading /  Header*/}
					<div className="flex flex-col gap-2 md:gap-4 lg:gap-6 text-center max-w-[550px]">
						<h2 className="section-heading">How does it work?</h2>
						<p className="paragraph">
							Sell your home with confidence – choose ListingPartners, your
							go-to platform for connecting with the perfect.
						</p>
					</div>

					{/* What-to-do Step-----1 Starts here */}
					<section className="two-column-layout py-16">
						{/* Left-Side Starts here */}
						<aside className="h-full w-full flex items-center">
							<div className="description-box">
								<p className="step-title">
									<Image
										src={Line}
										alt="Line"
										className="w-6 h-[2px]"
										priority
									/>
									Step one
								</p>
								<h2 className="section-heading">Assessment</h2>
								<p className="paragraph">
									Sellers complete a comprehensive form outlining their property
									details, needs, and sales strategy preferences.
								</p>
								<p className="paragraph">
									We analyze this information to understand their specific
									requirements.
								</p>
							</div>
						</aside>
						{/* Left-Side Ends here */}

						{/* Right-Side Starts here */}
						<aside className="h-full w-full flex justify-center relative">
							<div className="w-[60%] h-[70%] sm:w-[35%] sm:h-[45%] md:w-[90%] md:h-full lg:w-full relative">
								<Image
									src={StepOneImage}
									alt="Property Image"
									className="w-[75%] absolute right-0 top-0"
									priority
								/>

								<Image
									src={Scan}
									alt="Scan"
									className="icon-size absolute top-4 md:top-6 left-[17%] md:left-[18%]"
									priority
								/>

								<Image
									src={Form}
									alt="Form Image"
									className="w-[75%] absolute -bottom-32 left-0"
									priority
								/>
							</div>
						</aside>
						{/* Right-Side Ends here */}
					</section>
					{/* What-to-do Step-----1 Ends here */}

					{/* What-to-do Step-----2 Starts here */}
					<section className="two-column-layout py-16">
						{/* Left-Side Starts here */}
						<aside className="h-full w-full relative">
							<div className="h-full w-full md:h-[80%] flex items-end relative">
								<Image
									src={StepTwoIcon}
									alt=""
									className="icon-size absolute right-[30%] md:right-[10%] lg:right-1/4 top-10 z-0"
									priority
								/>

								<Image
									src={StepTwoLower}
									alt=""
									className="w-[44%] h-[80%] object-fill absolute left-8 bottom-8 z-0"
									priority
								/>
								<Image
									src={StepTwoMiddle}
									alt=""
									className="w-[44%] h-[80%] object-fill absolute left-4 bottom-4 z-0"
									priority
								/>
								<Image
									src={StepTwoUpper}
									alt="Property Image"
									className="w-[44%] h-[80%] object-fill z-10"
									priority
								/>
								<Image
									src={StepTwoCard}
									alt="Property Image"
									className="object-fill w-[40%] absolute z-[11] -bottom-2 sm:-bottom-10 md:-bottom-6 left-28 md:left-16"
									priority
								/>
							</div>
						</aside>
						{/* Left-Side Ends here */}

						{/* Right-Side Starts here */}
						<aside className="h-full w-full flex md:justify-end items-center order-first md:order-last">
							<div className="description-box w-[75%] md:w-[80%] lg:w-[90%]">
								<p className="step-title">
									<Image
										src={Line}
										alt="Line"
										className="w-6 h-[2px]"
										priority
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
						{/* Right-Side Ends here */}
					</section>
					{/* What-to-do Step-----2 Ends here */}

					{/* What-to-do Step-----3 Starts here */}
					<section className="two-column-layout py-16">
						{/* Left-Side Starts here */}
						<aside className="h-full w-full flex items-center">
							<div className="description-box">
								<p className="step-title">
									<Image
										src={Line}
										alt="Line"
										className="w-6 h-[2px]"
										priority
									/>
									Step three
								</p>
								<h2 className="section-heading">Matching</h2>
								<p className="paragraph">
									Leveraging our extensive network, we identify and match
									sellers with top-performing real estate agents in their area.
								</p>
								<p className="paragraph">
									{
										"Agents are selected based on expertise, local market knowledge, and alignment with the seller's goals."
									}
								</p>
							</div>
						</aside>
						{/* Left-Side Ends here */}

						{/* Right-Side Starts here */}
						<aside className="h-full w-full flex justify-center relative">
							<div className="w-[60%] h-[80%] md:h-full md:w-full lg:w-full relative">
								<Image
									src={StepThreeLeft}
									alt="Property Image"
									className="w-[46%]"
									priority
								/>

								<Image
									src={StepThreeIcon}
									alt="icon"
									className="icon-size absolute left-[37%] lg:left-[40%] -bottom-5 lg:-bottom-7 z-[1]"
									priority
								/>

								<Image
									src={StepThreeRight}
									alt="Property Image"
									className="w-[46%] absolute right-7 -bottom-28 lg:-bottom-72"
									priority
								/>

								<Image
									src={StepThreeCard}
									alt="Property Image"
									className="w-[30%] absolute left-[5%] lg:left-[10%] -bottom-10 lg:-bottom-32"
									priority
								/>
							</div>
						</aside>
						{/* Right-Side Ends here */}
					</section>
					{/* What-to-do Step-----3 Ends here */}

					{/* What-to-do Step-----4 Starts here */}
					<section className="two-column-layout py-16">
						{/* Left-Side Starts here */}
						<aside className="h-full w-full flex justify-center lg:justify-end relative">
							<Image
								src={StepFourImage}
								alt=""
								className="absolute w-[50%] sm:w-[35%] md:w-[75%] lg:w-[75%]"
								priority
							/>
							<Image
								src={StepFourIcon}
								alt=""
								className="icon-size absolute right-[45%] sm:right-[32%] left-14 md:left-[16%] lg:left-[16%] top-4"
								priority
							/>
							<Image
								src={StepFourCard}
								alt=""
								className="absolute w-[50%] -bottom-14 md:bottom-1 lg:bottom-3 right-[40%] sm:right-[10%] sm:w-[35%] md:w-[75%] lg:w-[75%] md:left-[10%] lg:left-[8%]"
								priority
							/>
						</aside>
						{/* Left-Side Ends here */}

						{/* Right-Side Starts here */}
						<aside className="h-full w-full flex md:justify-end items-center order-first md:order-last">
							<div className="description-box w-[75%] md:w-[80%] lg:w-[90%]">
								<p className="step-title">
									<Image
										src={Line}
										alt="Line"
										className="w-6 h-[2px]"
										priority
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
						{/* Right-Side Ends here */}
					</section>
					{/* What-to-do Step-----4 Ends here */}

					<div className="w-full flex justify-center">
						<button className="btn-primary">
							Get Started <Image src={ArrowRight} className="h-3.5 w-3" />
						</button>
					</div>
				</section>
			</div>
			{/* How-it-works Section Ends here */}

			{/* Services Section Starts here */}
			<div className="relative z-0 bg-secondary">
				<section className="services-section max-w-screen-2xl mx-auto w-full">
					{/* Heading /  Header*/}
					<div className="flex flex-col gap-2 md:gap-4 lg:gap-6 text-center max-w-[550px]">
						<h2 className="section-heading">You hold all the cards</h2>
						<p className="paragraph">
							Sell your home with confidence – choose ListingPartners, your
							go-to platform for connecting with the perfect.
						</p>
					</div>

					{/* Service-----1 Starts here */}
					<section className="two-column-layout">
						{/* Left-Side Starts here */}
						<aside className="h-full w-full flex items-center">
							<div className="description-box !w-full">
								<p className="step-title">
									<Image
										src={Line}
										alt="Line"
										className="w-6 h-[2px] mx-auto"
										priority
									/>
									Consult
								</p>
								<h2 className="section-heading">Consultation and decision</h2>
								<p className="paragraph">
									Sellers have the opportunity to schedule consultations with
									the selected agents where sellers can ask questions, discuss
									strategies, and determine the best fit before making a
									decision.
								</p>

								<div className="mt-4">
									<button className="btn-primary">
										Book a time <Image src={ArrowRight} className="h-3.5 w-3" />
									</button>
								</div>
							</div>
						</aside>
						{/* Left-Side Ends here */}

						{/* Right-Side Starts here */}
						<aside className="h-full w-full flex justify-center relative z-0">
							<Image
								src={FirstServiceImage}
								alt="Property Image"
								className="w-full h-full sm:w-[90%] sm:h-[90%] md:w-full md:h-full object-fill"
								priority
							/>
							<Image
								src={FirstServiceIcon}
								alt="Property Image"
								className="icon-size absolute top-4 -left-2"
								priority
							/>
							<div className="w-[80%] h-[80%] md:w-[60%] md:h-[60%] sm:w-[70%] sm:h-[70%] bg-primary absolute -z-[1] -right-4 -bottom-4 md:-right-4 md:bottom-8 sm:right-8 sm:bottom-4"></div>
						</aside>
						{/* Right-Side Ends here */}
					</section>
					{/* Service-----1 Ends here */}

					{/* Service-----2 Starts here */}
					<section className="two-column-layout">
						{/* Left-Side Starts here */}
						<aside className="h-full w-full flex justify-center relative z-0">
							<Image
								src={SecondServiceImage}
								alt="Property Image"
								className="w-full h-full sm:w-[90%] sm:h-[90%] md:w-full md:h-full object-fill"
								priority
							/>
							<Image
								src={SecondServiceIcon}
								alt="Property Image"
								className="icon-size absolute top-5 -left-2"
								priority
							/>
							<div className="w-[80%] h-[80%] md:w-[60%] md:h-[60%] sm:w-[70%] sm:h-[70%] bg-primary absolute -z-[1] -left-4 -bottom-4 md:-left-4 md:bottom-8 sm:left-8 sm:bottom-4"></div>
						</aside>
						{/* Left-Side Ends here */}

						{/* Right-Side Starts here */}
						<aside className="h-full w-full flex md:justify-end items-center order-first md:order-last">
							<div className="description-box w-full">
								<p className="step-title">
									<Image
										src={Line}
										alt="Line"
										className="w-6 h-[2px]"
										priority
									/>
									Support
								</p>
								<h2 className="section-heading">
									Optimized selling experience
								</h2>
								<p className="paragraph w-[90%]">
									Throughout the selling process, we offer support, guidance,
									and advice to ensure a successful sale.
								</p>
								<p className="paragraph w-[85%]">
									We aim for a seamless experience, empowering sellers and
									agents toward their shared goal: a successful home sale.
								</p>

								<div className="mt-4">
									<button className="btn-primary">
										Contact us <Image src={ArrowRight} className="h-3.5 w-3" />
									</button>
								</div>
							</div>
						</aside>
						{/* Right-Side Ends here */}
					</section>
					{/* Service-----2 Ends here */}
				</section>
			</div>
			{/* Services section Ends here */}

			{/* Slider section Starts here */}
			<div className="relative bg-primary">
				<section className="slider-section max-w-screen-2xl mx-auto w-full">
					<div className="two-column-layout">
						<aside className="h-full w-full flex items-center">
							<div className="description-box !w-full">
								<p className="step-title">
									<Image
										src={Line}
										alt="Line"
										className="w-6 h-[2px]"
										priority
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
									<button className="btn-primary">
										Book a time <Image src={ArrowRight} className="h-3.5 w-3" />
									</button>
								</div>
							</div>
						</aside>

						<aside className="w-full">
							{/* Card */}
							<div className="relative">
								<SwiperSlider
									slidesData={reviews}
									slidesPerView={1.5}
									spaceBetween={40}
								>
									{reviews.map((data) => (
										<SwiperSlide key={data?.id} className="z-0">
											<Card key={data?.id} review={data} />
										</SwiperSlide>
									))}
								</SwiperSlider>
							</div>
							{/* Commented Cards Ends here  */}
						</aside>
					</div>
				</section>
			</div>
			{/* Slider section Ends here */}

			{/* Footer section Starts here */}
			<div className="relative bg-primary">
				<footer className="footer-section max-w-screen-2xl mx-auto w-full">
					<aside className="flex flex-col justify-between">
						<section className="flex justify-between align-top">
							<Image
								src={Logo}
								className="w-[100px] h-[25px] md:w-[150px] md:h-[25px] lg:w-[207px] lg:h-[30px]"
							/>

							<div className="footer-links-box relative lg:-left-20">
								<p className="paragraph mb-2 text-negative/50 font-medium uppercase">
									social
								</p>
								<div className="flex gap-2 md:gap-4">
									<Image src={Linkedin} className="h-3 w-3 md:w-4 md:h-4" />
									<Image src={TwitterX} className="h-3 w-3 md:w-4 md:h-4" />
									<Image src={Instagram} className="h-3 w-3 md:w-4 md:h-4" />
								</div>
							</div>
						</section>

						<section className="flex flex-col gap-4">
							<p className="paragraph">ABN: 86 768 265 615</p>
							<p className="paragraph w-[55%]">
								Level 13 / 465 Victoria Ave, Chatswood New South Wales Australia
								2067
							</p>

							<p className="text-xs md:text-sm mt-4 opacity-50">
								Copyright © 2023, ListingPartners. All rights reserved.
							</p>
						</section>
					</aside>

					<aside className="grid grid-cols-3 gap-1 sm:gap-2 md:gap-3 order-1">
						<div className="footer-links-box">
							<p className="paragraph mb-1 text-negative/50 font-medium uppercase">
								Services
							</p>

							<a href="#" className="paragraph hover:underline">
								Get Started
							</a>
							<a href="#" className="paragraph hover:underline">
								How it works
							</a>
							<a href="#" className="paragraph hover:underline">
								Our Support
							</a>
							<a href="#" className="paragraph hover:underline">
								Testimonials
							</a>
							<a href="#" className="paragraph hover:underline">
								FAQ
							</a>
						</div>

						<div className="footer-links-box">
							<p className="paragraph mb-1 text-negative/50 font-medium uppercase">
								Services
							</p>

							<a href="#" className="paragraph hover:underline">
								Home
							</a>
							<a href="#" className="paragraph hover:underline">
								About us
							</a>
							<a href="#" className="paragraph hover:underline">
								Terms of service
							</a>
							<a href="#" className="paragraph hover:underline">
								Privacy policy
							</a>
						</div>

						<div className="footer-links-box gap-4">
							<p className="paragraph text-negative/50 font-medium uppercase">
								Contact
							</p>

							<p className="paragraph">+61 1300 619 528</p>

							<div>
								<button className="btn-primary text-[10px]">
									Contact us <Image src={ArrowRight} className="h-3.5 w-3" />
								</button>
							</div>
						</div>
					</aside>
				</footer>
			</div>
			{/* Footer section Ends here */}
		</main>
	)
}
