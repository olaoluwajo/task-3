import React from "react";
import Home from "@/components/main-component";
import NavBar from "@/components/header";

const page = () => {
	return (
		<div className="bg-[#08252B]   my-auto min-h-screen grid place-content-center gap-8 py-6">
			<NavBar />
			<Home />
		</div>
	);
};

export default page;
