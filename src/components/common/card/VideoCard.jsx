import Button from "../Button";

const VideoCard = ({
  videoMobile,
  videoDesktop,
  title = "",
  description = "",
  css = "relative w-full h-screen md:h-[700px]",
}) => {
  return (
    <div className={css}>
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

      {/* Overlay content */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-end pb-16 lg:pb-24 text-center gap-4 px-4">
        {title && (
          <h1 className="text-white text-[32px] lg:text-[56px] font-medium">
            {title}
          </h1>
        )}

        {description && (
          <p className="text-white font-light text-[19px] lg:text-[24px]">
            {description}
          </p>
        )}

        <div className="flex gap-4">
          <Button
            title="Learn more"
            css="bg-white text-black w-[110px] h-[36px] lg:w-33 lg:h-11"
          />
          <Button
            title="Buy"
            css="bg-transparent border border-white text-white w-[110px] h-[36px] hover:bg-white hover:text-black lg:w-[72px] lg:h-11"
          />
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
