"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { sendTicketEmail, validateTicketForm } from "@/utils/validation";
import { FormStep, TicketFormData } from "@/types";
import { downloadTicket } from "@/utils/ticket-download";
import TransitionWrapper from "@/context/transition-wrapper";
import FormStep1 from "@/components/form/step-one";
import FormStep2 from "@/components/form/step-two";
import FormStep3 from "@/components/form/step-three";
import { useStateContext } from "@/context/state-context";

export default function Home() {
	const { isLoading, setIsLoading, error, setError, showSuccess } =
		useStateContext();

	const [currentStep, setCurrentStep] = useState<FormStep>(
		FormStep.TicketSelection
	);
	const [formData, setFormData] = useState<TicketFormData>({
		ticketType: "REGULAR",
		quantity: 1,
		fullName: "",
		email: "",
		avatarUrl: "",
		aboutProject: "",
		price: 0,
	});

	const ticketRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const savedData = localStorage.getItem("ticketFormData");
		if (savedData) {
			setFormData(JSON.parse(savedData));
		}
	}, []);

	useEffect(() => {
		localStorage.setItem("ticketFormData", JSON.stringify(formData));
	}, [formData]);

	const handleNext = async () => {
		const errors = validateTicketForm(formData, currentStep);

		if (Object.keys(errors).length > 0) {
			setError(Object.values(errors)[0]);
			return;
		}

		if (currentStep === FormStep.AttendeeDetails) {
			setIsLoading(true);
			try {
				// Generate ticket image
				if (ticketRef.current) {
					const ticketImage = await downloadTicket(ticketRef.current);
					// Send email with ticket
					await sendTicketEmail(formData, ticketImage);
					showSuccess("Ticket sent to your email!");
				}
			} catch (error) {
				console.log(error);
				setError("Failed to process ticket. Please try again.");
				return;
			} finally {
				setIsLoading(false);
			}
		}

		setCurrentStep((prev) => (prev + 1) as FormStep);
	};

	const handleBack = () => {
		setCurrentStep((prev) => (prev - 1) as FormStep);
	};

	return (
		<main className="  text-white p-4">
			<div className="  ">
				<div className="max-w-2xl mx-auto rounded-3xl border border-slate-500 p-8">
					<div className="flex justify-between items-center mb-2">
						<h2 className="text-xl font-serif ">Ticket Selection</h2>
						<span>Step 1/3</span>
					</div>
					{/* Progress bar */}

					<div className="rounded-3xl ">
						<div className="relative w-full h-1 bg-gray-700 rounded mb-8 overflow-hidden">
							<motion.div
								className="absolute h-full bg-teal-500 rounded"
								initial={{ width: 0 }}
								animate={{ width: `${(currentStep / 3) * 100}%` }}
								transition={{ duration: 0.3 }}
							/>
						</div>

						{/* Loading overlay */}
						<AnimatePresence>
							{isLoading && (
								<motion.div
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									exit={{ opacity: 0 }}
									className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
								>
									<div className="bg-teal-900 p-6 rounded-lg">
										<div className="animate-spin w-8 h-8 border-4 border-teal-500 border-t-transparent rounded-full" />
									</div>
								</motion.div>
							)}
						</AnimatePresence>
						{/* Error toast */}
						<AnimatePresence>
							{error && (
								<motion.div
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									exit={{ opacity: 0, y: -20 }}
									className="fixed bottom-4 right-4 bg-red-500 text-white px-4 py-2 rounded-lg shadow-lg"
								>
									{error}
								</motion.div>
							)}
						</AnimatePresence>
						{/* Form content */}
						<TransitionWrapper step={currentStep}>
							<div className="bg-teal-900/20  border-slate-500 backdrop-blur-sm rounded-3xl p-6 shadow-xl">
								{currentStep === FormStep.TicketSelection && (
									<FormStep1 formData={formData} updateFormData={setFormData} />
								)}

								{currentStep === FormStep.AttendeeDetails && (
									<FormStep2 formData={formData} updateFormData={setFormData} />
								)}

								{currentStep === FormStep.Complete && (
									<div ref={ticketRef}>
										<FormStep3
											formData={formData}
											onDownload={() => downloadTicket(ticketRef.current!)}
										/>
									</div>
								)}

								{currentStep !== FormStep.Complete && (
									<div className="flex justify-between mt-6 gap-4">
										{/* Left Button: Cancel (Step 1) / Back (Other Steps) */}
										<motion.button
											whileHover={{ scale: 1.02 }}
											whileTap={{ scale: 0.98 }}
											onClick={
												currentStep === FormStep.TicketSelection
													? () => window.location.reload()
													: handleBack
											}
											className="px-6 py-2 border border-slate-500 text-slate-300 rounded-lg w-full"
											disabled={isLoading}
										>
											{currentStep === FormStep.TicketSelection
												? "Cancel"
												: "Back"}
										</motion.button>

										{/* Right Button: Always "Next" */}
										<motion.button
											whileHover={{ scale: 1.02 }}
											whileTap={{ scale: 0.98 }}
											onClick={handleNext}
											className="px-6 py-2 bg-teal-500 text-white rounded-lg w-full"
											disabled={isLoading}
										>
											Next
										</motion.button>
									</div>
								)}
							</div>
						</TransitionWrapper>
					</div>
				</div>
			</div>
		</main>
	);
}
