import { useRef, useState, useEffect } from "react";
import { Play, Pause } from "lucide-react";
import Button from "../Button";

const VideoCard = ({
  videoMobile,
  videoDesktop,
  title = "",
  description = "",
  css = "relative w-full h-screen md:h-[700px]",
}) => {
  const mobileRef = useRef(null);
  const desktopRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const mobileVideo = mobileRef.current;
    const desktopVideo = desktopRef.current;

    const activeVideo =
      window.innerWidth < 768 ? mobileVideo : desktopVideo;

    if (!activeVideo) return;

    if (isPlaying) {
      const playPromise = activeVideo.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => setIsPlaying(false));
      }
    } else {
      activeVideo.pause();
    }
  }, [isPlaying]);

  return (
    <div className={css}>
      {/* Mobile video */}
      {videoMobile && (
        <video
          ref={mobileRef}
          src={videoMobile}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover block md:hidden"
        />
      )}

      {/* Desktop video */}
      {videoDesktop && (
        <video
          ref={desktopRef}
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

      {/* Play / Pause button */}
      <button
        onClick={() => setIsPlaying(p => !p)}
        className="
          absolute bottom-6 right-6 z-20
          p-3
          bg-black/30 hover:bg-black/50
          backdrop-blur-sm
          rounded-md border border-white/20
          transition
        "
      >
        {isPlaying ? (
          <Pause className="w-3 h-3 lg:w-5 lg:h-5 text-white fill-white" />
        ) : (
          <Play className="w-3 h-3 lg:w-5 lg:h-5 text-white fill-white" />
        )}
      </button>
    </div>
  );
};

export default VideoCard;
