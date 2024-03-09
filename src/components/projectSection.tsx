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
      <Fade direction="up" delay={1900} triggerOnce>
        <h1 className="text-left font-bold text-4xl pb-8">
          &lt; Projects <span style={{ color: "#d66853" }}>/</span>&gt;
        </h1>
      </Fade>
      <div className="project-container flex justify-center items-center h-full mt-6 pt-8 pb-8">
        <p className="font-bold text-gray-800 tracking-wider">
          WORK IN PROGRESS
        </p>
      </div>
    </section>
  );
};

export default ProjectSection;
