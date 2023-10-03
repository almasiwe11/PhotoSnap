import RespImage from "../Shared/RespImage"
import StoryTitles from "./StoryTitles"
import { stories } from "../../Data/StoriesData"

type PropTypes = {
  num?: number
}

export default function Stories({ num = stories.length }: PropTypes) {
  const displayStories = stories
    .slice(0, num)
    .filter((story) => !story.featured)
  return (
    <div className=" grid grid-cols-stories 2xl:grid-cols-stories-2xl">
      {displayStories.map((story) => (
        <div
          key={story.id}
          className="relative group duration-300 ease-in-out hover:-translate-y-5"
        >
          <div className="absolute inset-0 bg-black/20"></div>
          <RespImage
            desktop={story.desktop}
            tablet={story.tablet}
            mobile={story.mobile}
            alt={story.alt}
          />
          <StoryTitles story={story} />
          <div className="absolute h-3 w-full bottom-0 gradient opacity-0 group-hover:opacity-100"></div>
        </div>
      ))}
    </div>
  )
}
