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

const PrivacyPolicyPage = () => {
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

			<div className="relative bg-secondary pt-12 md:pt-[100px] pb-[90px] lg:pb-[120px]">
				<div className="flex gap-12 md:gap-[120px] main-container md:px-0 max-w-5xl mx-auto w-full">
					<div className=" flex flex-col gap-5">
						<h1 className="section-heading">Privacy policy</h1>
						<div className="max-w-[580px] flex flex-col gap-5">
							<div className="flex flex-col gap-1">
								<p className="paragraph font-semibold text-ternary">
									Collection of Personal Information
								</p>
								<div className="flex flex-col gap-5">
									<p className="paragraph">
										Listing Partners collects personal information from sellers
										to facilitate the process of matching them with suitable
										real estate agents. Information collected may include:
									</p>
									<ul className="list-disc list-inside">
										<li>Name</li>
										<li>Address</li>
										<li>Contact details (phone number, email)</li>
										<li>Property details</li>
										<li>Preferred consultation times</li>
									</ul>
								</div>
							</div>
							<div className="flex flex-col gap-1">
								<p className="paragraph font-semibold text-ternary">
									Use of Information
								</p>
								<p className="paragraph">
									The collected information is used solely for the purpose of
									assessing seller needs and preferences and facilitating
									connections with real estate agents aligned with their
									requirements. This information is not shared with third
									parties without explicit consent, except as required by law.
								</p>
							</div>
							<div className="flex flex-col gap-1">
								<p className="paragraph font-semibold text-ternary">
									Protection of Information
								</p>
								<p className="paragraph">
									Listing Partners takes reasonable steps to safeguard the
									personal information collected, utilizing secure storage and
									strict access controls to prevent unauthorized access,
									disclosure, or misuse.
								</p>
							</div>
							<div className="flex flex-col gap-1">
								<p className="paragraph font-semibold text-ternary">
									Access and Correction
								</p>
								<p className="paragraph">
									Sellers have the right to access, update, or correct their
									personal information held by Listing Partners. Requests for
									such access or changes can be made by contacting us directly.
								</p>
							</div>
							<div className="flex flex-col gap-1">
								<p className="paragraph font-semibold text-ternary">Consent</p>
								<p className="paragraph">
									By submitting personal information to Listing Partners,
									sellers consent to the collection, use, and disclosure of
									their information as outlined in this privacy policy.
								</p>
							</div>
							<div className="flex flex-col gap-1">
								<p className="paragraph font-semibold text-ternary">Contact:</p>
								<p className="paragraph">
									For any inquiries regarding this privacy policy or the
									handling of personal information, please contact:
								</p>
								<div className="flex flex-col paragraph pt-5">
									<a href="#">+61 1300 619 528</a>
									<a href="#">ABN: 86 768 265 615</a>
								</div>
								<div className="flex flex-col gap-2 paragraph max-w-xs pt-5">
									Level 13 / 465 Victoria Ave, Chatswood New South Whales
									Australia 2067
								</div>
							</div>
							<div className="flex flex-col gap-1">
								<p className="paragraph font-semibold text-ternary">
									Changes to Policy
								</p>
								<p className="paragraph">
									Listing Partners reserves the right to update or modify this
									privacy policy as necessary. Any changes will be posted on our
									website, and sellers are encouraged to review this policy
									periodically.
								</p>
							</div>
						</div>
					</div>
				</div>
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

export default PrivacyPolicyPage
