import React from 'react';

export default function SlideIndicator({ 
  totalSlides, 
  currentIndex, 
  onSlideChange,
  activeColor,
  inactiveColor,
  direction = 1,
}) {
  return (
    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
      {Array.from({ length: totalSlides }).map((_, index) => (
        <button
          key={index}
          onClick={() => onSlideChange(index)}
          className={`relative h-3 rounded-full transition-all duration-300 overflow-hidden ${
            index === currentIndex
              ? `w-8` // Active: wider
              : `w-3` // Inactive: circular
          }`}
          aria-label={`Go to slide ${index + 1}`}
        >
          {/* Background (inactive color) */}
          <div className={`absolute inset-0 ${inactiveColor}`} />
          
          {/* Foreground (active color that fills) */}
          <div 
            className={`absolute inset-0 ${activeColor} transition-all duration-3000 ${
              direction === 1 
                ? 'origin-left' 
                : 'origin-right'
            }`}
            style={{
              transform: direction === 1
                ? (index < currentIndex 
                  ? 'scaleX(1)' // Already completed
                  : index === currentIndex 
                  ? 'scaleX(0)' // Currently filling
                  : 'scaleX(0)') // Not reached yet
                : (index > currentIndex 
                  ? 'scaleX(1)' // Already completed (reversed)
                  : index === currentIndex 
                  ? 'scaleX(0)' // Currently filling (reversed)
                  : 'scaleX(0)'), // Not reached yet
            }}
          />
        </button>
      ))}
    </div>
  );
}