import Button from "../Button";

const ImageCard = ({
  imageMobile = "/placeholder.jpg",
  imageDesktop = "/placeholder.jpg",
  title = "",
  description = "",
  btn1 = null,
  btn2 = null,
  logoMobile = null,
  logoDesktop = null,
  css = "relative w-full h-72 md:h-96 lg:h-120 2xl:h-150",
 
}) => {
 

  return (
    <div className={css}>
      {/* Image */}
      <picture>
        <source media="(min-width: 740px)" srcSet={imageDesktop} />
        <img
          src={imageMobile}
          alt={title || "Card image"}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </picture>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center gap-3 mt-10 px-4">
        {logoMobile && (
          <picture>
            {logoDesktop && (
              <source media="(min-width: 2040px)" srcSet={logoDesktop} />
            )}
            <img
              src={logoMobile}
              alt="Brand logo"
              className="mx-auto"
              loading="lazy"
            />
          </picture>
        )}

        {title && (
          <h1 className="font-medium text-[28px] lg:text-[36px] 2xl:text-[52px] leading-[1.05]">
            {title}
          </h1>
        )}

        {description && (
          <p
            className={`font-light text-[#161616] text-[19px] lg:text-[24px] w-94.5 -mt-2 `}
          >
            {description}
          </p>
        )}

        {(btn1 || btn2) && (
          <div className="flex gap-4 ">
            {btn1}
            {btn2}
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageCard;
