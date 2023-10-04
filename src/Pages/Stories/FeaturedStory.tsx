import { useState } from "react"
import RespImage from "../../Components/Shared/RespImage"
import { stories } from "../../Data/StoriesData"
import FeaturedText from "./FeaturedText"

export default function FeaturedStory() {
  const featuredStory = stories.find((story) => story.featured)!
  const { tablet, mobile, desktop, alt } = featuredStory
  const [isHovered, setIsHovered] = useState(false)
  return (
    <div className="md:h-[calc(100vh-5rem)] relative ">
      <RespImage tablet={tablet} mobile={mobile} desktop={desktop} alt={alt} />
      <FeaturedText story={featuredStory} setIsHovered={setIsHovered} />
      <div
        className={`pain absolute mix-blend-lighten duration-1000 ease-in-out inset-0 opacity-0 ${
          isHovered && "opacity-100"
        } `}
      ></div>
    </div>
  )
}
