import Button from "../Button";
import { LuDot } from "react-icons/lu";

const SlideCard = ({
  imageMobile = "/placeholder.jpg",
  imageDesktop = "/placeholder.jpg",
  videoMobile,
  videoDesktop,
  appleTvLogo,
  thumbNail,
  slideTitle = "",
  slideDescription = "",
  css = "relative w-full h-96 lg:h-[600px] overflow-hidden",
}) => {
  return (
    <div className={css}>
      {/* Background video or image */}
      {videoDesktop || videoMobile ? (
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="
            absolute inset-0
            w-full h-full
            object-cover
            object-center
            pointer-events-none
          "
        >
          {videoDesktop && (
            <source
              media="(min-width: 740px)"
              src={videoDesktop}
              type="video/mp4"
            />
          )}
          {videoMobile && (
            <source src={videoMobile} type="video/mp4" />
          )}
        </video>
      ) : (
        <picture>
          <source media="(min-width: 740px)" srcSet={imageDesktop} />
          <img
            src={imageMobile}
            alt={slideTitle || "Slide image"}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </picture>
      )}

      {/* Optional overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/10" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-between h-full p-6 lg:p-10">
        <div className="flex flex-col items-center gap-3">
          {appleTvLogo && (
            <img src={appleTvLogo} alt="Apple TV logo" className="lg:hidden" />
          )}
          {thumbNail && (
            <img src={thumbNail} alt="Thumbnail" className="lg:hidden" />
          )}
        </div>

        <div className="flex flex-col lg:flex-row items-center lg:items-end justify-end lg:justify-start gap-4 w-full">
          <Button
            title="Stream Now"
            css="hidden lg:inline-block bg-white text-black w-27.5 h-11"
          />

          <div className="flex flex-col lg:flex-row text-white text-[17px] lg:text-[21px] items-center  mb-2">
            <div className="flex items-center font-bold">
              <span>{slideTitle}</span>
              <span className="hidden md:inline-flex">
                <LuDot size={30} />
              </span>
            </div>
            <span className="text-center">{slideDescription}</span>
          </div>

          <Button
            title="Stream Now"
            css="lg:hidden bg-white text-black w-[110px] h-[36px]"
          />
        </div>
      </div>
    </div>
  );
};

export default SlideCard;
