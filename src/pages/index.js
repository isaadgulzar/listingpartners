/* eslint-disable jsx-a11y/alt-text */
"use client"
import React, { useState, useEffect } from "react"
import TagManager from "react-gtm-module"

import Image from "next/image"

import { SwiperSlide } from "swiper/react"

import d_video_hero from "../../public/assets/_landing-page/d_video_hero.png"
import m_video_hero from "../../public/assets/_landing-page/m_video_hero.png"

import d_hiw_assessment from "../../public/assets/_landing-page/d_hiw_assessment.png"
import d_hiw_recommendations from "../../public/assets/_landing-page/d_hiw_recommendations.png"
import d_hiw_matching from "../../public/assets/_landing-page/d_hiw_matching.png"
import d_hiw_engagement from "../../public/assets/_landing-page/d_hiw_engagement.png"
import m_hiw_assessment from "../../public/assets/_landing-page/m_hiw_assessment.png"
import m_hiw_recommendations from "../../public/assets/_landing-page/m_hiw_recommendations.png"
import m_hiw_matching from "../../public/assets/_landing-page/m_hiw_matching.png"
import m_hiw_engagement from "../../public/assets/_landing-page/m_hiw_engagement.png"

import d_help_consult from "../../public/assets/_landing-page/d_help_consult.png"
import d_help_support from "../../public/assets/_landing-page/d_help_support.png"
import m_help_consult from "../../public/assets/_landing-page/m_help_consult.png"
import m_help_support from "../../public/assets/_landing-page/m_help_support.png"

import d_carousel_01 from "../../public/assets/_landing-page/d_carousel_01.png"
import d_carousel_02 from "../../public/assets/_landing-page/d_carousel_02.png"
import d_carousel_03 from "../../public/assets/_landing-page/d_carousel_03.png"

import d_union from "../../public/assets/backgrounds/d_union.svg"
import m_union from "../../public/assets/backgrounds/m_union.svg"

import d_pattern from "../../public/assets/backgrounds/d_pattern.svg"
import m_pattern from "../../public/assets/backgrounds/m_pattern.svg"

import Century21 from "../../public/assets/partners/century21.svg"
import Elders from "../../public/assets/partners/Elders.svg"
import Hooker from "../../public/assets/partners/Hooker.svg"
import McGrath from "../../public/assets/partners/McGrath.svg"
import Remax from "../../public/assets/partners/Remax.svg"

import ArrowRight from "../../public/assets/icons/ArrowRight.svg"
import Line from "../../public/assets/icons/Line.svg"

import SwiperSlider from "@/components/SwiperSlider"

import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Card from "@/components/Card"
import ContactModal from "@/components/ContactModal"

