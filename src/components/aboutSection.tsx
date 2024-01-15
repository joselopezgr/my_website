import React from "react";
import Image from "next/image";
import { FaAws, FaDocker, FaJava, FaReact } from "react-icons/fa";
import { SiElastic, SiNextdotjs, SiRuby, SiTypescript } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io5";
import Link from "next/link";

const technologies = [
  { Java: { icon: <FaJava /> , url: "https://docs.oracle.com/en/java/" }},
  { TypeScript: { icon: <SiTypescript /> , url: "https://www.typescriptlang.org/docs/" }},
  { JavaScript: { icon: <IoLogoJavascript /> , url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" }},
  { Ruby: { icon: <SiRuby /> , url: "https://ruby-doc.org/" }},
  { React: { icon: <FaReact /> , url: "https://react.dev/" }},
  { Nextjs: { icon: <SiNextdotjs /> , url: "https://nextjs.org/docs" }},
  { AWS: { icon: <FaAws /> , url: "https://docs.aws.amazon.com/" }},
  { MongoDB: { icon: <DiMongodb /> , url: "https://www.mongodb.com/docs/" }},
  { ElasticStack: { icon: <SiElastic /> , url: "https://www.elastic.co/guide/index.html?utm_campaign=Google-B-EMEA-UKI-Exact&utm_content=Stack-Documentation&utm_source=google&utm_medium=cpc&device=c&utm_term=elasticsearch%20documentation&gad_source=1&gclid=CjwKCAiAzJOtBhALEiwAtwj8tmbNwjhAC2TgnNkX7bt5Wf3ygjNFuqXqNCieEwG4il8yLvKTVeEPuRoC6gcQAvD_BwE" }},
  { Docker: { icon: <FaDocker /> , url: "https://docs.docker.com/" }},
];

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              Hello, my name is Jose. I am a{" "}
              <span className="font-bold">{"highly ambitious"}</span>,
              <span className="font-bold">{" self-motivated"}</span>, and
              <span className="font-bold">{" driven"}</span> software engineer
              based in Leeds, United Kingdom.
            </p>
            <br />
            <p>
              I have a wide range of hobbies and passions that keep me busy.
              From reading, gym, traveling, to video games, I am always seeking
              new experiences and love to keep myself engaged and learning new
              things.
            </p>
            <br />
            <p>
              I believe that you should{" "}
              <span className="font-bold text-teal-500">
                never stop growing
              </span>{" "}
              and that&#39;s what I strive to do, I have a passion for
              technology and a desire to always push the limits of what is
              possible. I am excited to see where my career takes me and am
              always open to new opportunities. 🙂
            </p>
          </div>

          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {technologies.map((item, idx) => {
                const [key, value] = Object.entries(item)[0];
                return (
                  <Link key={idx} href={value.url} target="_blank">
                    <p
                      key={idx}
                      className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold flex items-center"
                    >
                      <span className="mr-1">{value.icon}</span>
                      <span className="md:inline hidden">{key}</span>
                    </p>
                  </Link>
                );
              })}
            </div>
            <Image
              src="/man-illustration.png"
              alt="cartoon-char"
              width={325}
              height={325}
              className="hidden md:block md:relative md:bottom-4 md:left-32 md:z-0 bg-transparent"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
