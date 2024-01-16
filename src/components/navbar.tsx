"use client"; // this is a client component
import React from "react";
import { useState } from "react";
import { Link } from "react-scroll/modules";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { RiMoonFill, RiSunLine } from "react-icons/ri";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { motion, AnimatePresence, useCycle } from "framer-motion";


interface NavItem {
  label: string;
  page: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Home",
    page: "home",
  },
  {
    label: "About",
    page: "about",
  },
  {
    label: "Projects",
    page: "projects",
  },
  {
    label: "Contact me",
    page: "contact",
  },
];


export default function Navbar() {
    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === "system" ? systemTheme : theme;
    const pathname = usePathname();
    const [navbar, toggleNavbar] = useCycle(false, true);
  
    const variants = {
      open: {
        opacity: 1,
        x: 0,
      },
      closed: {
        opacity: 0,
        x: "-100%",
      },
    };
  
    return (
      <header className="bg-gradient-to-bl from-teal-100 to-amber-100 nav-bar-bg w-full mx-auto px-4 sm:px-20 fixed top-0 z-50 shadow dark:border-b dark:border-stone-600 dark:bg-gradient-to-tr dark:from-lime-700 dark:to-gray-400">
        <div className="justify-between md:items-center md:flex">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <Link to="home">
                <div className="container flex items-center space-x-2">
                  <h2 className="text-2xl hover:cursor-pointer font-bold dark:text-white hover:text-amber-600 dark:hover:text-emerald-900 transition duration-300 ease-in-out transform hover:scale-105">
                    Jose Lopez
                  </h2>
                </div>
              </Link>
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => toggleNavbar()}
                >
                  {navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
                </button>
              </div>
            </div>
          </div>
  
          <div className="hidden md:flex md:items-center">
            {NAV_ITEMS.map((item, idx) => (
              <Link
                key={idx}
                to={item.page}
                className="hover:cursor-pointer mr-6 text-neutral-900 hover:text-orange-700 dark:text-neutral-100 dark:hover:text-emerald-700 transition duration-300 ease-in-out transform hover:scale-110"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                {item.label}
              </Link>
            ))}
            {currentTheme === "dark" ? (
              <button
                onClick={() => setTheme("light")}
                className="bg-slate-100 p-2 rounded-xl"
              >
                <RiSunLine size={25} color="black" />
              </button>
            ) : (
              <button
                onClick={() => setTheme("dark")}
                className="bg-slate-100 p-2 rounded-xl"
              >
                <RiMoonFill size={25} />
              </button>
            )}
          </div>
  
          <AnimatePresence>
            {navbar && (
              <motion.div
                className="flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0"
                initial="closed"
                animate="open"
                exit="closed"
                variants={variants}
                transition={{ duration: 0.3 }}
              >
                <div className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                  {NAV_ITEMS.map((item, idx) => (
                    <Link
                      key={idx}
                      to={item.page}
                      className="block lg:inline-block text-neutral-900 hover:text-neutral-500 hover:cursor-pointer dark:text-neutral-100 dark:hover:text-emerald-700 transition duration-300 ease-in-out transform hover:scale-105"
                      activeClass="active"
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={500}
                      onClick={() => toggleNavbar()}
                    >
                      {item.label}
                    </Link>
                  ))}
                  {currentTheme === "dark" ? (
                    <button
                      onClick={() => setTheme("light")}
                      className="bg-slate-100 p-2 rounded-xl"
                    >
                      <RiSunLine size={25} color="black" />
                    </button>
                  ) : (
                    <button
                      onClick={() => setTheme("dark")}
                      className="bg-slate-100 p-2 rounded-xl"
                    >
                      <RiMoonFill size={25} />
                    </button>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>
    );
  }
  