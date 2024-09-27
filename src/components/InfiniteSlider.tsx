"use client";
import HTML from '/html.png'
import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
    return (
        <div className="h-[5rem] rounded-md flex flex-col antialiased bg-transparent dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
            <InfiniteMovingCards
                items={logos}
                direction="right"
                speed="fast"
            />
        </div>
    );
}

const logos = [
    {
        src: '/html.png',
        alt: "HTML Logo",
    },
    {
        src: '/css.png',
        alt: "CSS Logo",
    },
    {
        src: '/react.png',
        alt: "React Logo",
    },
    {
        src:'/mongo.png',
        alt: "MongoDB Logo",
    },
    {
        src: '/node.png',
        alt: "Node.js Logo",
    },
    {
        src: '/js.png',
        alt: "JavaScript Logo",
    },
    {
        src:'/mysql.png',
        alt: "MySQL Logo",
    }
];
