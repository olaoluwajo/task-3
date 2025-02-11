import React from "react";
import Image from "next/image";
import QRCode from "qrcode.js";

interface TicketQRCodeProps {
	ticketData: {
		id: string;
		type: string;
		eventName: string;
		attendeeName: string;
		email: string;
	};
}

const TicketQRCode: React.FC<TicketQRCodeProps> = ({ ticketData }) => {
	const [qrUrl, setQrUrl] = React.useState<string>("");

	React.useEffect(() => {
		const generateQR = async () => {
			try {
				const qrCodeData = JSON.stringify(ticketData);
				const url = await QRCode.toDataURL(qrCodeData, {
					width: 200,
					margin: 2,
					color: {
						dark: "#000000",
						light: "#ffffff",
					},
				});
				setQrUrl(url);
			} catch (err) {
				console.error("QR Code generation failed:", err);
			}
		};

		generateQR();
	}, [ticketData]);

	return qrUrl ? (
		<Image src={qrUrl} alt="Ticket QR Code" className="w-full h-full" />
	) : (
		<div className="w-full h-full bg-gray-200 animate-pulse" />
	);
};

export default TicketQRCode;
