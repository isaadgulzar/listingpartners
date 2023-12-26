import React, { useState } from "react"
import { useRouter } from "next/router"

import Image from "next/image"
import Link from "next/link"

import Logo from "../../public/assets/Logo.svg"
import ArrowRight from "../../public/assets/icons/ArrowRight.svg"
import OpenMenu from "../../public/assets/icons/menu-open.svg"
import Cross from "../../public/assets/icons/cross.svg"

const Navbar = ({ setShowContactModal }) => {
	const [showNav, setShowNav] = useState(false)
	const router = useRouter()
	const path = router?.pathname

	return (
		<header className="relative px-6 md:px-10 h-[50px] lg:h-[84px] flex flex-col justify-center bg-primary z-50">
			<nav className="flex justify-between items-center max-w-screen-2xl mx-auto w-full">
				<Link href="/" className="w-[170px] h-[30px] md:h-7 md:w-52">
					<Image
						src={Logo}
						alt="Logo"
						className="w-full h-full"
						width={"auto"}
						height={"auto"}
					/>
				</Link>
				<ul
					className={`${
						showNav ? "hidden" : "hidden md:flex"
					} flex justify-center items-center gap-2 md:gap-12 relative`}
				>
					<li>
						<Link href="/" className={`link ${path == "/" && "active"}`}>
							Home
						</Link>
					</li>
					<li>
						<Link
							href="/about-us"
							className={`link ${path == "/about-us" && "active"}`}
						>
							About
						</Link>
					</li>
					<li>
						<Link href="#contact" className={`link}`}>
							Contact
						</Link>
					</li>
				</ul>
				<button onClick={() => setShowNav(!showNav)} className="md:hidden">
					{showNav ? (
						<Image
							src={Cross}
							alt="Cross"
							className="h-10"
							width={"auto"}
							height={"auto"}
						/>
					) : (
						<Image
							src={OpenMenu}
							alt="Union"
							className="h-10"
							width={"auto"}
							height={"auto"}
						/>
					)}
				</button>

				<button
					onClick={() => setShowContactModal(true)}
					className="btn-solid hidden md:flex"
				>
					Get Started{" "}
					<Image
						src={ArrowRight}
						alt="ArrowRight"
						className="h-3.5 w-3.5 flex-shrink-0"
						width={"auto"}
						height={"auto"}
					/>
				</button>
			</nav>
			<nav className={`${showNav ? "flex w-full" : "hidden"}`}>
				<ul className="absolute top-12 left-0 z-40 flex w-full flex-col bg-primary pt-0 h-52 justify-center items-center gap-4	">
					<li>
						<Link href="/" className={`link ${path == "/" && "active"}`}>
							Home
						</Link>
					</li>
					<li>
						<Link
							href="/about-us"
							className={`link ${path == "/about-us" && "active"}`}
						>
							About
						</Link>
					</li>
					<li>
						<Link href="#contact" className={`link`}>
							Contact
						</Link>
					</li>
					<button
						onClick={() => setShowContactModal(true)}
						className="btn-solid"
					>
						Get Started{" "}
						<Image
							src={ArrowRight}
							alt="ArrowRight"
							className="h-3.5 w-3.5 flex-shrink-0"
							width={"auto"}
							height={"auto"}
						/>
					</button>
				</ul>
			</nav>
		</header>
	)
}

export default Navbar
