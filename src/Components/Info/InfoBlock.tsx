import Cta from "../Shared/Cta"
import { heading } from "../Tailwind/Heading"
import RespImage from "../Shared/RespImage"

type PropTypes = {
  children: React.ReactNode
  title: string
  des: string
  mob: string
  tab: string
  alt: string
  right?: boolean
}

export default function InfoBlock({
  children,
  title,
  des,
  mob,
  tab,
  alt,
  right = false,
}: PropTypes) {
  return (
    <div className="flex-flex relaitve md:justify-between">
      <RespImage
        desktop={des}
        mobile={mob}
        tablet={tab}
        alt={alt}
        picStyle="grow min-w-[18rem] "
      />
      <div
        className={`flex-center lg:max-w-[42rem] grow w-full ${
          right && "md:order-first "
        }`}
      >
        <div className={`py-16 max-len flex flex-col gap-6  `}>
          <h1 className={heading.black}>{title}</h1>
          <p>{children}</p>
          <Cta />
        </div>
      </div>
    </div>
  )
}
