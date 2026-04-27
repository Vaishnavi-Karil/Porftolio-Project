import React, { useState, useCallback, useRef } from "react";
import styles from "./SocialIcon.module.css";

const SocialIcon = ({
  icon: Icon,
  href,
  target = "_blank",
  title,
  className = "",
  externalSvg = null,
}) => {
  const [isActive, setIsActive] = useState(false);
  const soundTimeoutRef = useRef(null);
  const isPlayingRef = useRef(false);

  const playClickSound = useCallback(() => {
    // Prevent multiple overlapping sounds
    if (isPlayingRef.current) return;

    isPlayingRef.current = true;

    try {
      const audioContext = new (window.AudioContext || window.webkitAudioContext)();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);

      oscillator.frequency.value = 800;
      oscillator.type = "sine";
      gainNode.gain.setValueAtTime(0.05, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.1);

      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.1);
    } catch (e) {
      // Fallback if AudioContext is not supported
    }

    // Clear any existing timeout and set a new one to prevent rapid clicks
    if (soundTimeoutRef.current) {
      clearTimeout(soundTimeoutRef.current);
    }
    soundTimeoutRef.current = setTimeout(() => {
      isPlayingRef.current = false;
    }, 100);
  }, []);

  const handleClick = (e) => {
    // Prevent default if it's a link click
    e.preventDefault();

    // Play click sound
    playClickSound();

    // Mark as active
    setIsActive(true);

    // Open the link after a brief delay for the animation
    setTimeout(() => {
      window.open(href, target);
    }, 150);

    // Reset active state after animation
    setTimeout(() => {
      setIsActive(false);
    }, 300);
  };

  return (
    <a
      href={href}
      target={target}
      title={title}
      className={`${styles.socialIcon} ${isActive ? styles.socialIconActive : ''} ${className}`}
      onClick={handleClick}
      rel={target === "_blank" ? "noopener noreferrer" : ""}
    >
      {externalSvg ? (
        <span className={styles.iconWrapper}>
          {externalSvg}
        </span>
      ) : (
        <Icon />
      )}
    </a>
  );
};

export default SocialIcon;