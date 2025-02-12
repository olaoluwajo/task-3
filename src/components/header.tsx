import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavBar = () => {
	return (
		<nav className="md:w-[80rem] sticky w-full mx-auto flex justify-between items-center border mt-4  p-4 rounded-2xl border-slate-500 bg-transparent shadow-md">
			<div className="flex justify-center items-center">
				<Image
					src="/thumb.png"
					width={30}
					height={20}
					alt="Description of the image"
				/>
				<Image
					src="/ticz.png"
					width={50}
					height={20}
					alt="Description of the image"
				/>
			</div>
			<div className="hidden md:block space-x-7 text-gray-300">
				<Link href="/" className="hover:text-white">
					Events
				</Link>
				<Link href="/tickets" className="hover:text-white">
					My Tickets
				</Link>
				<Link href="/about-us" className="hover:text-white">
					About Project
				</Link>
			</div>
			<a
				href="/tickets"
				className="group px-4 py-2 rounded-xl bg-white text-black flex items-center relative overflow-hidden"
			>
				MY TICKETS
				<span className="ml-2 transition-transform duration-300 group-hover:translate-x-2">
					→
				</span>
			</a>
		</nav>
	);
};

export default NavBar;
