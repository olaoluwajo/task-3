import { FormStep, TicketFormData, ValidationErrors } from "@/types";

export const validateTicketForm = (
	formData: TicketFormData,
	step: FormStep
): ValidationErrors => {
	const errors: ValidationErrors = {};

	switch (step) {
		case FormStep.TicketSelection:
			if (!formData.ticketType) {
				errors.ticketType = "Please select a ticket type";
			}
			if (!formData.quantity || formData.quantity < 1) {
				errors.quantity = "Please select the number of tickets";
			}
			if (formData.quantity > 5) {
				errors.quantity = "Maximum 5 tickets per person";
			}
			break;

		case FormStep.AttendeeDetails:
			if (!formData.fullName) {
				errors.fullName = "Name is required";
			} else if (formData.fullName.length < 3) {
				errors.fullName = "Name must be at least 3 characters";
			}

			const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
			if (!formData.email) {
				errors.email = "Email is required";
			} else if (!emailRegex.test(formData.email)) {
				errors.email = "Please enter a valid email";
			}

			if (!formData.avatarUrl) {
				errors.avatarUrl = "Please upload a profile photo";
			}

			if (formData.aboutProject && formData.aboutProject.length > 500) {
				errors.aboutProject =
					"Project description must be less than 500 characters";
			}
			break;
	}

	return errors;
};

// src/utils/emailService.ts
export const sendTicketEmail = async (
	ticketData: TicketFormData,
	ticketImageUrl: void
): Promise<void> => {
	try {
		const response = await fetch("/api/send-ticket", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				email: ticketData.email,
				name: ticketData.fullName,
				ticketType: ticketData.ticketType,
				ticketImage: ticketImageUrl,
			}),
		});

		if (!response.ok) {
			throw new Error("Failed to send email");
		}
	} catch (error) {
		console.error("Email sending failed:", error);
		throw error;
	}
};
