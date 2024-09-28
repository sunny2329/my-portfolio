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
                    className="cursor-pointer hover:scale-110 rounded-lg transition-all duration-100 ease-in-out"
                    quality={10}
                />

                <p className="my-2 text-center">{name}</p>

                {/* Modal: Shows when `showDetail` matches the project ID */}
                
            </>
        );
    };

export default ProjectCard;
