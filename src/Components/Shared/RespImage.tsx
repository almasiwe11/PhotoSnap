type PropTypes = {
  mobile: string
  desktop: string
  style?: string
  tablet?: string
  alt: string
  picStyle?: string
}

function RespImage({
  mobile,
  desktop,
  style,
  alt,
  tablet,
  picStyle,
}: PropTypes): JSX.Element {
  return (
    <picture className={picStyle}>
      <source srcSet={desktop} media={"(min-width:1024px)"} />
      <source srcSet={tablet} media={"(min-width:768px)"} />
      <source srcSet={mobile} />
      <img
        src={mobile}
        alt={alt}
        className={`object-cover h-full ${style} w-full`}
        width="100%"
        height="auto"
        loading="lazy"
      />
    </picture>
  )
}

export default RespImage
