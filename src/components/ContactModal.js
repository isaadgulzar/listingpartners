import { useState } from 'react'
import Image from 'next/image'
import ArrowRight from '../assets/icons/ArrowRight.svg'
import CalendlyEmbed from './CalendlyEmbed'
import '../app/globals.css'

const ContactModal = ({ handleClose }) => {
	const [formData, setFormData] = useState({
		streetAddress: '',
		city: '',
		stateProvince: '',
		postalCode: '',
		firstName: '',
		lastName: '',
		phoneNumber: '',
		email: '',
		additionalInfo: '',
		marketingConsent: false,
		dataProcessingConsent: false,
	})

	const handleChange = (e) => {
		const { name, value, type, checked } = e.target
		setFormData({
			...formData,
			[name]: type === 'checkbox' ? checked : value,
		})
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		console.log('Form submitted with data:', formData)
		setFormData({
			streetAddress: '',
			city: '',
			stateProvince: '',
			postalCode: '',
			firstName: '',
			lastName: '',
			phoneNumber: '',
			email: '',
			additionalInfo: '',
			marketingConsent: false,
			dataProcessingConsent: false,
		})
		handleClose()
	}

	return (
		<div className="fixed z-50 inset-0 overflow-y-auto">
			<div className="min-h-screen pt-4 px-4 pb-20">
				<div onClick={handleClose} className="fixed inset-0 transition-opacity">
					<div className="absolute inset-0 z-0 bg-secondary bg-opacity-90"></div>
				</div>
				<h1 className="main-heading text-center relative z-10 pt-32 pb-16">
					Sell smarter<span className="full-stop">.</span> Everyday
					<span className="full-stop">.</span>
				</h1>
				<form
					className="bg-primary w-full max-w-5xl mx-auto py-5 lg:py-10 px-5 lg:px-14 relative z-10 rounded-2xl"
					onSubmit={handleSubmit}
				>
					<div className="flex flex-col gap-10">
						<div className="flex flex-col gap-5">
							<h1 className="section-heading">Seller details form</h1>
							<p className="section-desc text-left">
								Sell your home with confidence – choose ListingPartners, your
								go-to platform for connecting with the perfect.
							</p>
						</div>

						<div className="flex flex-col gap-5">
							<h2 className="block-heading">Property address</h2>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
								<div className="input-group">
									<label className="input-label">Street Address</label>
									<input
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
							<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
								<span className="font-montserrat text-negative text-xs lg:text-base lg:flex-shrink-0">
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
								<span className="font-montserrat text-negative text-xs lg:text-base lg:flex-shrink-0">
									I consent to the processing of data and the...
									<a href="#" className="underline">
										Terms of Service
									</a>
								</span>
							</label>
						</div>

						<button type="submit" className="btn-solid bg-ternary max-w-max">
							Submit{' '}
							<Image src={ArrowRight} alt="ArrowRight" className="h-3 w-3.5" />
						</button>
					</div>
				</form>
			</div>
		</div>
	)
}

export default ContactModal
