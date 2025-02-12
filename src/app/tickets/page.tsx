/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const TicketsDisplay = () => {
	const [tickets, setTickets] = useState<
		{
			avatarUrl?: string;
			fullName?: string;
			email?: string;
			ticketType?: string;
			quantity?: number;
			aboutProject?: string;
		}[]
	>([]);

	useEffect(() => {
		const storedTickets = JSON.parse(localStorage.getItem("tickets") || "[]");
		const sortedTickets = storedTickets.reverse();
		setTickets(sortedTickets);
	}, []);

	const deleteTicket = (index: any) => {
		const updatedTickets = tickets.filter((_, i) => i !== index);
		localStorage.setItem("tickets", JSON.stringify(updatedTickets));
		setTickets(updatedTickets);
	};

	const container = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
			},
		},
	};

	const item = {
		hidden: { y: 20, opacity: 0 },
		show: { y: 0, opacity: 1 },
	};

	return (
		<main className="text-white p-4 max-w-4xl mx-auto">
			<div className="rounded-3xl border border-slate-500 p-8">
				{/* Header Section */}
				<div className="flex justify-between items-center mb-8">
					<div>
						<h2 className="text-xl md:text-2xl font-serif mb-2">My Tickets</h2>
						<p className="text-slate-300">
							Total Tickets Booked: {tickets.length}
						</p>
					</div>
					<Link href="/">
						<motion.button
							whileHover={{ scale: 1.02 }}
							whileTap={{ scale: 0.98 }}
							className="px-6 py-2 bg-teal-500 text-white rounded-lg"
						>
							Book New Ticket
						</motion.button>
					</Link>
				</div>

				{tickets.length === 0 ? (
					<div className="text-center py-16 bg-[radial-gradient(ellipse_at_top_left,_#07373F_0%,_#0A0C11_140%)] border border-slate-500 rounded-3xl">
						<h3 className="text-xl mb-4">No tickets booked yet</h3>
						<Link href="/">
							<motion.button
								whileHover={{ scale: 1.02 }}
								whileTap={{ scale: 0.98 }}
								className="px-6 py-2 bg-teal-500 text-white rounded-lg"
							>
								Book Your First Ticket
							</motion.button>
						</Link>
					</div>
				) : (
					<motion.div
						variants={container}
						initial="hidden"
						animate="show"
						className="space-y-6"
					>
						{tickets.map((ticket, index) => (
							<motion.div
								key={index}
								variants={item}
								className="bg-[radial-gradient(ellipse_at_top_left,_#07373F_0%,_#0A0C11_140%)] border border-slate-500 rounded-3xl p-6"
							>
								<div className="flex justify-between items-start mb-6">
									<div className="flex items-center gap-4">
										<div className="w-16 h-16 bg-teal-400/20 rounded-lg overflow-hidden">
											<Image
												src={ticket?.avatarUrl || "/api/placeholder/64/64"}
												alt="Event Avatar"
												width={64}
												height={64}
												className="w-full h-full object-cover"
											/>
										</div>
										<div>
											<h1 className="text-3xl md:text-6xl font-roadRage mb-2">
												Techember Fest &apos;&apos;25
											</h1>
											<p className="text-slate-300 text-sm">
												March 15, 2025 | 7:00 PM
											</p>
										</div>
									</div>
									<motion.button
										whileHover={{ scale: 1.05 }}
										whileTap={{ scale: 0.95 }}
										onClick={() => deleteTicket(index)}
										className="text-slate-300 hover:text-red-400 transition-colors"
									>
										✕
									</motion.button>
								</div>

								<div className="bg-teal-400/20 rounded-xl p-6">
									<div className="grid grid-cols-2 gap-4 text-sm mb-4">
										<div>
											<p className="text-gray-400">Name</p>
											<p className="text-white ">{ticket.fullName}</p>
										</div>
										<div>
											<p className="text-gray-400">Email</p>
											<p className="text-white">{ticket.email}</p>
										</div>
										<div>
											<p className="text-gray-400">Ticket Type</p>
											<p className="text-white">{ticket.ticketType}</p>
										</div>
										<div>
											<p className="text-gray-400">Quantity</p>
											<p className="text-white">{ticket.quantity}</p>
										</div>
									</div>

									<div>
										<p className="text-gray-400">Special Request</p>
										<p className="text-white text-sm">
											{ticket.aboutProject || "None"}
										</p>
									</div>
								</div>
							</motion.div>
						))}
					</motion.div>
				)}
			</div>
		</main>
	);
};

export default TicketsDisplay;
