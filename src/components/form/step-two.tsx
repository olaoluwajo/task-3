/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useRef } from "react";
import { TicketFormData } from "@/types";
import { Upload } from "lucide-react";
import Image from "next/image";

interface FormStep2Props {
	formData: TicketFormData;
	updateFormData: any;
	// updateFormData: (data: Partial<TicketFormData>) => void;
	errors?: any;
}

const FormStep2: React.FC<FormStep2Props> = ({
	formData,
	updateFormData,
	errors,
}) => {
	const fileInputRef = useRef<HTMLInputElement>(null);

	const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];
		if (file) {
			const formData = new FormData();
			formData.append("file", file);
			formData.append("upload_preset", "hng-task");

			try {
				const response = await fetch(
					"https://api.cloudinary.com/v1_1/digm76oyr/image/upload",
					{
						method: "POST",
						body: formData,
					}
				);
				const data = await response.json();

				updateFormData({
					...formData, 
					avatarUrl: data.secure_url, 
				});
			} catch (error) {
				console.error("Error uploading image:", error);
			}
		}
	};

	const handleInputChange = (field: string, value: string) => {
		updateFormData({ ...formData, [field]: value });
	};

	return (
		<div className="space-y-6">
			<div
				onClick={() => fileInputRef.current?.click()}
				className="relative cursor-pointer bg-gray-800 rounded-lg p-4 text-center border border-dashed border-gray-500 hover:bg-gray-700 transition-all"
			>
				<input
					type="file"
					ref={fileInputRef}
					onChange={handleImageUpload}
					accept="image/*"
					className="hidden"
					title="Upload Image"
				/>
				{formData.avatarUrl ? (
					<Image
						src={formData.avatarUrl}
						alt="Uploaded Image"
						width={150}
						height={150}
						className="mx-auto rounded-lg object-cover shadow-md"
					/>
				) : (
					<div className="flex flex-col items-center">
						<Upload className="w-10 h-10 text-gray-400 mb-2" />
						<p className="text-gray-400 text-sm">Click or drag to upload</p>
					</div>
				)}
			</div>

			<div className="space-y-4">
				<div>
					<label className="block text-gray-300 mb-2">Enter your name</label>
					<input
						type="text"
						value={formData.fullName}
						onChange={(e) => handleInputChange("fullName", e.target.value)}
						className="w-full bg-transparent border border-gray-600 rounded-lg p-3 text-gray-300 focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
						placeholder="Enter your name"
					/>
					{errors?.fullName && (
						<p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
					)}
				</div>

				<div>
					<label className="block text-gray-300 mb-2">Enter your email</label>
					<input
						type="email"
						value={formData.email}
						onChange={(e) => handleInputChange("email", e.target.value)}
						className="w-full bg-transparent border border-gray-600 rounded-lg p-3 text-gray-300 focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
						placeholder="Enter your email"
					/>
					{errors?.email && (
						<p className="text-red-500 text-sm mt-1">{errors.email}</p>
					)}
				</div>

				<div>
					<label className="block text-gray-300 mb-2">About the project</label>
					<textarea
						value={formData.aboutProject}
						onChange={(e) => handleInputChange("aboutProject", e.target.value)}
						className="w-full bg-transparent border border-gray-600 rounded-lg p-3 text-gray-300 focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
						rows={4}
						placeholder="Describe your project in detail"
					/>
					{errors?.aboutProject && (
						<p className="text-red-500 text-sm mt-1">{errors.aboutProject}</p>
					)}
				</div>
			</div>
		</div>
	);
};

export default FormStep2;
