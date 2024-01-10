"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { SplashScreen } from "./components/SplashScreen";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Navbar } from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    if (isLoading) return;
  }, [isLoading]);

  return (
    <html lang="en">
      <body className={inter.className}>
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
            // Render children with animation
            <motion.div
              key="content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="relative h-screen overflow-hidden"
            >
              <div className="absolute inset-0 z-0">
                <video
                  src={"universe.mp4"}
                  autoPlay
                  muted
                  loop
                  className="w-full h-full object-cover"
                />
              </div>
              <Navbar />
              <div className="z-10 relative">{children}</div>
            </motion.div>
          )}
        </AnimatePresence>
      </body>
    </html>
  );
}
