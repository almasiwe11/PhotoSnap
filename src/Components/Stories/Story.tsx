import { StoryType } from "../../Types/StoryTypes"
import RespImage from "../Shared/RespImage"
import StoryTitles from "./StoryTitles"

type PropTypes = {
  stories: StoryType[]
}

export default function Story({ stories }: PropTypes) {
  console.log(stories)
  return (
    <div className=" grid grid-cols-stories">
      {stories.map((story) => (
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
