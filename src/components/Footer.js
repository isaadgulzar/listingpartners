import React, { useState } from "react"

import Image from "next/image"
import Link from "next/link"

import Logo from "../../public/assets/Logo.svg"
import ArrowRight from "../../public/assets/icons/ArrowRight.svg"

import Instagram from "../../public/assets/icons/instagram.svg"
import Linkedin from "../../public/assets/icons/linkedin-in.svg"
import TwitterX from "../../public/assets/icons/x.svg"

const Footer = ({ setShowContactModal }) => {
	return (
		<footer>
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
							width={"auto"}
							height={"auto"}
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
								<a href="#" target="_blank" className="link">
									<Image
										src={Linkedin}
										alt="image"
										className="h-4 w-4 md:w-5 md:h-5"
										width={"auto"}
										height={"auto"}
									/>
								</a>
								<a href="#" target="_blank" className="link">
									<Image
										src={TwitterX}
										alt="image"
										className="h-4 w-4 md:w-5 md:h-5"
										width={"auto"}
										height={"auto"}
									/>
								</a>
								<a href="#" target="_blank" className="link">
									<Image
										src={Instagram}
										alt="image"
										className="h-4 w-4 md:w-5 md:h-5"
										width={"auto"}
										height={"auto"}
									/>
								</a>
							</div>
						</div>
						<div className="footer-links-container">
							<p className="footer-links-heading">Services</p>
							<a href="#" className="link">
								Get Started
							</a>
							<a href="#hiw" className="link">
								How it works
							</a>
							<a href="#support" className="link">
								Our Support
							</a>
							<a href="#testimonials" className="link">
								Testimonials
							</a>
							<Link href="/about-us" className="link">
								FAQ
							</Link>
						</div>

						<div className="footer-links-container">
							<p className="footer-links-heading">Navigation</p>
							<Link href="/" className="link">
								Home
							</Link>
							<Link href="/about-us" className="link">
								About
							</Link>
							<Link href="/privacy-policy" className="link">
								Terms of service
							</Link>
							<Link href="/privacy-policy" className="link">
								Privacy policy
							</Link>
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
										className="w-3.5 h-3.5 flex-shrink-0"
										width={"auto"}
										height={"auto"}
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
		</footer>
	)
}

export default Footer
