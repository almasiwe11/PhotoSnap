import CTA from "../Shared/Cta"

type Props = {
  title: string
  subtitle: string
  cta: string | undefined
  gradient: boolean | undefined
  color: "black" | "white"
}

export default function HeroText({
  title,
  subtitle,
  cta,
  gradient,
  color,
}: Props) {
  return (
    <div
      className={`${
        color === "black" ? "bg-black" : "white"
      } flex-center py-20 order-last md:order-first relative w-full grow lg:max-w-[42rem] 2xl:max-w-[50rem]`}
    >
      <div className="w-full relative flex-center">
        {gradient && (
          <div className="hidden lg:block absolute gradient w-2 left-0 h-full "></div>
        )}
        <div className=" flex flex-col gap-5 md:gap-6 lg:gap-7  ">
          <h1
            className={`text-4xl leading-10 lg:text-5xl tracking-widest ${
              color === "black" ? "text-white" : "text-black"
            } uppercase font-bold max-w-sm`}
          >
            {title}
          </h1>
          <p
            className={`${
              color === "black" ? "text-gray" : "text-black"
            } max-w-sm`}
          >
            {subtitle}
          </p>
          <CTA color="white" text={cta} />
        </div>
      </div>
    </div>
  )
}
