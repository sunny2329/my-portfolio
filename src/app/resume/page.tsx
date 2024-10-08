'use client'
import { motion } from "framer-motion";
import Head from "next/head";
import { fadeInUp, routeFade } from "../../animations";
import Bar from "../../components/Bar";
import { languages, tools } from "../../data";
import { WobbleCard } from "@/components/ui/wobble-card";

const Resume = () => {
    return (
        <motion.div
            className="px-6 py-2"
            variants={routeFade}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <Head>
                <title>Sobhit Sinha | Web Developer</title>
            </Head>
            {/* //! Education & Experience */}
            <div className="grid gap-6 md:grid-cols-2">
                <motion.div variants={fadeInUp} initial="initial" animate="animate">
                    <WobbleCard>
                        <h5 className="my-3 text-2xl font-bold">Education</h5>
                        <div className="">
                            <h5 className="my-2 text-xl font-bold">
                                Electronics and Communication Engineering
                            </h5>
                            <p className="font-semibold">The LNM Institute of Technology (2021-2025)</p>
                            <p className="my-3">
                                I am currently pursuing B.tech in Electronics and Communication Engineering
                                from The LNMIIT
                            </p>
                        </div>
                    </WobbleCard>

                </motion.div>
                <motion.div variants={fadeInUp} initial="initial" animate="animate">
                    <WobbleCard>
                        <h5 className="my-3 text-2xl font-bold">Experience</h5>
                        <div>
                            <h5 className="my-2 text-xl font-bold">ReactJS Developer Intern</h5>
                            <p className="font-semibold">Codehop Interfusion Limited</p>
                            <p className="my-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim iste laboriosam ipsam cupiditate repellat fuga quod eligendi necessitatibus porro, quas qui, corrupti voluptas?</p>
                        </div>
                    </WobbleCard>

                </motion.div>
            </div>

            {/*Languages & Tools */}
            <div className="grid gap-9 md:grid-cols-2">

                <div>
                    <h5 className="my-3 text-2xl font-bold">Technologies/Frameworks</h5>
                    <div className="my-2">
                        {tools.map((tool, i) => (
                            <Bar value={tool} key={i} />
                        ))}
                    </div>
                </div>

                <div>
                    <h5 className="my-3 text-2xl font-bold">Programming Languages</h5>
                    <div className="my-2">
                        {languages.map((language, i) => (
                            <Bar value={language} key={i} />
                        ))}
                    </div>
                </div>


            </div>
        </motion.div>
    );
};

export default Resume;