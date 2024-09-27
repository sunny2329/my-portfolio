import { FunctionComponent } from "react";
import { IService } from "../types";
import { WobbleCard } from "./ui/wobble-card";
// import { motion } from 'framer-motion'

const ServiceCard: FunctionComponent<{ service: IService }> = ({
    service: { Icon, title, about },
}) => {
    //XSS attack :( on our portfolio btw, as an alternate use npm i dom purify
    function createMarkup() {
        return {
            __html: about,
        };
    }

    return (
        <div className="flex items-center p-0 space-x-4 ">
            <WobbleCard>

                <Icon className="w-12 h-12 text-[#0ae448]" />
                <div className="">
                    {/* //? THIS font medium */}
                    <h5 className="font-bold">{title}</h5>
                    <p dangerouslySetInnerHTML={createMarkup()} />
                </div>
            </WobbleCard>

        </div>
    );
};

export default ServiceCard;