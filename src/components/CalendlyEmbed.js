import React, { useEffect } from 'react'

const CalendlyEmbed = ({ url }) => {
	useEffect(() => {
		const head = document.querySelector('head')
		const script = document.createElement('script')
		script.setAttribute(
			'src',
			'https://assets.calendly.com/assets/external/widget.js'
		)
		head.appendChild(script)
	}, [])

	return (
		<div
			className="calendly-inline-widget custom-widget-styling"
			data-url={
				'https://calendly.com/propertylistingpartners/30min?hide_event_type_details=1&hide_gdpr_banner=1&background_color=002429&text_color=e3e3e3&primary_color=ff7f5d'
			}
			style={{ minHeight: 650 + 'px', width: 100 + '%' }}
		></div>
	)
}

export default CalendlyEmbed
