import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import ArrowRight from "../../public/assets/icons/ArrowRight.svg"
import CalendlyEmbed from "./CalendlyEmbed"

const ContactModal = ({ handleClose }) => {
	const [showSuccessModal, setShowSuccessModal] = useState(false)
	const streetAddressInput = useRef(null)

	useEffect(() => {
		streetAddressInput.current.focus()
	}, [])

	const [formData, setFormData] = useState({
		streetAddress: "",
		city: "",
		stateProvince: "",
		postalCode: "",
		firstName: "",
		lastName: "",
		phoneNumber: "",
		email: "",
		additionalInfo: "",
		marketingConsent: false,
		dataProcessingConsent: false,
	})

	const handleChange = (e) => {
		const { name, value, type, checked } = e.target
		setFormData({
			...formData,
			[name]: type === "checkbox" ? checked : value,
		})
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		console.log("Form submitted with data:", formData)
		setFormData({
			streetAddress: formData.streetAddress,
			city: formData.city,
			stateProvince: formData.stateProvince,
			postalCode: formData.postalCode,
			firstName: formData.firstName,
			lastName: formData.lastName,
			phoneNumber: formData.phoneNumber,
			email: formData.email,
			additionalInfo: formData.additionalInfo,
			marketingConsent: formData.marketingConsent,
			dataProcessingConsent: formData.dataProcessingConsent,
		})
		setShowSuccessModal(true)
	}

	return (
		<div className="fixed z-50 inset-0 overflow-y-auto">
			<div className="min-h-screen pt-4 px-2.5 md:px-10 lg:px-0 pb-20">
				<div onClick={handleClose} className="fixed inset-0 transition-opacity">
					<div className="absolute inset-0 z-0 bg-secondary bg-opacity-90"></div>
				</div>
				<h1
					onClick={handleClose}
					className="section-heading text-center relative z-10 py-10 md:py-16 max-w-max mx-auto"
				>
					Sell smarter<span className="text-ternary">.</span> Everyday
					<span className="text-ternary">.</span>
				</h1>
				<form
					className="bg-primary w-full max-w-5xl mx-auto py-5 lg:py-10 px-5 lg:px-14 relative z-10 rounded-2xl"
					onSubmit={handleSubmit}
				>
					<div className="flex flex-col gap-10">
						<div className="flex flex-col gap-5">
							<h1 className="section-heading !text-[26px] !lg:text-[42px] !leading-[normal]">
								Seller details form
							</h1>
							<p className="section-desc !text-sm lg:text-base text-left">
								Sell your home with confidence – choose ListingPartners, your
								go-to platform for connecting with the perfect.
							</p>
						</div>

						<div className="flex flex-col gap-5">
							<h2 className="block-heading">Property address</h2>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-7 lg:gap-4">
								<div className="input-group">
									<label className="input-label">Street Address</label>
									<input
										ref={streetAddressInput}
										type="text"
										name="streetAddress"
										className="input-field"
										value={formData.streetAddress}
										onChange={handleChange}
									/>
								</div>
								<div className="input-group">
									<label className="input-label">City</label>
									<input
										type="text"
										name="city"
										className="input-field"
										value={formData.city}
										onChange={handleChange}
									/>
								</div>
								<div className="input-group">
									<label className="input-label">State / Province</label>
									<input
										type="text"
										name="stateProvince"
										className="input-field"
										value={formData.stateProvince}
										onChange={handleChange}
									/>
								</div>
								<div className="input-group">
									<label className="input-label">Postal Code</label>
									<input
										type="text"
										name="postalCode"
										className="input-field"
										value={formData.postalCode}
										onChange={handleChange}
									/>
								</div>
							</div>
						</div>

						<div className="flex flex-col gap-5">
							<h2 className="block-heading">Contact information</h2>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-7 lg:gap-4">
								<div className="input-group">
									<label className="input-label">First Name</label>
									<input
										type="text"
										name="firstName"
										className="input-field"
										value={formData.firstName}
										onChange={handleChange}
									/>
								</div>
								<div className="input-group">
									<label className="input-label">Last Name</label>
									<input
										type="text"
										name="lastName"
										className="input-field"
										value={formData.lastName}
										onChange={handleChange}
									/>
								</div>
								<div className="input-group">
									<label className="input-label">Phone Number</label>
									<input
										type="text"
										name="phoneNumber"
										className="input-field"
										value={formData.phoneNumber}
										onChange={handleChange}
									/>
								</div>
								<div className="input-group">
									<label className="input-label">Email</label>
									<input
										type="email"
										name="email"
										className="input-field"
										value={formData.email}
										onChange={handleChange}
									/>
								</div>
							</div>
						</div>

						<div className="grid grid-cols-1 gap-5">
							<h2 className="block-heading">Contact date and time</h2>
							<CalendlyEmbed />
						</div>

						<div className="flex flex-col gap-5">
							<h2 className="block-heading">Additional information</h2>
							<div className="input-group">
								<label className="input-label">Comments</label>
								<textarea
									className="input-field"
									rows={4}
									name="additionalInfo"
									value={formData.additionalInfo}
									onChange={handleChange}
									placeholder="Need to mention that our house has been renovated 6 months ago..."
								></textarea>
							</div>
						</div>

						<div className="flex flex-col gap-5">
							<label className="flex items-center gap-2">
								<input
									type="checkbox"
									className="input-checkbox"
									name="marketingConsent"
									checked={formData.marketingConsent}
									onChange={handleChange}
								/>
								<span className="font-montserrat text-negative text-sm lg:text-base !leading-[normal] !tracking-[0.21px] lg:flex-shrink-0">
									I consent to receiving marketing content...
								</span>
							</label>
							<label className="flex items-center gap-2">
								<input
									type="checkbox"
									className="input-checkbox"
									name="dataProcessingConsent"
									checked={formData.dataProcessingConsent}
									onChange={handleChange}
								/>
								<span className="font-montserrat text-negative text-sm lg:text-base !leading-[normal] !tracking-[0.21px] lg:flex-shrink-0">
									I consent to the processing of data and the...{" "}
									<a href="#" className="underline">
										Terms of Service
									</a>
								</span>
							</label>
						</div>

						<button type="submit" className="btn-solid bg-ternary md:max-w-max">
							Submit{" "}
							<Image
								src={ArrowRight}
								alt="ArrowRight"
								className="h-3.5 w-3.5 flex-shrink-0"
								width={"auto"}
								height={"auto"}
							/>
						</button>
					</div>
				</form>
			</div>
			{showSuccessModal && <SuccessModal onClose={handleClose} />}
		</div>
	)
}

export default ContactModal

const SuccessModal = ({ onClose }) => {
	return (
		<div class="relative z-50">
			<div class="fixed inset-0 bg-secondary/90 transition-opacity"></div>

			<div class="fixed inset-0 z-10 w-screen overflow-y-auto">
				<div class="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
					<div class="relative transform overflow-hidden rounded-lg bg-primary px-4 pb-4 pt-5 text-left transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
						<div>
							<div class="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-secondary">
								<svg
									class="h-6 w-6 text-negative/50"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									aria-hidden="true"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M4.5 12.75l6 6 9-13.5"
									/>
								</svg>
							</div>
							<div class="mt-3 text-center sm:mt-5">
								<h3
									class="text-base font-semibold leading-6 text-negative/50"
									id="modal-title"
								>
									Enquiry submitted successfully!
								</h3>
								<div class="mt-2">
									<p class="text-sm text-negative/25">
										We will get back to you shortly.
									</p>
								</div>
							</div>
						</div>
						<div class="mt-5 sm:mt-6">
							<button
								onClick={onClose}
								type="button"
								class="inline-flex w-full justify-center rounded-full bg-ternary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-ternary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ternary/90"
							>
								Close
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
