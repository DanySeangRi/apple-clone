import React from "react";

const Card = ({
  videoDesktop = null,
  videoMobile = null,
  imageMobile = "/placeholder.jpg",
  imageDesktop = "/placeholder.jpg",
  title = "",
  description = "",
  btn1 = null,
  btn2 = null,
  logoMobile = null,
  logoDesktop = null,
  css = "relative w-full h-72 md:h-96 lg:h-120 2xl:h-150", // default styling
  variant = "big", // default variant
  appleTvLogo=null,
}) => {
  // Description width depends on variant
  const descriptionWidth = variant === "small" ? "w-66.5" : "w-auto";

  return (
    <div className={`relative ${css}`}>
      {/* Image */}
      {imageMobile && (
        <picture>
          {imageDesktop && <source media="(min-width: 740px)" srcSet={imageDesktop} />}
          <img
            src={imageMobile}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </picture>
      )}

      {/* Videos */}
      {videoMobile && (
        <video
          src={videoMobile}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover block md:hidden"
        />
      )}
      {videoDesktop && (
        <video
          src={videoDesktop}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover hidden md:block"
        />
      )}

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center gap-2 mt-10 px-4">
        {/* Logo */}
        {logoMobile && logoDesktop && (
          <picture>
            <source media="(min-width: 2040px)" srcSet={logoDesktop} />
            <img src={logoMobile} alt="Logo" loading="lazy" className="mx-auto" />
          </picture>
        )}

        {/* Title & Description */}
        <div className="flex flex-col gap-2 w-full">
          {title && (
            <h1 className="mx-auto font-medium text-[28px] lg:text-[36px] 2xl:text-[52px] leading-[1.05]">
              {title}
            </h1>
          )}
          {description && (
            <p
              className={`mx-auto font-light text-[#161616] text-[19px] lg:text-[24px] -mt-2 ${descriptionWidth}`}
            >
              {description}
            </p>
          )}
        </div>

        {/* Buttons */}
        {(btn1 || btn2) && (
          <div className="flex gap-4 mt-3">
            {btn1}
            {btn2}
          </div>
        )}
  

      </div>
       <div className="p-8 md:hidden relative flex z-10 justify-center">
       {appleTvLogo &&(
        <picture>
          <source   />
          <img src={appleTvLogo} alt="" />
        </picture>
       )}
        </div>
    </div>
  );
};

export default Card;
