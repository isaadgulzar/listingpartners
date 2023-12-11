import { Navigation, Autoplay } from 'swiper/modules'
import { Swiper } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'

import '../app/slider-styles.css'

const SwiperSlider = ({ slidesPerView, spaceBetween, autoPlay, children }) => {
	return (
		<Swiper
			speed={700}
			modules={[Navigation, Autoplay]}
			spaceBetween={spaceBetween}
			slidesPerView={1}
			navigation={true}
			autoplay={
				autoPlay
					? {
							delay: 3000,
							disableOnInteraction: false,
							pauseOnMouseEnter: true,
					  }
					: false
			}
			breakpoints={{
				768: {
					slidesPerView: slidesPerView,
				},
			}}
			className="mySwiper"
		>
			{children}
		</Swiper>
	)
}

export default SwiperSlider
