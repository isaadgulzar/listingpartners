import Link from 'next/link'

export default function NotFound() {
	return (
		<>
			<main className="grid min-h-screen place-items-center bg-primary px-6 py-24 sm:py-32 lg:px-8">
				<div className="text-center">
					<p className="text-base font-semibold text-ternary">404</p>
					<h1 className="mt-4 text-3xl font-bold tracking-tight text-negative sm:text-5xl ca">
						Page not found
					</h1>
					<p className="mt-6 text-base leading-7 text-negative/50">
						Sorry, we couldn’t find the page you’re looking for.
					</p>
					<div className="mt-10 flex items-center justify-center gap-x-6">
						<Link href="/" className="btn-solid max-w-max">
							Go back home
						</Link>
					</div>
				</div>
			</main>
		</>
	)
}
