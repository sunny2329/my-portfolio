import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { AiOutlineApi } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import { IProject, IService, ISkill } from "./types";

import { BsCircleFill } from "react-icons/bs";

export const services: IService[] = [
    {
        Icon: RiComputerLine,
        title: "Frontend Development",
        about:
            "I can build a beautiful and scalable SPA using <b> HTML</b>,<b>CSS</b>   and <b>React.js</b> ",
    },
    {
        Icon: FaServer,
        title: "Backend  Development",
        about:
            "handle database, server, api using <b>Express </b> & other popular frameworks",
    },
    {
        Icon: AiOutlineApi,
        title: "API Development",
        about:
            "I can develop robust  REST API using <b>django-rest-api</b>  & <b>Node API</b> ",
    },
    {
        Icon: MdDeveloperMode,
        title: "Competitive Coder",
        about: "a daily problem solver in <b>HackerRank</b>  and <b>Leet Code</b> ",
    }
];

export const languages: ISkill[] = [
    {
        Icon: BsCircleFill,
        name: "Python",
        level: "45",
    },
    {
        Icon: BsCircleFill,
        name: "JavaScript",
        level: "85",
    },
    {
        Icon: BsCircleFill,
        name: "C++",
        level: "60",
    },
    {
        Icon: BsCircleFill,
        name: "C",
        level: "60",
    },
    {
        Icon: BsCircleFill,
        name: "SQL",
        level: "50",
    },
    {
        Icon: BsCircleFill,
        name: "TypeScript",
        level: "60",
    }
];

export const tools: ISkill[] = [
    {
        Icon: BsCircleFill,
        name: "React",
        level: "80",
    },
    {
        Icon: BsCircleFill,
        name: "NextJS",
        level: "70",
    },
    {
        Icon: BsCircleFill,
        name: "NodeJS",
        level: "75",
    },
    {
        Icon: BsCircleFill,
        name: "Express",
        level: "70",
    },
    {
        Icon: BsCircleFill,
        name: "MongoDB",
        level: "75",
    },
    {
        Icon: BsCircleFill,
        name: "Docker",
        level: "50",
    },
    {
        Icon: BsCircleFill,
        name: "Redux Toolkit",
        level: "70",
    },
    {
        Icon: BsCircleFill,
        name: "TailwindCSS",
        level: "60",
    }
];

export const projects: IProject[] = [
    {
        id: 8,
        name: "Web Scrapper",
        description:
            "Scrap the data that you need from any website and use it..",
        image_path: "/webscrapper.png",
        deployed_url: "https://github.com/sunny2329",
        github_url: "https://github.com/sunny2329",
        category: ["react","nextjs"],
        key_techs: ["React", "Chart.js", "Material UI"],
    },
    {
        id: 7,
        name: "Algorithm Visualizer",
        //TODO add data
        image_path: "/algoVisual.png",
        deployed_url: "https://visual-algorithm.web.app/",
        github_url: "https://github.com/sunny2329",
        category: ["react"],
        description:
            "An web app which shows how an algorithm (path finding or sorting) works with cool animation",
        key_techs: ["React", "firebase", "Framer Motion"],
    },

    {
        id: 1,
        name: "Chat-PDF",
        image_path: "/chatpdf.png",
        deployed_url: "https://github.com/sunny2329",
        github_url: "https://github.com/sunny2329",
        category: ["node", "mongo", "react","nextjs"],
        description:
            "Chat with any PDF and find your answers..",
        key_techs: [
            "React",
            "Redux",
            "Node",
            "Express",
            "Mongo",
            "REST API",
            "Tailwind CSS",
        ],
    },

    {
        id: 2,
        name: "Expense Tracker",
        image_path: "/expense.png",
        deployed_url: "https://github.com/sunny2329",
        github_url: "https://github.com/sunny2329",
        //TODO type on category
        category: ["node", "react",'mongo'],
        description:
            "Expense Tracker with AI integration to record your all expenses...",
        key_techs: ["React", "Node", "Express", "Socket", "Bootstrap"],
    },

    {
        id: 3,
        name: "Ecommerce Website",
        image_path: "/ecommerce.png",
        deployed_url: "http://github.com/sunny2329",
        github_url: "https://github.com/sunny2329",
        category: ["django", "react"],
        description:
            "Ecommerce website made with FakeAPI store....",
        key_techs: ["React", "Django", "Django REST API"],
    },
    {
        id: 4,
        name: "Sales and Management Portal",
        image_path: "/sales.png",
        deployed_url: "https://github.com/sunny2329",
        category: ["vanilla","react","data","nextjs","mongo"],
        github_url: "https://github.com/sunny2329",
        description: "A beautiful sales and management portal created with NextJS..",
        key_techs: ["Next.js", "Framer Motion", "TypeScript", "Tailwind"],
    },
];