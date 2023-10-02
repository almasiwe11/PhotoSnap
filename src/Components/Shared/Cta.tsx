import Arrow from "./Arrow"

type PropTypes = {
  text?: string
  color?: "black" | "white"
}

export default function Cta({
  text = "view the stories",
  color = "black",
}: PropTypes) {
  return (
    <div
      className={`flex gap-4 } text-${color} items-center mt-3 cursor-pointer group`}
    >
      <span className="uppercase font-bold">{text}</span>
      <Arrow color={color} />
    </div>
  )
}
