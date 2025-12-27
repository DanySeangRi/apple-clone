import React, { useState, useRef, useEffect } from "react";
import Card from "../../common/card/Card.jsx";
import Button from "../../common/Button.jsx";
import SlideIndicator from "../../ui/SlideIndicator.jsx";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { FaPause } from "react-icons/fa";
import { Play, Pause } from "lucide-react";
import {
  btnCss,
  cardCss,
  homeHeroData,
  slideShowData,
} from "../data/promosData.js";

const Main = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const slideshowRef = useRef(null);
  const autoScrollIntervalRef = useRef(null);
  const totalSlides = slideShowData.length;
  const loopedSlides = [...slideShowData];

  // Auto-scroll every 3 seconds
  useEffect(() => {
    const startAutoScroll = () => {
      if (isPaused) return;
      autoScrollIntervalRef.current = setInterval(() => {
        if (slideshowRef.current && !isPaused) {
          const slideWidth = slideshowRef.current.children[0]?.offsetWidth + 16;
          if (slideWidth) {
            slideshowRef.current.scrollLeft += slideWidth;
          }
        }
      }, 3000);
    };

    startAutoScroll();

    return () => {
      if (autoScrollIntervalRef.current) {
        clearInterval(autoScrollIntervalRef.current);
      }
    };
  }, [isPaused]);



  const handleSlideChange = (index) => {
    const actualIndex = index % totalSlides;
    setCurrentSlide(actualIndex);
    if (slideshowRef.current) {
      const slideElement = slideshowRef.current.children[index];
      slideElement?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
    }
  };

  const handleScroll = (e) => {
    const container = e.target;
    const scrollLeft = container.scrollLeft;
    const slideWidth = container.children[0]?.offsetWidth + 16; // width + gap
    const maxScroll = container.scrollWidth - container.clientWidth;
    
    if (slideWidth) {
      let newIndex = Math.round(scrollLeft / slideWidth);
      
      // Update current slide indicator with modulo
      setCurrentSlide(newIndex % totalSlides);
      
      // Loop back to start when reaching end
      if (scrollLeft >= maxScroll - slideWidth * 0.5) {
        setTimeout(() => {
          container.scrollLeft = 0;
        }, 0);
      }
    }
  };

  return (
    <main className="flex flex-col gap-3">
      {/* HERO VIDEO */}
      <section>
        <Card
          variant="video"
          videoDesktop={homeHeroData[0].media.videoDesktop}
          videoMobile={homeHeroData[0].media.videoMobile}
          title={homeHeroData[0].content.title}
          description={homeHeroData[0].content.description}
          css={cardCss[3].bigCard}
        />
      </section>

      {/*  HERO IMAGE CARDS  */}
      <section>
        {homeHeroData.slice(1, 3).map((item, index) => (
          <Card
            key={index}
            variant="image"
            imageDesktop={item.media.imageDesktop}
            imageMobile={item.media.imageMobile}
            title={item.content.title}
            description={item.content.description}
            css={cardCss[0].bigCard}
            btn1={
              <Button
                title={btnCss[ 0].title}
                css={btnCss[ 0].css}
              />
            }
          btn2={
            index === 0
              ? <Button title={btnCss[2].title} css={btnCss[2].css} />
              : <Button title={btnCss[1].title} css={btnCss[1].css} />
          }
            
          />
        ))}
      </section>

      {/*  PROMO GRID  */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {homeHeroData.slice(3).map((item, index) => {
          const showPrimary = index !== 4;
          const showSecondary = true;

          return (
            <Card
              key={index}
              variant="image"
              imageDesktop={item.media.imageDesktop}
              imageMobile={item.media.imageMobile}
              title={item.content.title}
              description={item.content.description}
              logoDesktop={item.logo?.desktop}
              logoMobile={item.logo?.mobile}
              css={cardCss[1].smallCard}
              btn1={
                showPrimary && (
                  <Button title={btnCss[0].title} css={btnCss[0].css} />
                )
              }
              btn2={
                showSecondary && (
                  <Button
                    title={
                      index === 4
                        ? btnCss[4].title
                        : index === 5
                        ? btnCss[5].title
                        : btnCss[1].title
                    }
                    css={
                      index === 4
                        ? btnCss[4].css
                        : index === 5
                        ? btnCss[5].css
                        : btnCss[1].css
                    }
                  />
                )
              }
            />
          );
        })}
      </section>

      {/* SLIDESHOW  */}
      <section className="pt-14 h-180 lg:h-250 relative">
        <h1 className="text-center text-[32px] lg:text-[56px] font-normal mb-6">
          Endless entertainment
        </h1>

        <div className="relative flex items-center justify-center gap-4 px-4">
          {/* Prev Button */}
          <button
            onClick={() => {
              if (slideshowRef.current) {
                const slideWidth = slideshowRef.current.children[0]?.offsetWidth + 16;
                slideshowRef.current.scrollLeft -= slideWidth;
              }
            }}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/20 hover:bg-white/40 text-white transition-all duration-300 hover:scale-110"
            aria-label="Previous slide"
              onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <IoChevronBack size={24} />
          
          </button>

          {/* Pause/Play Button */}
          <button
            onClick={() => setIsPaused(!isPaused)}
            className="absolute -bottom-19 lg:-bottom-38 right-4 z-20 px-2 py-2 rounded-full bg-gray-300 border border-black hover:bg-black/40 text-white transition-all duration-300 text-sm font-medium"
            aria-label={isPaused ? "Resume" : "Pause"}
          >
            {isPaused ?  
           
            <Play className="w-2 h-2 lg:w-3 lg:h-3 text-black fill-white" />
            :  <Pause className="w-2 h-2 lg:w-3 lg:h-3 text-black fill-white" /> }
          </button>

          <div
            ref={slideshowRef}
            className="flex overflow-x-auto snap-x snap-mandatory gap-4 px-[22%] scroll-smooth relative w-full no-scrollbar"
            onScroll={handleScroll}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {loopedSlides.map((item, index) => (
              <div key={index} className="snap-start shrink-0">
                <Card
                  variant="slide"
                  imageDesktop={item.media.imageDesktop}
                  imageMobile={item.media.imageMobile}
                  videoDesktop={item.media.videoDesktop}
                  videoMobile={item.media.videoMobile}
                  appleTvLogo={item.logo.mobile}
                  thumbNail={item.logo.thumbNail}
                  slideTitle={item.content.title}
                  slideDescription={item.content.description}
                  css={cardCss[2].slideShowBigCard}
                />
              </div>
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={() => {
              if (slideshowRef.current) {
                const slideWidth = slideshowRef.current.children[0]?.offsetWidth + 16;
                slideshowRef.current.scrollLeft += slideWidth;
              }
            }}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/20 hover:bg-white/40 text-white transition-all duration-300 hover:scale-110"
            aria-label="Next slide"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <IoChevronForward size={24} />
            
          </button>
        </div>

        {/* Slide Indicator */}
        <SlideIndicator
          totalSlides={totalSlides}
          currentIndex={currentSlide}
          onSlideChange={handleSlideChange}
          activeColor="bg-black/60"
          inactiveColor="bg-gray-400"
        />
      </section>
    </main>
  );
};

export default Main;
