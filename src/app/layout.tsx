import type { Metadata } from "next";
import "./globals.css";
import { StateProvider } from "@/context/state-context";
import NavBar from "@/components/header";

export const metadata: Metadata = {
	title: "HNG STAGE 2",
	description: "Task 3",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className="bg-[radial-gradient(ellipse_at_bottom,_#0E464F_-10%,_#02191D_40%)] min-h-screen relative px-2">
				<StateProvider>
					<NavBar />
					{children}
				</StateProvider>
			</body>
		</html>
	);
}
