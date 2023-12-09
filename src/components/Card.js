'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import Star from '../assets/icons/Star.svg'

const Card = ({ review }) => {
	const [showModal, setShowModal] = useState(false)

	const toggleModal = () => {
		setShowModal(!showModal)
	}

	return (
		<div className="card-item">
			<div className="w-full h-[160px]">
				<Image
					src={review?.image}
					alt="Image"
					className="w-full h-full object-cover"
					priority
				/>
			</div>

			{/* Card body */}
			<div className="flex flex-col gap-4">
				<div className="px-4 pt-4">
					<h2 className="flex justify-between">
						<p className="paragraph font-bold">{review.name}</p>
						<span className="flex gap-1">
							{Array.from({ length: 5 }, (_, i) => (
								<Image
									key={i}
									src={Star}
									alt="Image"
									className="w-4 h-4"
									priority
								/>
							))}
						</span>
					</h2>
					<p className="paragraph text-gray-400">{review.location}</p>
				</div>

				<p className="card-paragraph px-4">
					{"We couldn't have been more delighted with the Listing Partners!"}
				</p>

				<p className="card-paragraph px-4">
					{
						"We couldn't have been more delighted with the Listing Partners! Their method of handpicking premier agents and creating unique terms and conditions resulted in a flawlessly smooth selling experience."
					}
				</p>
				<p className="h-16 w-full bg-primary absolute z-10 left-0 bottom-0"></p>
			</div>
		</div>
	)
}

export default Card
