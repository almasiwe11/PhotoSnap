import Arrow from "./Arrow"

type PropTypes = {
  text?: string
  color?: "black" | "white"
  mt?: boolean
  duration?: number
}

export default function Cta({
  text = "view the stories",
  color = "black",
  mt = true,
  duration,
}: PropTypes) {
  return (
    <div
      className={`flex gap-4 } text-${color} items-center ${
        mt ? "mt-3" : "mt-0"
      } cursor-pointer group`}
    >
      <span className="uppercase font-bold">{text}</span>
      <Arrow color={color} duration={duration} />
    </div>
  )
}
