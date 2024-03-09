"use client";
import Image from "next/image";
import React from "react";

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
      <h1 className="text-left font-bold text-4xl pb-8">
        &lt; Projects <span style={{ color: "#d66853" }}>/</span>&gt;
      </h1>
      <div className="contact-container flex justify-center items-center h-full mt-6 pt-8 pb-8">
      </div>
    </section>
  );
};

export default ProjectSection;
