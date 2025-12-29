import React, { useState, useLayoutEffect, useEffect } from "react";

export default function SlideIndicator({
  totalSlides,
  currentIndex,
  onSlideChange,
  activeColor,
  inactiveColor,
  duration = 3000,
  direction = 1,
}) {
  const [progress, setProgress] = useState(0);

  // 1️⃣ Reset instantly before paint
  useLayoutEffect(() => {
    setProgress(0);
  }, [currentIndex]);

  // 2️⃣ Animate after render
  useEffect(() => {
    const id = requestAnimationFrame(() => {
      setProgress(100);
    });
    return () => cancelAnimationFrame(id);
  }, [currentIndex]);

  return (
    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
      {Array.from({ length: totalSlides }).map((_, index) => {
        const isActive = index === currentIndex;

        return (
          <button
            key={index}
            onClick={() => onSlideChange(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`relative h-2 rounded-full overflow-hidden transition-all duration-300
              ${isActive ? "w-8" : "w-2"}
            `}
          >
            {/* Base */}
            <div className={`absolute inset-0 ${inactiveColor}`} />

            {/* Apple-style progress */}
            {isActive && (
              <div
                className={`absolute inset-y-0 ${activeColor} ease-linear`}
                style={{
                  width: `${progress}%`,
                  transition: `width ${duration}ms linear`,
                  [direction === 1 ? "left" : "right"]: 0,
                }}
              />
            )}
          </button>
        );
      })}
    </div>
  );
}
