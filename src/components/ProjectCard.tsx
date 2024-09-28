import { FunctionComponent } from "react";
import { IProject } from "../types";
import Image from "next/image";
import { AiFillGithub, AiFillProject } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { fadeInUp, stagger } from "../animations";
import { motion } from "framer-motion";

const ProjectCard: FunctionComponent<{
    project: IProject;
    showDetail: null | Number;
    setShowDetail: (id: Number | null) => void;
}> = ({
    project: {
        name,
        image_path,
        deployed_url,
        github_url,
        description,
        key_techs,
        id,
    },
    setShowDetail,
    showDetail,
}) => {
        return (
            <>
                {/* Project Thumbnail */}
                <Image
                    width="300"
                    height="150"
                    src={image_path}
                    layout="responsive"
                    alt={name}
                    onClick={() => setShowDetail(id)}
                    className="cursor-pointer"
                    quality={10}
                />

                <p className="my-2 text-center">{name}</p>

                {/* Modal: Shows when `showDetail` matches the project ID */}
                {showDetail === id && (
                    <>
                        {/* Modal Background Overlay */}
                        <div 
                            className="fixed inset-0 z-20 bg-black bg-opacity-50 backdrop-blur-sm"
                            onClick={() => setShowDetail(null)} // Close modal on background click
                        ></div>

                        {/* Modal Content */}
                        <div className="fixed inset-0 z-30 flex items-center justify-center p-4">
                            <motion.div
                                className="relative w-full max-w-4xl p-6 bg-gray-100 rounded-lg dark:bg-black-100 dark:text-gray-100"
                                variants={stagger}
                                initial="initial"
                                animate="animate"
                            >
                                {/* Image and Links Section */}
                                <motion.div
                                    className="flex flex-col md:flex-row"
                                    variants={fadeInUp}
                                >
                                    <Image
                                        src={image_path}
                                        alt={name}
                                        className="w-full md:w-1/2 h-auto rounded-lg"
                                        layout="responsive"
                                        width={300}
                                        height={150}
                                    />
                                    <div className="mt-4 md:mt-0 md:ml-6">
                                        <h2 className="text-2xl font-semibold">{name}</h2>
                                        <p className="mt-2">{description}</p>
                                        <div className="flex mt-4 space-x-3">
                                            <a
                                                href={github_url}
                                                className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-300 rounded-sm dark:bg-black-500"
                                            >
                                                <AiFillGithub /> <span>Github</span>
                                            </a>
                                            <a
                                                href={deployed_url}
                                                className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-300 rounded-sm dark:bg-black-500"
                                            >
                                                <AiFillProject /> <span>Project</span>
                                            </a>
                                        </div>
                                        <div className="flex flex-wrap mt-5 space-x-2 text-sm tracking-wider">
                                            {key_techs.map((value, i) => (
                                                <span
                                                    key={i}
                                                    className="p-1 px-2 my-1 bg-gray-300 rounded-sm dark:bg-black-500"
                                                >
                                                    {value}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Close Button */}
                                <button
                                    className="absolute p-1 bg-gray-200 rounded-full top-3 right-3 focus:outline-none dark:bg-black-200"
                                    onClick={() => setShowDetail(null)}
                                >
                                    <MdClose size={30} />
                                </button>
                            </motion.div>
                        </div>
                    </>
                )}
            </>
        );
    };

export default ProjectCard;
