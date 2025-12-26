import React from "react";

const Card = ({
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
  css,
  variant = "big", // 👈 default
}) => {
  const descriptionWidth = variant === "small" ? "w-66.5" : "w-auto";

  return (
    <div className={css}>
      {/* Image */}
      <picture>
        <source media="(min-width: 740px)" srcSet={imageDesktop} />
        <img
          src={imageMobile}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </picture>

      {/* Videos */}
      {videoMobile && (
        <video
          src={videoMobile}
          autoPlay
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover block md:hidden"
        />
      )}

      {videoDesktop && (
        <video
          src={videoDesktop}
          autoPlay
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover hidden md:block"
        />
      )}

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center gap-2 mt-10">
        {logoMobile && logoDesktop && (
          <picture>
            <source media="(min-width: 2040px)" srcSet={logoDesktop} />
            <img src={logoMobile} alt="Logo" loading="lazy" />
          </picture>
        )}

        <div className="flex flex-col gap-2 w-full">
          {title && (
            <h1 className="mx-auto font-medium text-[28px] lg:text-[36px] 2xl:text-[52px]  leading-[1.05]">
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

        {(btn1 || btn2) && (
          <div className="flex gap-4 mt-3">
            {btn1}
            {btn2}
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
