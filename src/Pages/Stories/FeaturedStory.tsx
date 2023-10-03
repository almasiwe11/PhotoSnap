import RespImage from "../../Components/Shared/RespImage"
import { stories } from "../../Data/StoriesData"
import FeaturedText from "./FeaturedText"

export default function FeaturedStory() {
  const featuredStory = stories.find((story) => story.featured)!
  const { tablet, mobile, desktop, alt } = featuredStory
  return (
    <div className="md:h-[calc(100vh-5rem)] relative ">
      <RespImage tablet={tablet} mobile={mobile} desktop={desktop} alt={alt} />
      <FeaturedText story={featuredStory} />
    </div>
  )
}
