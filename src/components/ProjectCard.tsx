import { FunctionComponent } from "react";
import { IProject } from "../types";
import Image from "next/image";

const ProjectCard: FunctionComponent<{
    project: IProject;
    showDetail: null | Number;
    setShowDetail: (id: Number | null) => void;
}> = ({
    project: {
        name,
        image_path,
        id,
    },
    setShowDetail,
}) => {
        return (
            <>
                {/* Project Thumbnail */}
                <div
                    className="lg:max-w-[240px] md:max-w-[240px] max-w-full h-[120px] relative cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out overflow-hidden rounded-lg"
                    onClick={() => setShowDetail(id)}
                >
                    <Image
                        src={image_path}
                        alt={name}
                        layout="fill" // Fills the parent div
                        objectFit="cover" // Ensures the image covers the area with cropping if needed
                        quality={10}
                    />
                </div>

                <p className="my-2 text-center">{name}</p>

                {/* Modal: Shows when `showDetail` matches the project ID */}

            </>
        );
    };

export default ProjectCard;
