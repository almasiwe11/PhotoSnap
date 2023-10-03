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
      } flex items-center justify-center md:justify-normal  relative w-full grow lg:max-w-[42rem] 2xl:max-w-[50rem]`}
    >
      <div className=" flex-center md:block md:w-full ">
        <div className="w-full py-20 md:py-0 relative">
          {gradient && (
            <div className="top-0 h-2 w-[40%] lg:block absolute gradient md:w-2 md:left-0 md:h-full "></div>
          )}
          <div className="flex-center">
            <div className=" flex flex-col  gap-5 md:gap-6 lg:gap-7">
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
              {cta && (
                <CTA color={color === "black" ? "white" : "black"} text={cta} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
