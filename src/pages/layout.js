import Head from "next/head"
import Script from "next/script"

const Layout = ({ children }) => {
	return (
		<div>
			<Head>
				<title>Listing Partners</title>
				<meta
					name="description"
					content="Sell your home with confidence – choose ListingPartners, your go-to platform for connecting with the perfect real estate agent in Australia."
				/>
				<link rel="shortcut icon" href="/images/favicon.ico" />
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/images/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/images/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/images/favicon-16x16.png"
				/>
				{/* <!-- Global Site Tag (gtag.js) - Google Tag Manager --> */}

				{/* <script
					dangerouslySetInnerHTML={{
						__html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
					new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
					j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
					'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
					})(window,document,'script','dataLayer','GTM-PQNT5XPD');`,
					}}
				/> */}
			</Head>
			<Script id="google-analytics">
				{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
					new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
					j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
					'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
					})(window,document,'script','dataLayer','GTM-PQNT5XPD');`}
			</Script>
			{children}
			<noscript>
				<iframe
					src="https://www.googletagmanager.com/ns.html?id=GTM-PQNT5XPD"
					height="0"
					width="0"
					style={{ display: "none", visibility: "hidden" }}
				></iframe>
			</noscript>
		</div>
	)
}

export default Layout
