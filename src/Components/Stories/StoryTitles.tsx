import { StoryType } from "../../Types/StoryTypes"
import Arrow from "../Shared/Arrow"

export default function StoryTitles({ story }: { story: StoryType }) {
  return (
    <div className="absolute text-white flex flex-col gap-4 z-20 bottom-0 px-10 w-full pb-8">
      <div className="">
        <p className="text-2xl font-bold">{story.name}</p>
        <p>by {story.author}</p>
      </div>
      <hr></hr>
      <div className="flex justify-between items-center">
        <span className="uppercase tracking-wider font-bold">read story</span>
        <Arrow color="white" />
      </div>
    </div>
  )
}
