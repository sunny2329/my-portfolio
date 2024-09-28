'use client'
import { motion } from "framer-motion";
import Head from "next/head";
import { useState } from "react";
import { fadeInUp, routeFade, stagger } from "../../animations";
import ProjectCard from "../../components/ProjectCard";
import ProjectNavbar from "../../components/ProjectNavbar";
import { projects as projectsData } from "../../data";
import { Category, IProject } from "../../types";
import { AiFillGithub, AiFillProject } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import Image from "next/image";

const Projects = () => {
    const [projects, setProjects] = useState(projectsData);
    const [active, setActive] = useState("All");
    const [showDetail, setShowDetail] = useState<null | Number>(null); // State for which project to show
    const [selectedProject, setSelectedProject] = useState<IProject | null>(null); // State for storing the selected project details

    const handleFilterCategory = (category: Category | "all") => {
        if (category === "all") {
            setProjects(projectsData);
            setActive(category);
            return;
        }

        const newArray = projectsData.filter((project) =>
            project.category.includes(category)
        );

        setProjects(newArray);
        setActive(category);
    };

    const handleShowDetail = (project: IProject | null) => {
        setSelectedProject(project);
        setShowDetail(project ? project.id : null);
    };

    return (
        <motion.div
            className="px-5 py-2 overflow-y-scroll "
            style={{ height: "65vh" }}
            variants={routeFade}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <Head>
                <title>My Projects</title>
            </Head>

            {/* Project Navbar */}
            <ProjectNavbar
                handleFilterCategory={handleFilterCategory}
                active={active}
            />

            {/* Project Grid */}
            <motion.div
                variants={stagger}
                initial="initial"
                animate="animate"
                className="relative grid grid-cols-12 gap-4 my-3"
            >
                {projects.map((project) => (
                    <motion.div
                        variants={fadeInUp}
                        key={project.id}
                        className="col-span-12 p-2 bg-gray-200 rounded-lg dark:bg-black-200 sm:col-span-6 lg:col-span-4"
                    >
                        <ProjectCard
                            project={project}
                            key={project.id}
                            setShowDetail={() => handleShowDetail(project)}
                            showDetail={showDetail}
                        />
                    </motion.div>
                ))}
            </motion.div>

            {/* Modal for project details */}
            {selectedProject && showDetail && (
                <>
                    {/* Modal Background Overlay */}
                    <div 
                        className="fixed inset-0 z-[1200] bg-black bg-opacity-50 backdrop-blur-sm"
                        onClick={() => handleShowDetail(null)}
                    ></div>

                    {/* Modal Content */}
                    <div className="fixed inset-0 z-[2200] flex items-center justify-center p-4">
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
                                    src={selectedProject.image_path}
                                    alt={selectedProject.name}
                                    className="w-full md:w-1/2 h-auto rounded-lg"
                                    layout="responsive"
                                    width={300}
                                    height={150}
                                />
                                <div className="mt-4 md:mt-0 md:ml-6">
                                    <h2 className="text-2xl font-semibold">{selectedProject.name}</h2>
                                    <p className="mt-2">{selectedProject.description}</p>
                                    <div className="flex mt-4 space-x-3">
                                        <a
                                            href={selectedProject.github_url}
                                            className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-300 rounded-sm dark:bg-black-500"
                                        >
                                            <AiFillGithub /> <span>Github</span>
                                        </a>
                                        <a
                                            href={selectedProject.deployed_url}
                                            className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-300 rounded-sm dark:bg-black-500"
                                        >
                                            <AiFillProject /> <span>Project</span>
                                        </a>
                                    </div>
                                    <div className="flex flex-wrap mt-5 space-x-2 text-sm tracking-wider">
                                        {selectedProject.key_techs.map((value, i) => (
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
                                onClick={() => handleShowDetail(null)}
                            >
                                <MdClose size={30} />
                            </button>
                        </motion.div>
                    </div>
                </>
            )}
        </motion.div>
    );
};

export default Projects;
