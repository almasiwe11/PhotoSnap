import RespImage from "../Shared/RespImage"
import StoryTitles from "./StoryTitles"
import { stories } from "../Shared/StoriesData"

type PropTypes = {
  num?: number
}

export default function Stories({ num = stories.length }: PropTypes) {
  const displayStories = stories.slice(0, num)
  return (
    <div className=" grid grid-cols-stories">
      {displayStories.map((story) => (
        <div key={story.id} className="relative">
          <div className="absolute inset-0 bg-black/20"></div>
          <RespImage
            desktop={story.desktop}
            tablet={story.tablet}
            mobile={story.mobile}
            alt={story.alt}
          />
          <StoryTitles story={story} />
        </div>
      ))}
    </div>
  )
}