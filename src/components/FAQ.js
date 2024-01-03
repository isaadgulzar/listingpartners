import React, { useState } from "react"
import answerArrow from "../../public/assets/icons/answerArrow.svg"

import Image from "next/image"

const FAQ = ({ question, answer }) => {
	const [isOpen, setIsOpen] = useState(false)

	const toggleFAQ = () => {
		setIsOpen(!isOpen)
	}

	return (
		<div className="flex flex-col gap-3 w-full">
			<div
				onClick={toggleFAQ}
				className="bg-primary rounded-lg md:rounded-3xl px-[15px] md:px-[30px] py-[15px] md:py-9 cursor-pointer flex gap-2 justify-between items-start md:items-center"
			>
				<h3 className="text-base md:font-medium leading-[normal] tracking-[0.24px] text-negative">
					{question}
				</h3>
				<button
					className={`flex-shrink-0 text-negative focus:outline-none ${
						isOpen ? "rotate-180" : ""
					}`}
				>
					<svg
						className="w-4 lg:w-5 h-4 lg:h-5 transition-transform duration-300 transform"
						fill="none"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path d="M19 9l-7 7-7-7" />
					</svg>
				</button>
			</div>
			{isOpen && (
				<div className="flex items-start gap-4 px-[15px] md:px-[30px]">
					<Image
						className="hidden md:block w-[10px] h-[10px] lg:w-[24px] lg:h-[24px]"
						src={answerArrow}
						alt="answer-icon"
						width={"auto"}
						height={"auto"}
					/>
					<p className="paragraph">{answer}</p>
				</div>
			)}
		</div>
	)
}

export default FAQ
