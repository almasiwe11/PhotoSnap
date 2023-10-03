/* eslint-disable react/no-unescaped-entities */
import Cta from "../../Components/Shared/Cta"
import { StoryType } from "../../Types/StoryTypes"

type Props = {
  story: StoryType
}

export default function FeaturedText({ story }: Props) {
  const { intro, date, author, name } = story
  return (
    <div className="bg-black md:absolute left-0 top-0 md:bg-transparent h-full w-full flex-center py-20 md:py-0 md:max-w-[42rem] 2xl:max-w-[50rem]">
      <div className="w-full flex-center text-white">
        <div className=" flex flex-col gap-5 md:gap-6 lg:gap-7 max-w-md  2xl:max-w-lg ">
          <span className="tracking-wider uppercase font-bold">
            last month's features story
          </span>
          <h1 className="text-4xl leading-10 lg:text-5xl tracking-widest  uppercase font-bold">
            {name}
          </h1>
          <div className="flex gap-3">
            <span className="text-gray">{date} </span>
            <span className="font-bold">{author} </span>
          </div>
          <p className="text-gray">{intro}</p>
          <Cta color="white" text="read the story" />
        </div>
      </div>
    </div>
  )
}
