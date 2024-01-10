// SplashScreen.tsx
import React, { useEffect, useState } from "react";
import anime from "animejs";
import { useAnimation } from "framer-motion";

interface SplashScreenProps {
  finishedLoading: () => void;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({
  finishedLoading,
}) => {
  const [isMounted, setIsMounted] = useState<boolean>(false);

  const animate = () => {
    const loader1 = anime.timeline();
    const loader2 = anime.timeline({
      complete: () => finishedLoading(),
    });

    // SVG line drawing animation for the path
    loader1.add({
      targets: ".line-drawing-svg path",
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: "easeInOutQuad",
      duration: 4000,
    });

    // SVG line drawing animation for the text
    loader2.add({
      targets: ".line-drawing-svg text",
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: "easeInOutQuad",
      duration: 4000,
      offset: "-=2000", // Start after the path animation
    });
  };

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 10);
    animate();
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      className="relative h-screen flex items-center justify-center"
      data-is-mounted={isMounted}
    >
      <video
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1, // Place the video behind other content
          filter: "blur(10px)"
        }}
      >
        <source src="/universe.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <svg
        className="line-drawing-svg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        width="300"
        height="300"
        style={{
          strokeDasharray: "500",
          strokeDashoffset: "500",
        }}
      >
        <path
          fill="none"
          stroke="#FDEFEE"
          strokeWidth="1"
          d="M10 10 L90 10 L90 90 L10 90 Z"
        />
        <text
          x="50"
          y="50"
          textAnchor="middle"
          alignmentBaseline="middle"
          fill="#d7e2f3"
          fontSize="16"
        >
          Welcome
        </text>
      </svg>
    </div>
  );
};
