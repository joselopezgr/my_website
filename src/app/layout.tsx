"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { SplashScreen } from "../components/SplashScreen";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [sidebarVisible, setSidebarVisible] = useState<boolean>(false);

  useEffect(() => {
    if (isLoading) return;
  }, [isLoading]);

  const toggleSidebar = () => {
    setSidebarVisible((prev) => !prev);
  };

  return (
    <html lang="en">
      <head />
      <body className={`bg-gradient-to-r from-orange-100 to-zinc-50 dark:bg-gradient-to-r dark:from-slate-800 dark:to-slate-600 ${inter.className}`}>
        <AnimatePresence mode="wait">
          {isLoading && isHome ? (
            // Wrap SplashScreen in motion.div to apply animations
            <motion.div
              key="splash-screen"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <SplashScreen finishedLoading={() => setIsLoading(false)} />
            </motion.div>
          ) : (
            <motion.div
              key="content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="relative h-screen overflow-hidden"
            >
              <div className="flex">
                  <ThemeProvider enableSystem={true} attribute="class">
                    <Navbar/>
                    {children}
                  </ThemeProvider>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </body>
    </html>
  );
}
