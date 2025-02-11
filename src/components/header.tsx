import Image from "next/image";
import React from "react";

const NavBar = () => {
	return (
		<nav className="w-[80rem] mx-auto flex justify-between items-center border  p-4 rounded-2xl border-slate-500 bg-[#102527] shadow-md">
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
			<div className="space-x-7 text-gray-300">
				<a href="#" className="hover:text-white">
					Events
				</a>
				<a href="#" className="hover:text-white">
					My Tickets
				</a>
				<a href="#" className="hover:text-white">
					About Project
				</a>
			</div>
			<button className="group px-4 py-2 rounded-xl bg-white text-black flex items-center relative overflow-hidden">
				MY TICKETS
				<span className="ml-2 transition-transform duration-300 group-hover:translate-x-2">
					→
				</span>
			</button>
		</nav>
	);
};

export default NavBar;
