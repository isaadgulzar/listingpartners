/* eslint-disable jsx-a11y/alt-text */
"use client"
import React, { useState, useEffect } from "react"
import TagManager from "react-gtm-module"

import Image from "next/image"
import Link from "next/link"

import d_about_hero from "../../public/assets/_about-page/d_about_hero.png"
import support from "../../public/assets/_about-page/support.png"

import ArrowRight from "../../public/assets/icons/ArrowRight.svg"
import Line from "../../public/assets/icons/Line.svg"

import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import QuestionAnswer from "@/components/QuestionAnswer"

const AboutUsPage = () => {
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

	return (
		<main className={`w-full font-montserrat text-negative`}>
			<Navbar />

			<div className="relative bg-secondary pt-12 md:pt-[100px] pb-[90px] lg:pb-48">
				<div className="grid md:grid-cols-2 gap-12 md:gap-[120px] main-container md:px-0 max-w-5xl mx-auto w-full">
					<div className=" flex flex-col gap-5">
						<h1 className="section-heading">About Us</h1>
						<div className="max-w-[480px] flex flex-col gap-4">
							<p className="paragraph">
								At Listing Partners, Frank and our Sydney-based team are
								dedicated to one mission: ensuring sellers get the best value
								and results for their property sales. With a passion for real
								estate and a commitment to excellence, we understand that
								selling your home is more than a transaction; it's a pivotal
								moment in your life.
							</p>
							<p className="paragraph">
								Our approach is simple yet powerful. We leverage our expertise
								and vast network to meticulously match sellers with top-tier
								real estate agents who share our dedication to achieving optimal
								results. Operating from the heart of Sydney, Australia, we
								prioritize the seller's interests, striving for transparency,
								trust, and personalized guidance throughout the selling journey.
							</p>
							<p className="paragraph">
								With Listing Partners, it's more than just selling a property;
								it's about empowering sellers to make informed decisions,
								ensuring a smooth and rewarding selling experience. Let us be
								your trusted partner in achieving the best value and results for
								your property sale.
							</p>
							<p className="paragraph">
								With every innovation we create, we aim to bridge the gap
								between cutting-edge technology and everyday life. Our goal is
								to empower you with tools that amplify your abilities, allowing
								you to focus on what truly matters while our AI works alongside
								you.
							</p>
						</div>
						<div className="flex flex-col gap-5 pt-5">
							<p className="paragraph font-medium text-ternary">Contact:</p>
							<div className="flex flex-col paragraph">
								<a href="#">+61 1300 619 528</a>
								<a href="#">ABN: 86 768 265 615</a>
							</div>
							<div className="flex flex-col gap-2 paragraph">
								Level 13 / 465 Victoria Ave, Chatswood New South Whales
								Australia 2067
							</div>
						</div>
					</div>
					<div className="">
						<Image
							src={d_about_hero}
							alt="d_about_hero"
							className="md:w-[380px] md:h-[440px]"
							width={"auto"}
							height={"auto"}
						/>
					</div>
				</div>
			</div>

			{/* FAQs */}
			<div className="relative bg-secondary pb-[50px] md:pb-[120px]">
				<section className="main-container md:px-0 max-w-5xl mx-auto w-full">
					<QuestionAnswer />
				</section>
			</div>

			{/* Services Section */}
			<div id="services" className="bg-primary">
				<section className="main-container md:px-0 items-center max-w-5xl mx-auto pt-10 md:pt-[140px] pb-[50px] lg:pb-[140px]">
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
									Support
								</p>
								<h2 className="section-heading">Need assistance?</h2>
								<p className="paragraph max-w-md">
									Our support team is here to assist you with any questions or
									concerns you may have.
								</p>
								<p className="paragraph max-w-md">
									We're dedicated to ensuring your satisfaction and making your
									experience with us as easy and enjoyable as possible.
								</p>
								<div className="mt-4">
									<button
										onClick={() => setShowContactModal(true)}
										className="btn-primary"
									>
										Contact Us{" "}
										<Image
											src={ArrowRight}
											alt="ArrowRight"
											className="h-3 w-3.5"
											width={"auto"}
											height={"auto"}
										/>
									</button>
								</div>
							</div>
						</aside>
						<Image
							src={support}
							alt="support"
							className="md:w-[480px] h-[282px] md:h-[405px]"
							width={"auto"}
							height={"auto"}
						/>
					</section>
				</section>
			</div>

			<Footer />
		</main>
	)
}

export default AboutUsPage
