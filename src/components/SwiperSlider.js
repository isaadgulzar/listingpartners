import { Navigation, Autoplay } from "swiper/modules"
import { Swiper } from "swiper/react"

const SwiperSlider = ({ slidesPerView, spaceBetween, autoPlay, children }) => {
	return (
		<Swiper
			className="mySwiper"
			speed={700}
			modules={[Navigation, Autoplay]}
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
					spaceBetween: spaceBetween,
				},
			}}
		>
			{children}
		</Swiper>
	)
}

export default SwiperSlider
