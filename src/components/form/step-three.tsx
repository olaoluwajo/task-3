import React from "react";
import Image from "next/image";
import { TicketFormData } from "@/types";

interface FormStep3Props {
	formData: TicketFormData;
	onDownload: () => Promise<void>;
}

const FormStep3: React.FC<FormStep3Props> = ({ formData, onDownload }) => {
	const saveTicketToLocalStorage = () => {
		const tickets = JSON.parse(localStorage.getItem("tickets") || "[]");
		tickets.push(formData);
		localStorage.setItem("tickets", JSON.stringify(tickets));
	};

	return (
		<div className="max-w-xl mx-auto space-y-8">
			<div className="text-center">
				<h2 className="text-3xl font-bold text-white mb-2">
					Your Ticket is Booked!
				</h2>
				<p className="text-gray-300">
					Check your email for a copy or you can download
				</p>
			</div>

			<div
				className="w-full h-full relative aspect-[1/1.5] bg-contain bg-center bg-no-repeat"
				style={{
					backgroundImage: "url('/Subtract.png')",
				}}
			>
				{/* Ticket Content */}
				<div className="p-8 h-full flex flex-col justify-center items-center">
					<div className="space-y-4 flex-1 ">
						<h3 className="text-2xl font-bold text-white text-center">
							Techember Fest &apos;25
						</h3>
						<div className="space-y-2 text-gray-300 text-center">
							<p className="flex items-center gap-2 justify-center">
								<span>📍</span> 04 Rumens road, Ikoyi, Lagos
							</p>
							<p className="flex items-center gap-2 justify-center">
								<span>📅</span> March 15, 2025 | 7:00 PM
							</p>
						</div>
						<div className="flex justify-center items-center py-4">
							<div className="w-50 h-50 bg-teal-400/20 rounded-lg overflow-hidden">
								<Image
									src={formData.avatarUrl || "/api/placeholder/96/96"}
									alt="Event Avatar"
									width={100}
									height={100}
									className="w-full h-full object-cover"
								/>
							</div>
						</div>
						<div className=" bg-teal-400/20 rounded-xl p-6">
							<div className="grid grid-cols-2  gap-4 text-sm ">
								<div>
									<p className="text-gray-400">Enter your name</p>
									<p className="text-white">
										{formData.fullName || "Avi Chukwu"}
									</p>
								</div>
								<div>
									<p className="text-gray-400">Enter your email *</p>
									<p className="text-white">
										{formData.email || "User@email.com"}
									</p>
								</div>
								<div>
									<p className="text-gray-400">Ticket Type:</p>
									<p className="text-white">{formData.ticketType || "VIP"}</p>
								</div>
								<div>
									<p className="text-gray-400">Ticket for :</p>
									<p className="text-white">{formData.quantity || "1"}</p>
								</div>
							</div>

							<div className="mt-3">
								<p className="text-gray-400">Special request?</p>
								<p className="text-white text-sm">
									{formData.aboutProject ||
										"Nil ? Or the users sad story they write in there gets this whole space, Max of three rows"}
								</p>
							</div>
						</div>{" "}
					</div>

					{/* Barcode Section - positioned at the bottom part of the ticket */}
					<div className="pt-8 pb-4">
						<svg className="w-full h-12">
							<rect x="0" y="0" width="100%" height="100%" fill="none" />
							{Array.from({ length: 30 }).map((_, i) => (
								<rect
									key={i}
									x={`${(i * 100) / 30}%`}
									y="0"
									width="2"
									height="100%"
									fill="white"
									opacity={Math.random() > 0.5 ? "1" : "0.3"}
								/>
							))}
						</svg>
						<div className="text-center text-white text-sm mt-2">
							1 234567 891026
						</div>
					</div>
				</div>
			</div>

			{/* Action Buttons */}
			<div className="grid grid-cols-2 gap-4">
				<button
					onClick={() => window.location.reload()}
					className="py-3 px-6 rounded-lg border border-teal-500 text-teal-500 hover:bg-teal-500/10 transition-colors"
				>
					Book Another Ticket
				</button>
				<button
					onClick={() => {
						saveTicketToLocalStorage();
						onDownload();
					}}
					className="py-3 px-6 rounded-lg bg-teal-500 text-white hover:bg-teal-600 transition-colors"
				>
					Download Ticket
				</button>
			</div>
		</div>
	);
};

export default FormStep3;
