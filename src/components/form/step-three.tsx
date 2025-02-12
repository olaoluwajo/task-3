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
		<div className="text-center space-y-6">
			<div>
				<h2 className="text-2xl font-bold mb-2">Your Ticket is Booked!</h2>
				<p className="text-gray-300">
					You can download or Check your email for a copy
				</p>
			</div>

			<div className="bg-teal-900/30 p-6 rounded-lg">
				<div className="flex items-center space-x-4 bg-gradient-to-r from-teal-900 to-teal-800 p-4 rounded-lg">
					<div className="w-24 h-24 bg-white rounded-lg flex items-center justify-center">
						<Image
							src={formData.avatarUrl || "/api/placeholder/96/96"}
							alt="QR Code"
							width={96}
							height={96}
							className="w-full h-full"
						/>
					</div>
					<div className="flex-1 text-left">
						<h3 className="text-xl font-bold mb-2">Techember Fest &apos;25</h3>
						<p className="text-sm text-gray-300">
							📍 04 Rumens road, Ikoyi, Lagos
						</p>
						<p className="text-sm text-gray-300">📅 March 15, 2025 | 7:00 PM</p>
						<p className="text-xs text-gray-400 mt-2">
							Ticket for 1 entry only
						</p>
					</div>
				</div>
			</div>

			<div className="flex space-x-4">
				<button
					onClick={() => window.location.reload()}
					className="flex-1 py-2 px-4 rounded-lg border border-teal-500 text-teal-500 hover:bg-teal-500/10"
				>
					Book Another Ticket
				</button>
				<button
					onClick={() => {
						saveTicketToLocalStorage();
						onDownload();
					}}
					className="flex-1 py-2 px-4 rounded-lg bg-teal-500 text-white hover:bg-teal-600"
				>
					Download Ticket
				</button>
			</div>
		</div>
	);
};

export default FormStep3;
