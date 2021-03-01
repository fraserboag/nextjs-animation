import { AnimatePresence, motion } from 'framer-motion';

export default function ImagePanel({ image }) {

	const fadeInDown = {
		initial: {
			y: -100,
			opacity: 0
		},
		animate: {
			y: 0,
			opacity: 1,
			transition: {
				duration: 1,
				ease: [0.6, -0.05, 0.01, 0.99]
			}
		}
	}

	return (
		<AnimatePresence>
			<motion.div variants={fadeInDown} exit={{ y: '-100%' }} transition={{ duration: 1.5 }} className="w-full h-full bg-gray-100 bg-cover bg-bottom" style={{ backgroundImage: `url('${image}')` }}></motion.div>
		</AnimatePresence>
	)
}