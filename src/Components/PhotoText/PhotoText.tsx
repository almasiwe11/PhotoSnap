import HeroText from "../Hero/HeroText"
import RespImage from "../Shared/RespImage"

type Props = {
  vh: boolean
  gradient?: boolean
  cta?: string
  color?: "white" | "black"
  desktop: string
  tablet: string
  mobile: string
  alt: string
  title: string
  subtitle: string
  flip?: boolean
}

export default function PhotoText({
  vh,
  gradient = true,
  cta,
  color = "black",
  desktop,
  mobile,
  title,
  subtitle,
  tablet,
  alt,
  flip = false,
}: Props) {
  return (
    <div
      className={`flex-flex ${
        vh && "lg:h-[calc(100vh-5rem)]"
      } md:justify-between ${!vh && "lg:h-[30.5rem]"}`}
    >
      <HeroText
        title={title}
        subtitle={subtitle}
        cta={cta}
        gradient={gradient}
        color={color}
      />
      <RespImage
        desktop={desktop}
        tablet={tablet}
        mobile={mobile}
        picStyle={`${
          flip ? "order-first" : "md:order-last"
        } order-first  grow min-w-[18rem]`}
        alt={alt}
      />
    </div>
  )
}
