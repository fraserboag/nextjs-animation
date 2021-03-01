import Head from "next/head";
import Link from "next/link";
import ImagePanel from "../components/imagepanel";
import ContentPanel from "../components/contentpanel";
import { BiInfoCircle } from "react-icons/bi";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <motion.div
        initial="initial"
        animate="animate"
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="flex flex-row h-screen"
      >
        <div className="w-1/2">
          <ImagePanel image="waterfall.jpg" />
        </div>

        <div className="w-1/2 flex flex-col justify-center items-start">
          <ContentPanel>
            <h1 className="text-6xl font-bold mb-8">This is a title.</h1>

            <p className="text-lg mb-8">
              The National Police Immigration Service[1] (NPIS) (Norwegian:
              Politiets utlendingsenhet) is the unit in the Norwegian Police
              Service for handling immigration cases. The NPIS's main tasks are
              to register asylum seekers who come to Norway and to establish
              their identity, forcibly return people without lawful residence
              and to run the police immigration detention centre.
            </p>

            <Link href="/about">
              <a className="bg-gray-100 text-lg px-8 py-3 font-bold flex items-center shadow duration-400 hover:bg-blue-400 hover:text-white">
                <BiInfoCircle className="mr-2 text-xl" /> Find out more
              </a>
            </Link>
          </ContentPanel>
        </div>
      </motion.div>
    </>
  );
}
