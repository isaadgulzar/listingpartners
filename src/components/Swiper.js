'use client'
import React, { useState } from 'react'
import { SwiperSlide } from 'swiper/react'
import SwiperSlider from './SwiperSlider'

const Swiper = ({ handleClose }) => {
	const [members, setMembers] = useState([
		{
			id: 1,
			name: 'Saif Rana',
			linkedin: 'https://www.linkedin.com/in/saifrana94',
			coverImg: '/assets/images/team/saif-rana-cofounder-launchpad.jpeg',
		},
		{
			id: 2,
			name: 'Chada El Islam',
			linkedin: 'https://www.linkedin.com/in/benchada',
			coverImg: '/assets/images/team/chada-cofounder-launchpad.jpeg',
		},
		{
			id: 3,
			name: 'Rama Sbeinaty',
			linkedin: 'https://www.linkedin.com/in/rama-sbeinaty',
			coverImg: '/assets/images/team/rama-cofounder-launchpad.jpeg',
		},
	])

	return (
		<div className="w-96 bg-red-300 ">
			<SwiperSlider
				slidesData={members}
				slidesPerView={1}
				spaceBetween={20}
				autoPlay={true}
			>
				{members.map((data) => (
					<SwiperSlide key={data?.id} className="px-0">
						<p className="text-2xl">{data?.name}</p>
					</SwiperSlide>
				))}
			</SwiperSlider>
		</div>
	)
}

export default Swiper
