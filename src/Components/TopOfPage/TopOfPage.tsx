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
}

export default function TopOfPage({
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
}: Props) {
  return (
    <div
      className={`flex-flex ${
        vh && "lg:h-[calc(100vh-5rem)]"
      } md:justify-between`}
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
        picStyle="grow min-w-[18rem]"
        alt={alt}
      />
    </div>
  )
}
