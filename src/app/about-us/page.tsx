import React from "react";

const Page = () => {
	return (
		<div className="flex items-center justify-center min-h-screen bg-[#0D1B1E] text-white p-4">
			<div className="max-w-3xl w-full bg-[#102527] border border-[#1E2D2F] shadow-lg rounded-lg p-6 text-sm">
				<h1 className="text-xl font-bold text-[#A0D8D0] text-center">
					Event Ticket Booking UI – Open Source Practice Project
				</h1>

				<section className="mt-4 space-y-2">
					<h2 className="text-[#A0D8D0] font-semibold">Overview</h2>
					<p className="text-gray-300">
						This is a beginner-friendly yet practical Event Ticket Booking UI
						designed for developers to clone, explore, and build upon. The
						design focuses on a seamless, login-free ticket reservation flow,
						allowing users to book event tickets quickly and efficiently.
					</p>
				</section>

				<section className="mt-4 space-y-2">
					<h2 className="text-[#A0D8D0] font-semibold">Flow & Features</h2>
					<ul className="list-disc list-inside text-gray-300 space-y-1">
						<li>
							<span className="font-semibold text-white">
								Ticket Selection:
							</span>{" "}
							Browse available tickets (Free & Paid).
						</li>
						<li>
							<span className="font-semibold text-white">
								Attendee Details Form:
							</span>{" "}
							Enter name, email, and upload a profile picture.
						</li>
						<li>
							<span className="font-semibold text-white">
								Payment or Success Page:
							</span>{" "}
							Download ticket or receive email confirmation.
						</li>
					</ul>
				</section>

				<section className="mt-4 space-y-2">
					<h2 className="text-[#A0D8D0] font-semibold">How to Build This 🚀</h2>
					<p className="text-gray-300">
						This UI can be implemented using React or Next.js. Backend
						integration is optional.
					</p>
				</section>

				<div className="mt-6 flex justify-center space-x-4">
					<button className="bg-[#A0D8D0] text-black px-4 py-2 rounded-lg hover:bg-[#89C4B8] transition">
						Design File
					</button>
					<button className="border border-[#A0D8D0] text-[#A0D8D0] px-4 py-2 rounded-lg hover:bg-[#A0D8D0] hover:text-black transition">
						Github Code
					</button>
				</div>
			</div>
		</div>
	);
};

export default Page;
