import Head from 'next/head';
import Link from 'next/link';
import ImagePanel from '../components/imagepanel';
import ContentPanel from '../components/contentpanel';
import { BiArrowBack } from 'react-icons/bi';
import { motion } from 'framer-motion';

export default function About() {

	return (
		<>

			<Head>
				<title>About us</title>
			</Head>

			<motion.div initial="initial" animate="animate" exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="flex flex-row h-screen">

				<div className="w-1/2">
					<ImagePanel image="desk.jpg" />
				</div>

				<div className="w-1/2 flex flex-col justify-center items-start">
					<ContentPanel>
						<h1 className="text-6xl font-bold mb-8">About us.</h1>
						<p className="text-lg mb-8">Shravandanahalli is a remote village in Madhugiri taluk, Tumkur district of Karnataka, India. This small village is geographically linked to the Chikkaballapur district through another village called Chandanadur. This village is famous for its historic intellectualism. Shravandanahalli has a century-old government primary school. Late Mudamalegowda and his family members have contributed about 100 acres of land to this primary school, which is being maintained by the Department of Forest, Government of Karnataka. This is the record in the history of karnataka where a single family has donated 100 acres of land to a primary school. The high school is called Sri Mahadeshwara Rurual High school. Sri T V Venkataswamy, Madhugiri is the founder of this institution. Most religious groups reside peacefully in this village. There is a famous temple of holy god Sri Mahadeshvara in this village.</p>
						<Link href="/">
							<a className="group text-lg flex items-center text-gray-500">
								<BiArrowBack className="mr-2 duration-200 group-hover:transform-gpu group-hover:-translate-x-2" /> Back
							</a>
						</Link>
					</ContentPanel>
				</div>

			</motion.div>

		</>
	)
}
