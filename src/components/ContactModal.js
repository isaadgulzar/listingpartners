'use client'
import React, { useState } from 'react'
import CalendlyEmbed from './CalendlyEmbed'

const ContactModal = ({ handleClose }) => {
	const [showModal, setShowModal] = useState(false)

	const toggleModal = () => {
		setShowModal(!showModal)
	}

	return (
		<div>
			<div>
				<button onClick={toggleModal}>Open Modal</button>
			</div>
			{!showModal && (
				<div className="fixed z-10 inset-0 overflow-y-auto">
					<div className="min-h-screen pt-4 px-4 pb-20 sm:block sm:p-0">
						<div className="fixed inset-0 transition-opacity">
							<div className="absolute inset-0 z-0 bg-secondary bg-opacity-90"></div>
						</div>
						<h1 className="main-heading text-center relative z-10 py-10">
							Sell smarter<span className="full-stop">.</span> Everyday
							<span className="full-stop">.</span>
						</h1>
						<div className="bg-primary w-full max-w-5xl mx-auto p-10 px-14 relative z-10 rounded-2xl">
							<div className="flex flex-col gap-10">
								<div className="flex flex-col gap-5">
									<h1 className="section-heading">Seller details form</h1>
									<p className="section-desc">
										Sell your home with confidence – choose ListingPartners,
										your go-to platform for connecting with the perfect.
									</p>
								</div>

								<div className="flex flex-col gap-5">
									<h2 className="block-heading">Property address</h2>
									<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
										<div className="input-group">
											<label className="input-label">Street Address</label>
											<input type="text" className="input-field" />
										</div>
										<div className="input-group">
											<label className="input-label">City</label>
											<input type="text" className="input-field" />
										</div>
										<div className="input-group">
											<label className="input-label">State / Province</label>
											<input type="text" className="input-field" />
										</div>
										<div className="input-group">
											<label className="input-label text-">Postal Code</label>
											<input type="text" className="input-field" />
										</div>
									</div>
								</div>

								<div className="flex flex-col gap-5">
									<h2 className="block-heading">Contact information</h2>
									<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
										<div className="input-group">
											<label className="input-label">First and Last name</label>
											<input type="text" className="input-field" />
										</div>
										<div className="input-group">
											<label className="input-label">Phone Number</label>
											<input type="text" className="input-field" />
										</div>
										<div className="input-group">
											<label className="input-label">Email</label>
											<input type="email" className="input-field" />
										</div>
									</div>
								</div>

								<div className="grid grid-cols-1 md:grid-cols-1 gap-8 flex flex-col gap-5">
									<div className="flex flex-col gap-5">
										<h2 className="block-heading">Contact date and time</h2>
										<CalendlyEmbed />
									</div>
								</div>

								<div className="flex flex-col gap-5">
									<h2 className="block-heading">Additional information</h2>
									<div className="input-group">
										<label className="input-label">Comments</label>
										<textarea
											className="input-field"
											rows={4}
											placeholder="Need to mention that our house has been renovated 6 months ago..."
										></textarea>
									</div>
								</div>

								<div className="flex flex-col gap-5">
									<label className="flex items-center gap-2">
										<input type="checkbox" className="input-checkbox" />
										<span className="font-montserrat text-negative flex-shrink-0">
											I consent to receiving marketing content...
										</span>
									</label>
									<label className="flex items-center gap-2">
										<input type="checkbox" className="input-checkbox" />
										<span className="font-montserrat text-negative flex-shrink-0">
											I consent to process of data and the ...{' '}
											<a href="#" className=" underline">
												Terms of Service
											</a>
										</span>
									</label>
								</div>

								<button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
									Submit →
								</button>
							</div>

							<div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
								<button
									onClick={handleClose}
									type="button"
									className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
								>
									Close
								</button>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	)
}

export default ContactModal
