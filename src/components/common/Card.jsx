import React from "react";
import Button from "./Button";
import { LuDot } from "react-icons/lu";
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
  appleTvLogo = null,
  thumbNail = null,
  slideDescription = "",
  slideTilte = "",
  titleVideo="",
  descriptionVideo="",
}) => {
  // Description width depends on variant
  const descriptionWidth = variant === "small" ? "w-66.5" : "w-auto";

  return (
    <div className={`relative ${css}`}>
      {/* Image */}
      {imageMobile && (
        <picture>
          {imageDesktop && (
            <source media="(min-width: 740px)" srcSet={imageDesktop} />
          )}
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
            <img
              src={logoMobile}
              alt="Logo"
              loading="lazy"
              className="mx-auto"
            />
          </picture>
        )}

        {/* Title & Description for image */}
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
          {/* Title & Description for video */}
      {(titleVideo || descriptionVideo) && (
        <div className="flex items-center relative top-100 lg:top-160 flex-col justify-center gap-1 ">
          <div>
              <h1 className=" text-white text-[32px] lg:text-[56px]">{titleVideo}</h1>
                <p
                  className={`mx-auto font-light text-white text-[19px] lg:text-[24px] -mt-2 ${descriptionWidth}`}
                >
                  {descriptionVideo}
                </p>
          </div>
           <div className="flex gap-4">
              <Button
                    css="bg-white w-[110px] h-[36px] text-black lg:w-33 lg:h-11 "
                    title="Learn more"
                  />
              <Button 
                  css="bg-transperant w-[110px] h-[36px] hover:bg-white hover:text-black border border-white text-white lg:w-[72px] lg:h-11 "
                  title="buy"
                  />
           </div>
        </div>
      )}

      </div>
      {(appleTvLogo || thumbNail || slideTilte || slideDescription) && (
        <div className=" h-full">
          <div className="p-7 gap-2 flex-col relative flex z-10 items-center h-1/2">
            {appleTvLogo && (
              <picture>
                <source />
                <img src={appleTvLogo} alt="" className="md:hidden" />
              </picture>
            )}
            {thumbNail && (
              <picture>
                <source />
                <img src={thumbNail} alt="" className="md:hidden" />
              </picture>
            )}
          </div>

          <div className="z-10 relative flex-col lg:flex-row flex justify-end lg:justify-start h-1/2 items-center lg:items-end py-10  gap-2 lg:p-18  lg:gap-8">
            <Button
              css="bg-white w-[110px] h-[36px] text-black lg:w-29 lg:h-11 hidden lg:inline-block"
              title="Stream Now"
            />
            <div className="flex flex-col lg:flex-row text-[17px] lg:text-[21px] lg:mb-2">
              <p className="   text-white font-bold flex justify-center">
                {slideTilte}
                <p className="md:flex hidden items-center">
                  <LuDot size={30} />
                </p>
              </p>

              <p className="  text-white ">{slideDescription}</p>
            </div>
            <Button
              css="bg-white w-[110px] h-[36px] text-black lg:w-33 lg:h-11 lg:hidden "
              title="Stream Now"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
