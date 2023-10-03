import Cta from "../../Components/Shared/Cta"
import { StoryType } from "../../Types/StoryTypes"

type Props = {
  story: StoryType
}

export default function FeaturedText({ story }: Props) {
  const { intro, date, author, name } = story
  //  top-[50%] translate-y-[-50%]
  return (
    <div className="bg-black md:absolute left-0 top-0 md:bg-transparent h-full flex-center py-20 md:py-0 lg:max-w-[42rem] 2xl:max-w-[50rem]">
      <div className="w-full flex-center">
        <div className=" flex flex-col gap-5 md:gap-6 lg:gap-7  ">
          <h1 className="text-4xl leading-10 lg:text-5xl tracking-widest text-white uppercase font-bold">
            create and <br /> share your <br /> photo stories.
          </h1>
          <p className="text-gray max-w-sm">
            Photosnap is a platform for photographers and visual storytellers.
            We make it easy to share photos, tell stories and connect with
            others.
          </p>
          <Cta color="white" text="get an invite" />
        </div>
      </div>
    </div>
  )
}
