import React, { useState, useRef, useEffect } from "react";
import Card from "../../common/card/Card.jsx";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { Play, Pause } from "lucide-react";
import SlideIndicator from "../../ui/SlideIndicator.jsx";

const Slideshow = ({ 
  slides, 
  cardCss,
background='bg-white',
title='' }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState(1); // 1 = forward, -1 = backward
  const slideshowRef = useRef(null);
  const autoScrollIntervalRef = useRef(null);

  const totalSlides = slides.length;
  const loopedSlides = [...slides,...slides];

  // Auto-scroll effect with direction reversing at ends
  useEffect(() => {
    if (isPaused) return;

    autoScrollIntervalRef.current = setInterval(() => {
      if (slideshowRef.current) {
        const slideWidth = slideshowRef.current.children[0]?.offsetWidth + 16;
        slideshowRef.current.scrollLeft += slideWidth * direction;
      }
    }, 3000);

    return () => clearInterval(autoScrollIntervalRef.current);
  }, [isPaused, direction]);

  const handleSlideChange = (index) => {
    const actualIndex = index % totalSlides;
    setCurrentSlide(actualIndex);

    if (slideshowRef.current) {
      const slideElement = slideshowRef.current.children[index];
      slideElement?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });
    }
  };

  const handleScroll = (e) => {
    const container = e.target;
    const scrollLeft = container.scrollLeft;
    const slideWidth = container.children[0]?.offsetWidth + 16;
    const maxScroll = container.scrollWidth - container.clientWidth;

    if (slideWidth) {
      const newIndex = Math.round(scrollLeft / slideWidth);
      setCurrentSlide(newIndex % totalSlides);

      // Reverse direction at end
      if (scrollLeft >= maxScroll - slideWidth * 0.5) {
        setDirection(-1);
      }
      // Reverse direction at start
      else if (scrollLeft <= slideWidth * 0.5) {
        setDirection(1);
      }
    }
  };

  return (
   
    <div className={`${background} pt-14 relative`}>
       <h1 className="text-center text-[32px] lg:text-[56px]  font-bold mb-6">
        {title}
      </h1>
      <div className={`relative flex h-150 lg:h-200 gap-4   `}>


        {/* Pause/Play */}
        <button
          onClick={() => setIsPaused(!isPaused)}
          className="absolute bottom-3 right-4 z-20 px-2 py-2 rounded-[5px]  border border-gray-500  hover:bg-black/40 text-white transition-all duration-300 text-sm font-medium"
          aria-label={isPaused ? "Resume" : "Pause"}
        >
          {isPaused ? (
            <Play className="w-5 h-5 text-black fill-white" />
          ) : (
            <Pause className="w-5 h-5 text-black fill-white" />
          )}
        </button>

        {/* Slides */}
        <div
          ref={slideshowRef}
          className="flex overflow-x-auto snap-x snap-mandatory gap-4 px-[22%] scroll-smooth w-full no-scrollbar"
          onScroll={handleScroll}
       
        >
          {loopedSlides.map((item, index) => (
            <div key={index} className="snap-start shrink-0  ">
              <Card
                variant="slide"
                imageDesktop={item.media?.imageDesktop}
                imageMobile={item.media?.imageMobile}
                videoDesktop={item.media?.videoDesktop}
                videoMobile={item.media?.videoMobile}
                appleTvLogo={item.logo?.mobile}
                thumbNail={item.logo?.thumbNail}
                slideTitle={item.content.title}
                slideDescription={item.content.description}
                css={cardCss[2].slideShowBigCard}
              />
            </div>
          ))}
        </div>



        {/* Slide Indicator */}
        <SlideIndicator
          totalSlides={totalSlides}
          currentIndex={currentSlide}
          onSlideChange={handleSlideChange}
          activeColor="bg-black/60"
          inactiveColor="bg-gray-400"
          direction={direction}
        />
      </div>
   </div>
  );
};

export default Slideshow;
