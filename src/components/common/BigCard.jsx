import React from "react";
import Button from "./Button";

const BigCard = ({
  videoDesktop,
  videoMobile,
  imageMobile,
  imageDesktop,
  title,
  description,
  btn1,
  btn2,
  logoMobile,
  logoDesktop,
}) => {
  return (
    <div className="relative h-125 lg:h-173 w-full overflow-hidden mb-3">
      {/* Fallback Image */}
      <picture>
        <source media="(min-width: 640px)" srcSet={imageDesktop} />
        <img
          src={imageMobile}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </picture>

      {/* Mobile Video */}
      <video
        src={videoMobile}
        autoPlay
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover block md:hidden"
      />

      {/* Desktop Video */}
      <video
        src={videoDesktop}
        autoPlay
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover hidden md:block"
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center mt-10 ">
        {logoMobile && logoDesktop && (
          <picture>
            <source media="(min-width: 640px)" srcSet={logoDesktop} />
            <img src={logoMobile} alt="Logo" className="" loading="lazy" />
          </picture>
        )}
        <div className="flex flex-col gap-2 w-full">
          <h1
            className="
                    mx-auto text-center font-medium 
                    text-[32px] lg:text-[52px]
                    md:w-full
                    leading-[1.05] 
                    w-75 
                    max-h-24
                  "
          >
            {title}
          </h1>

          <p
            className="
                    mx-auto text-center font-light wrap-break-word
                    text-[#161616] text-[19px] lg:text-[28px] -mt-2
                    items-center
                    w-66.5 md:w-auto 
                    max-h-16. 
                  "
          >
            {description}
          </p>
        </div>

        <div className="flex gap-4 mt-3">
          {btn1}
          {btn2}
        </div>
      </div>
    </div>
  );
};

export default BigCard;
