"use client";
import React from "react";
import { Fade } from "react-awesome-reveal";

const ProjectSection = () => {
  const images = [
    {
      src: `https://picsum.photos/400/300?random=${Math.random()}`,
      title: "Project in progress",
    },
    {
      src: `https://picsum.photos/400/300?random=${Math.random()}`,
      title: "Project in progress",
    },
  ];

  return (
    <section id="projects" className="mx-auto max-w-6xl px-6">
      <div className="my-12 pb-16 md:my-16 md:pb-20 lg:my-20 lg:pb-24 xl:my-24 xl:pb-28">
      <div className="project-container flex justify-center items-center h-full mt-6 pt-8 pb-8">
        <p className="font-bold text-gray-800 tracking-wider">
          WORK IN PROGRESS
        </p>
      </div>
      </div>
    </section>
  );
};

export default ProjectSection;
