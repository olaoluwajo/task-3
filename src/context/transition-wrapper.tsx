import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TransitionWrapperProps {
	children: React.ReactNode;
	step: number;
}

const TransitionWrapper: React.FC<TransitionWrapperProps> = ({
	children,
	step,
}) => {
	return (
		<AnimatePresence mode="wait">
			<motion.div
				key={step}
				initial={{ opacity: 0, x: 20 }}
				animate={{ opacity: 1, x: 0 }}
				exit={{ opacity: 0, x: -20 }}
				transition={{ duration: 0.3 }}
			>
				{children}
			</motion.div>
		</AnimatePresence>
	);
};

export default TransitionWrapper;
