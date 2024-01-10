import React, { useState } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoMdClose, IoMdMenu } from "react-icons/io";

interface NavItems {
  label: string;
  page: string;
}

const NAV_ITEMS: Array<NavItems> = [
  {
    label: "Home",
    page: "home",
  },
  {
    label: "Projects",
    page: "projects",
  },
  {
    label: "About me",
    page: "about",
  },
];

export const Navbar = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const pathname = usePathname();
  const [navBar, setNavBar] = useState(false);

  return (
    <header>
      <div className="bg-black bg-opacity-20 backdrop-filter backdrop-blur-lg p-4">
        <div className="flex items-center justify-center">
          <div className="mr-4">
            <Image
              src="/myPicture.jpg"
              width={300}
              height={350}
              alt="Jose Picture"
              className="w-20 h-26 rounded-full"
            />
          </div>
          <div className="text-white">
            <p className="text-xl font-bold mb-2 font-syne text-3xl tracking-widest font-syne font-bold italic">
              Jose Lopez
            </p>
          </div>
          <div className="md:hidden">
            <button
              className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
              onClick={() => setNavBar(!navBar)}
            >
              {navBar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
            </button>
          </div>
        </div>
        <div
          className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
            navBar ? "block" : "hidden"
          }`}
        >
          <div className="flex space-x-2 md:py-5 md:block">
            {NAV_ITEMS.map((item, i) => (
              <Link
                key={i}
                href={item.page}
                className="text-white hover:text-gray-300 transition duration-300"
              >
                {item.label}
              </Link>
            ))}
            {currentTheme === "dark" ? (
              <button
                key="light"
                onClick={() => setTheme("Light")}
                className=""
              ></button>
            ) : (
              <button
                key="dark"
                onClick={() => setTheme("Dark")}
                className=""
              ></button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
