/* eslint-disable react/no-unescaped-entities */
import Cta from "../Shared/Cta"
import { heading } from "../Tailwind/Heading"

export default function BetaText() {
  return (
    <div className="">
      <div className="top-0 h-2 w-[40%] lg:block absolute gradient md:w-2 md:left-0 md:h-full ml-12 md:ml-0 "></div>
      <div>
        <div className="flex flex-col gap-8 md:flex-row justify-between absolute w-full top-[50%] translate-y-[-50%] px-12 lg:px-48">
          <h1 className={heading.white}>
            we're in beta.
            <br /> get your invite <br /> today!
          </h1>
          <Cta text="get an invite" color="white" />
        </div>
      </div>
    </div>
  )
}
