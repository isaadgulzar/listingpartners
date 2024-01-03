// _app.js
import React from 'react'
import Layout from './layout'

import 'swiper/css'
import 'swiper/css/navigation'

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	)
}

export default MyApp
