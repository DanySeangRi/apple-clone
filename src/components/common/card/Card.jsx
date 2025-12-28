import ImageCard from "./ImageCard";
import VideoCard from "./VideoCard";
import SlideCard from "./SlideCard";

const Card = ({ variant = "image", ...props }) => {
  if (variant === "video") return <VideoCard {...props} />;
  if (variant === "slide") return <SlideCard {...props} />;

  return <ImageCard {...props} />;
};

export default Card;
