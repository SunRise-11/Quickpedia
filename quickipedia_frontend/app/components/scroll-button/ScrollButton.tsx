"use client";
import React, { useState, useEffect } from "react";

export const ScrollButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const checkScroll = () => {
    const threshold = 300; // Adjust this to change when the button appears
    setIsVisible(window.scrollY > threshold);
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScroll);

    return () => {
      window.removeEventListener("scroll", checkScroll);
    };
  }, []);

  const buttonStyle: React.CSSProperties = {
    position: "fixed",
    bottom: isVisible ? "33%" : "-100px", // Increase the off-screen value if needed
    right: "20px",
    opacity: isVisible ? 1 : 0, // Gradual appearance/disappearance
    transition: "opacity 0.5s ease, bottom 0.5s ease", // Transition for both properties
  };

  return (
    <button
      type="button"
      className={
        "flex flex-col justify-center group bg-secondaryB hover:bg-ternary font-medium rounded-lg text-sm p-2.5 text-center mr-2"
      }
      style={buttonStyle}
    >
      <svg
        className="w-4 h-4 text-primaryB"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1024 1024"
        fill="white"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="40"
          d="M572.235 205.282v600.365a30.118 30.118 0 1 1-60.235 0V205.282L292.382 438.633a28.913 28.913 0 0 1-42.646 0 33.43 33.43 0 0 1 0-45.236l271.058-288.045a28.913 28.913 0 0 1 42.647 0L834.5 393.397a33.43 33.43 0 0 1 0 45.176 28.913 28.913 0 0 1-42.647 0l-219.618-233.23z"
        />
      </svg>
    </button>
  );
};
