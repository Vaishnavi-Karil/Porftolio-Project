import React, { useState, useEffect, useCallback } from "react";

const Typewriter = ({ roles, typingSpeed = 100, backspaceSpeed = 50, pauseDuration = 1500 }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const rolesList = roles || ["React JS Developer", "UI Developer", "MERN Stack Developer", "Fullstack Developer"];

  const type = useCallback(() => {
    const currentRole = rolesList[currentRoleIndex];

    if (isPaused) {
      return;
    }

    if (!isDeleting) {
      // Typing mode
      if (displayText.length < currentRole.length) {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
      } else {
        // Word completed, pause before deleting
        setIsPaused(true);
        setTimeout(() => {
          setIsPaused(false);
          setIsDeleting(true);
        }, pauseDuration);
      }
    } else {
      // Backspace mode
      if (displayText.length > 0) {
        setDisplayText(displayText.substring(0, displayText.length - 1));
      } else {
        // Finished deleting, move to next role
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % rolesList.length);
      }
    }
  }, [displayText, currentRoleIndex, isDeleting, isPaused, rolesList, pauseDuration]);

  useEffect(() => {
    const timer = setTimeout(() => {
      type();
    }, isPaused ? pauseDuration : isDeleting ? backspaceSpeed : typingSpeed);

    return () => clearTimeout(timer);
  }, [type, isPaused, isDeleting, typingSpeed, backspaceSpeed, pauseDuration]);

  return (
    <span style={{ display: "inline-flex", alignItems: "center" }}>
      <span
        style={{
          background: "linear-gradient(90deg, #149ddd 0%, #00d4ff 50%, #149ddd 100%)",
          backgroundSize: "200% auto",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          borderBottom: "3px solid transparent",
          borderImage: "linear-gradient(90deg, #149ddd, #00d4ff) 1",
          paddingBottom: "2px",
          fontWeight: 600,
        }}
      >
        {displayText}
      </span>
      <span
        style={{
          color: "#00d4ff",
          marginLeft: "2px",
          fontWeight: "bold",
          animation: "blink 1s infinite",
        }}
      >
        |
      </span>
      <style>
        {`
          @keyframes blink {
            0%, 50% { opacity: 1; }
            51%, 100% { opacity: 0; }
          }
        `}
      </style>
    </span>
  );
};

export default Typewriter;