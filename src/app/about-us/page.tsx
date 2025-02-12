import React from "react";

const Page = () => {
	return (
		<div className="flex items-center justify-center min-h-screen bg-[#0D1B1E] text-white p-4">
			<div className="max-w-4xl w-full bg-gradient-to-b from-[#102527] to-[#0D1B1E] border border-[#1E2D2F] shadow-xl rounded-2xl p-8">
				<h1 className="text-2xl md:text-3xl font-bold text-[#A0D8D0] text-center mb-8 flex items-center justify-center gap-2">
					<span>🎟️</span> Event Ticket Booking UI
					<span className="text-sm bg-[#A0D8D0]/10 text-[#A0D8D0] px-3 py-1 rounded-full">
						Open Source
					</span>
				</h1>

				<section className="mb-8">
					<h2 className="text-xl text-[#A0D8D0] font-semibold mb-4 flex items-center gap-2">
						🎯 Overview
					</h2>
					<p className="text-gray-300 leading-relaxed">
						Welcome to our beginner-friendly Event Ticket Booking UI! This
						project is thoughtfully designed for developers looking to explore
						and build their first practical booking system. With a focus on
						simplicity and efficiency, we&apos;ve created a seamless, login-free
						experience that makes ticket reservations a breeze.
					</p>
				</section>

				<section className="mb-8">
					<h2 className="text-xl text-[#A0D8D0] font-semibold mb-4 flex items-center gap-2">
						✨ Key Features
					</h2>
					<div className="grid md:grid-cols-3 gap-6">
						<div className="bg-[#102527]/50 p-6 rounded-xl border border-[#1E2D2F]">
							<h3 className="text-[#A0D8D0] font-semibold mb-2 flex items-center gap-2">
								🎫 Ticket Selection
							</h3>
							<p className="text-gray-300">
								Browse and choose from a variety of tickets, both free and paid,
								displayed in an elegant card view.
							</p>
						</div>
						<div className="bg-[#102527]/50 p-6 rounded-xl border border-[#1E2D2F]">
							<h3 className="text-[#A0D8D0] font-semibold mb-2 flex items-center gap-2">
								👤 Attendee Details
							</h3>
							<p className="text-gray-300">
								Simple form to collect essential information with profile
								picture upload functionality.
							</p>
						</div>
						<div className="bg-[#102527]/50 p-6 rounded-xl border border-[#1E2D2F]">
							<h3 className="text-[#A0D8D0] font-semibold mb-2 flex items-center gap-2">
								✅ Confirmation
							</h3>
							<p className="text-gray-300">
								Instant ticket generation with QR code and easy download
								options.
							</p>
						</div>
					</div>
				</section>

				<section className="mb-8">
					<h2 className="text-xl text-[#A0D8D0] font-semibold mb-4 flex items-center gap-2">
						🛠️ Technical Stack
					</h2>
					<div className="bg-[#102527]/50 p-6 rounded-xl border border-[#1E2D2F]">
						<div className="grid md:grid-cols-2 gap-6">
							<div>
								<h3 className="text-[#A0D8D0] font-semibold mb-2">
									Frontend Stack 💻
								</h3>
								<ul className="text-gray-300 space-y-2">
									<li>• Next.js/React for UI components</li>
									<li>• Tailwind CSS for styling</li>
									<li>• Context API for state management</li>
									<li>• Firebase/Cloudinary for file uploads</li>
								</ul>
							</div>
							<div>
								<h3 className="text-[#A0D8D0] font-semibold mb-2">
									Integrations 🔌
								</h3>
								<ul className="text-gray-300 space-y-2">
									<li>• Stripe/Paystack payment processing</li>
									<li>• Email confirmation system</li>
									<li>• QR code generation</li>
									<li>• PDF ticket generation</li>
								</ul>
							</div>
						</div>
					</div>
				</section>

				<div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-8">
					<a
						href="https://www.figma.com/file/hj3DoGgIAmRR5c1Sfr6On7"
						className="w-full md:w-auto bg-[#A0D8D0] text-black px-6 py-3 rounded-xl hover:bg-[#89C4B8] transition-all duration-300 flex items-center justify-center gap-2 font-medium"
					>
						🎨 View Design
					</a>
					<a
						href="https://github.com/olaoluwajo/task-3"
						className="w-full md:w-auto border-2 border-[#A0D8D0] text-[#A0D8D0] px-6 py-3 rounded-xl hover:bg-[#A0D8D0] hover:text-black transition-all duration-300 flex items-center justify-center gap-2 font-medium"
					>
						<span>⚡</span> Github Code
					</a>
				</div>
			</div>
		</div>
	);
};

export default Page;