const HomePage = () => {
	const [showContactModal, setShowContactModal] = useState(false)
	const [hideVideoThumbnail, setHideVideoThumbnail] = useState(false)

	useEffect(() => {
		const handleRouteChange = (url) => {
			// Initialize GTM on the initial page load
			TagManager.initialize({ gtmId: "GTM-PQNT5XPD" })

			// Send a page view event on route change
			window.dataLayer.push({
				event: "pageview",
				pagePath: url,
			})
		}

		// Initialize GTM and handle route changes
		const pageUrl = window?.location?.href | ""
		handleRouteChange(pageUrl)
	}, [])

	const reviews = [
		{
			id: 1,
			name: "Sarah",
			location: "Victoria",
			desc: `We couldn't have been more delighted with the Listing Partners! 

      Their method of handpicking premier agents and creating unique terms and conditions resulted in a flawlessly smooth selling experience.`,
			image: d_carousel_01,
		},
		{
			id: 2,
			name: "Telal",
			location: "Queensland",
			desc: `Their proficiency in selecting the optimal agents for our selling requirements, while establishing fixed commissions and advertising budgets, ensured a stress-free process. 

      Their commitment to maintaining our predefined expectations without altering benefits for the agents was highly appreciated.`,
			image: d_carousel_02,
		},
		{
			id: 3,
			name: "Marc",
			location: "New South Wales",
			desc: `Collaborating with the Listing Partners was an exceptional journey! They adeptly guided us through the selling process by thoughtfully selecting the finest agents for our auction. 

      Their exclusive strategy concerning terms and conditions, combined with upfront cost support, highlighted their unwavering dedication. 
      
      A special acknowledgment to Nathan from their team for his exceptional front-facing role with the agents.`,
			image: d_carousel_03,
		},
		{
			id: 4,
			name: "Danny",
			location: "New South Wales",
			desc: `Listing Partners streamlined the sale of our house! Their fresh approach involved meticulously selecting the top five local agents and organizing an auction that catered to our preferences, open for any agents willing to work on our terms. 

      Their distinctive business proposal ensured a smooth and uninterrupted process from start to finish.`,
			image: d_carousel_01,
		},
		{
			id: 5,
			name: "Donna",
			location: "Victoria",
			desc: `Selling alongside the Listing Partners was a game-changer! 

			Their personalized guidance accompanied us at every step. They adeptly negotiated fixed commissions and advertising budgets, allowing us to cover upfront costs using settlement fees. 
			
			Despite being a newly established startup, taking a chance on them proved incredible, given their focus on a limited clientele to provide exceptional service.`,
			image: d_carousel_02,
		},
	]

	return (
		<main className={`w-full font-montserrat text-negative`}>
			<Navbar setShowContactModal={setShowContactModal} />

			{/* Hero Section */}
			<div className="relative bg-primary">
				<Image
					src={d_union}
					alt="d_union"
					className="hidden md:block transform scale-x-[-1] object-cover w-[500px] md:w-[1370px] h-[1700px] md:h-[1000px] absolute -top-[300px] md:top-[0px] left-20 md:left-0"
					width={"auto"}
					height={"auto"}
				/>
				<Image
					src={m_union}
					alt="m_union"
					className="block md:hidden absolute -top-[50px] md:top-[0px] left-0"
					width={"auto"}
					height={"auto"}
				/>
				<section className="hero-section max-w-screen-2xl mx-auto w-full px-5 xl:px-10">
					<aside className="relative pt-16 lg:pt-0">
						<h1 className="text-4xl lg:text-7xl font-bold font-montserrat !leading-[normal] tracking-[1.08px] mb-5 lg:mb-2.5 max-w-lg">
							Let’s find your perfect match{" "}
							<span className="text-ternary -ml-3 lg:-ml-6">.</span>
						</h1>
						<p className="paragraph max-w-sm pb-10">
							Sell your home with confidence – choose ListingPartners, your
							go-to platform for connecting with the perfect real estate agent
							in Australia.
						</p>
						<button
							onClick={() => setShowContactModal(true)}
							className="btn-primary max-w-max"
						>
							Get Started{" "}
							<Image
								src={ArrowRight}
								alt="ArrowRight"
								className="h-3.5 w-3.5 flex-shrink-0"
								width={"auto"}
								height={"auto"}
							/>
						</button>
					</aside>
					<aside className="relative w-full h-[300px] md:h-[400px] md:w-[550px]">
						<iframe
							className="md:w-[500px] h-full md:h-[350px] relative"
							src="https://www.youtube-nocookie.com/embed/_27uAZAVGtA?si=VLahgbTa476cL30o"
							title="YouTube video player"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						></iframe>
						{!hideVideoThumbnail && (
							<div className="w-full h-full absolute top-0 left-0">
								<Image
									onClick={() => !setHideVideoThumbnail(!hideVideoThumbnail)}
									src={d_video_hero}
									alt="d_video_hero"
									className="hidden md:block w-full h-full"
									width={"auto"}
									height={"auto"}
									priority
								/>
								<Image
									onClick={() => !setHideVideoThumbnail(!hideVideoThumbnail)}
									src={m_video_hero}
									alt="m_video_hero"
									className="block md:hidden"
									width={"auto"}
									height={"auto"}
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
					<div className="grid grid-cols-2 lg:flex justify-center items-center gap-10 lg:gap-14">
						<div className="partner-item">
							<Image
								src={Century21}
								alt="Century21"
								className="h-10 lg:h-12 w-[236px]"
								width={"auto"}
								height={"auto"}
							/>
						</div>
						<div className="partner-item">
							<Image
								src={Hooker}
								alt="Hooker"
								className="h-10 lg:h-12 w-[191px]"
								width={"auto"}
								height={"auto"}
							/>
						</div>
						<div className="partner-item">
							<Image
								src={McGrath}
								alt="McGrath"
								className="h-10 lg:h-12 w-[166px]"
								width={"auto"}
								height={"auto"}
							/>
						</div>
						<div className="partner-item">
							<Image
								src={Elders}
								alt="Elders"
								className="h-10 lg:h-12 w-[123px]"
								width={"auto"}
								height={"auto"}
							/>
						</div>
						<div className="col-span-2 md:col-auto flex items-center justify-center partner-item">
							<Image
								src={Remax}
								alt="Remax"
								className="h-10 lg:h-12 w-[172px]"
								width={"auto"}
								height={"auto"}
							/>
						</div>
					</div>
				</section>
				<Image
					src={d_pattern}
					alt="d_pattern"
					className="hidden md:block w-full mt-20"
					width={"auto"}
					height={"auto"}
				/>
				<Image
					src={m_pattern}
					alt="m_pattern"
					className="block md:hidden w-full mt-20"
					width={"auto"}
					height={"auto"}
				/>
			</div>

			{/* How-it-works Section */}
			<div id="hiw" className="relative bg-primary overflow-hidden">
				<Image
					src={d_union}
					alt="d_union"
					className="hidden md:block w-full h-[1935px] absolute top-10 -right-56 z-10"
					width={"auto"}
					height={"auto"}
				/>
				<div className="max-w-screen-2xl mx-auto bg-primary">
					<section className="main-container 	md:px-0 items-center max-w-5xl mx-auto gap-[60px] lg:gap-[140px] pb-[60px] lg:pb-[180px] relative">
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
											width={"auto"}
											height={"auto"}
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
										src={d_hiw_assessment}
										alt="m_hiw_assessment"
										className="hidden md:block md:w-[480px] md:h-[430px]"
										width={"auto"}
										height={"auto"}
									/>
									<Image
										src={m_hiw_assessment}
										alt="m_hiw_assessment"
										className="block md:hidden"
										width={"auto"}
										height={"auto"}
									/>
								</div>
							</aside>
						</section>
						{/*Step 2 */}
						<section className="two-column-layout relative z-20">
							<aside className="relative mr-auto">
								<div className="relative">
									<Image
										src={d_hiw_recommendations}
										alt="m_hiw_assessment"
										className="hidden md:block md:w-[480px] md:h-[450px]"
										width={"auto"}
										height={"auto"}
									/>
									<Image
										src={m_hiw_recommendations}
										alt="m_hiw_assessment"
										className="block md:hidden"
										width={"auto"}
										height={"auto"}
									/>
								</div>
							</aside>
							<aside className="h-full w-full flex md:justify-end items-center order-first md:order-last">
								<div className="description-box w-[75%] md:w-[80%] lg:w-[90%]">
									<p className="step-title">
										<Image
											src={Line}
											alt="Line"
											className="w-6 h-[2px]"
											width={"auto"}
											height={"auto"}
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
											width={"auto"}
											height={"auto"}
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
								<div className="relative">
									<Image
										src={d_hiw_matching}
										alt="m_hiw_assessment"
										className="hidden md:block md:w-[480px] md:h-[430px]"
										width={"auto"}
										height={"auto"}
									/>
									<Image
										src={m_hiw_matching}
										alt="m_hiw_assessment"
										className="block md:hidden"
										width={"auto"}
										height={"auto"}
									/>
								</div>
							</aside>
						</section>
						{/*Step 4 */}
						<section className="two-column-layout">
							<div className="mr-auto">
								<div className="relative">
									<Image
										src={d_hiw_engagement}
										alt="m_hiw_assessment"
										className="hidden md:block md:w-[480px] md:h-[460px]"
										width={"auto"}
										height={"auto"}
									/>
									<Image
										src={m_hiw_engagement}
										alt="m_hiw_assessment"
										className="block md:hidden"
										width={"auto"}
										height={"auto"}
									/>
								</div>
							</div>
							<aside className="h-full w-full flex md:justify-end items-center order-first md:order-last">
								<div className="description-box w-[75%] md:w-[80%] lg:w-[90%]">
									<p className="step-title">
										<Image
											src={Line}
											alt="Line"
											className="w-6 h-[2px]"
											width={"auto"}
											height={"auto"}
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
							<button
								onClick={() => setShowContactModal(true)}
								className="btn-primary"
							>
								Get started today{" "}
								<Image
									src={ArrowRight}
									alt="ArrowRight"
									className="h-3.5 w-3.5 flex-shrink-0"
									width={"auto"}
									height={"auto"}
								/>
							</button>
						</div>
					</section>
				</div>
			</div>

			{/* support Section */}
			<div id="support" className="bg-secondary">
				<section className="main-container items-center max-w-5xl mx-auto gap-[70px] lg:gap-[140px] pb-[60px] lg:pb-[180px]">
					<div className="section-header">
						<h2 className="section-heading text-center">
							You hold all the cards
						</h2>
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
										width={"auto"}
										height={"auto"}
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
										Book a time{" "}
										<Image
											src={ArrowRight}
											alt="ArrowRight"
											className="h-3.5 w-3.5 flex-shrink-0"
											width={"auto"}
											height={"auto"}
										/>
									</button>
								</div>
							</div>
						</aside>
						<aside className="flex justify-center relative z-0">
							<Image
								src={d_help_consult}
								alt="d_help_consult"
								className="hidden md:block md:w-[460px] md:h-[340px]"
								width={"auto"}
								height={"auto"}
							/>
							<Image
								src={m_help_consult}
								alt="m_help_consult"
								className="block md:hidden"
								width={"auto"}
								height={"auto"}
							/>
						</aside>
					</section>
					<section className="two-column-layout md:!gap-8 lg:!gap-32">
						<aside className="flex justify-center relative z-0">
							<Image
								src={d_help_support}
								alt="d_help_support"
								className="hidden md:block md:w-[460px] md:h-[340px]"
								width={"auto"}
								height={"auto"}
							/>
							<Image
								src={m_help_support}
								alt="m_help_support"
								className="block md:hidden"
								width={"auto"}
								height={"auto"}
							/>
						</aside>
						<aside className="h-full w-full flex md:justify-end items-center order-first md:order-last">
							<div className="description-box w-full">
								<p className="step-title">
									<Image
										src={Line}
										alt="Line"
										className="w-6 h-[2px]"
										width={"auto"}
										height={"auto"}
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
									<button
										onClick={() => setShowContactModal(true)}
										className="btn-primary max-w-max"
									>
										Contact us{" "}
										<Image
											src={ArrowRight}
											alt="ArrowRight"
											className="h-3.5 w-3.5 flex-shrink-0"
											width={"auto"}
											height={"auto"}
										/>
									</button>
								</div>
							</div>
						</aside>
					</section>
				</section>
			</div>

			{/* Testimonials Section */}
			<div id="testimonials" className="bg-primary relative">
				<section className="main-container max-w-5xl mx-auto px-5 items-center pt-[60px] lg:pt-[100px] pb-[220px] lg:pb-[180px]">
					<div className="two-column-layout lg:gap-32">
						<aside className="h-full w-full flex items-center">
							<div className="description-box !w-full">
								<p className="step-title">
									<Image
										src={Line}
										alt="Line"
										className="w-6 h-[2px]"
										width={"auto"}
										height={"auto"}
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
										Book a time{" "}
										<Image
											src={ArrowRight}
											alt="ArrowRight"
											className="h-3.5 w-3.5 flex-shrink-0"
											width={"auto"}
											height={"auto"}
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

			<Footer setShowContactModal={setShowContactModal} />
			{showContactModal && (
				<ContactModal handleClose={() => setShowContactModal(false)} />
			)}
		</main>
	)
}

export default HomePage
