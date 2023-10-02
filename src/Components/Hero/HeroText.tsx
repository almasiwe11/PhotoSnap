import CTA from "../Shared/Cta"

export default function HeroText() {
  return (
    <div className="bg-black flex-center py-20 order-last md:order-first relative w-full grow lg:max-w-[42rem]">
      <div className="w-full relative flex-center">
        <div className="hidden lg:block absolute bg-gradient-to-bl from-blue via-pink overflow-hidden to-orange w-2 left-0  h-full "></div>
        <div className=" flex flex-col gap-5 md:gap-6 lg:gap-7  ">
          <h1 className="text-4xl leading-10 lg:text-5xl tracking-widest text-white uppercase font-bold">
            create and <br /> share your <br /> photo stories.
          </h1>
          <p className="text-gray max-w-sm">
            Photosnap is a platform for photographers and visual storytellers.
            We make it easy to share photos, tell stories and connect with
            others.
          </p>
          <CTA color="white" text="get an invite" />
        </div>
      </div>
    </div>
  )
}
