/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useRef } from "react";
import { TicketFormData } from "@/types";
import { Upload } from "lucide-react";
import Image from "next/image";

interface FormStep2Props {
	formData: TicketFormData;
	updateFormData: any;
	errors?: any;
}

const FormStep2: React.FC<FormStep2Props> = ({
	formData,
	updateFormData,
	errors,
}) => {
	const fileInputRef = useRef<HTMLInputElement>(null);

	const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];
		if (file) {
			// For this example, we'll just store a placeholder URL
			// In a real app, you'd upload to Cloudinary here
			updateFormData({ avatarUrl: "/api/placeholder/150/150" });
		}
	};

	return (
		<div className="space-y-6">
			<div
				onClick={() => fileInputRef.current?.click()}
				className="relative cursor-pointer bg-teal-900/30 rounded-lg p-8 text-center"
			>
				<input
					type="file"
					ref={fileInputRef}
					onChange={handleImageUpload}
					accept="image/*"
					className="hidden"
					title="Upload your profile picture"
				/>
				{formData.avatarUrl ? (
					<Image
						src={formData.avatarUrl}
						alt="Profile"
						width={128}
						height={128}
						className="w-32 h-32 mx-auto rounded-lg object-cover"
					/>
				) : (
					<div className="flex flex-col items-cenyter">
						<Upload className="w-8 h-8 text-teal-500 mb-2" />
						<p className="text-gray-300">Drag & drop or click to upload</p>
					</div>
				)}
				{errors?.avatarUrl && (
					<p className="text-red-500 text-sm mt-2">{errors.avatarUrl}</p>
				)}
			</div>

			<div className="space-y-4">
				<div>
					<label className="block text-gray-300 mb-2">Enter your name</label>
					<input
						type="text"
						value={formData.fullName}
						onChange={(e) => updateFormData({ fullName: e.target.value })}
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
						onChange={(e) => updateFormData({ email: e.target.value })}
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
						onChange={(e) => updateFormData({ aboutProject: e.target.value })}
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
