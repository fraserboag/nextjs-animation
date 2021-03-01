import { motion } from 'framer-motion';

export default function ContentPanel({ children }) {

	const fadeInUp = {
		initial: {
			y: 30,
			opacity: 0
		},
		animate: {
			y: 0,
			opacity: 1,
			transition: {
				duration: .6,
				ease: [0.6, -0.05, 0.01, 0.99]
			}
		}
	}

	return (
		<motion.div variants={fadeInUp} className="overflow-y-auto px-16 py-16 flex flex-col items-start">
			{children}
		</motion.div>
	)
}