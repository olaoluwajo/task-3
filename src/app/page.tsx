import React from "react";
import Home from "@/components/main-component";
import NavBar from "@/components/header";

const Page = () => {
	return (
		<div className="min-h-screen grid place-content-center gap-8 py-6 px-4 bg-[radial-gradient(ellipse_at_bottom,_#0E464F_-10%,_#02191D_40%)]">
			<NavBar />
			<Home />
		</div>
	);
};

export default Page;
