import CTA from "../Shared/Cta"

export default function HeroText() {
  return (
    <div className="bg-black  flex-center py-20 order-last lg:order-first relative grow">
      <div className="absolute ml-[5%] w-1/3 top-0 left-0 bg-gradient-to-bl from-blue via-pink to-orange h-2 lg:hidden"></div>
      <div className="lg:px-24 px-10 flex flex-col gap-5 md:gap-6 lg:gap-7 relative w-full">
        {/*  */}
        <div className="hidden lg:block absolute bg-gradient-to-bl from-blue via-pink overflow-hidden to-orange w-2 left-0  h-full "></div>
        {/*  */}
        <h1 className="text-4xl leading-10 lg:text-5xl tracking-widest text-white uppercase font-bold">
          create and <br /> share your <br /> photo stories.
        </h1>
        <p className="text-gray max-w-[26rem] mb-3 ">
          Photosnap is a platform for photographers and visual storytellers. We
          make it easy to share photos, tell stories and connect with others.
        </p>
        <CTA color="white" text="get an invite" />
      </div>
    </div>
  )
}