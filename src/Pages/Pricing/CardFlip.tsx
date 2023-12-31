import Card from "./Card"

type Props = {
  isMonthly: boolean
  name: string
  subtitle: string
  priceMonth: string
  priceYear: string
  color?: "gray" | "black"
  backflip?: boolean
}
export default function CardFlip({
  isMonthly,
  name,
  subtitle,
  priceMonth,
  priceYear,
  color,
  backflip = false,
}: Props) {
  let flip = ""
  if (isMonthly && !backflip) flip = "flip"
  if (isMonthly && backflip) flip = "backflip"
  console.log(color)
  return (
    <div
      className={`card-container ${
        color === "black" ? "lg:h-[28rem]" : "lg:h-96"
      } h-96 md:h-56 w-full  ${flip}`}
    >
      <div className={`card  `}>
        <div className="front ">
          <Card
            name={name}
            subtitle={subtitle}
            price={priceMonth}
            type="monthly"
            color={color}
          />
        </div>
        <div className="back">
          <Card
            name={name}
            subtitle={subtitle}
            price={priceYear}
            type="yearly"
            color={color}
          />
        </div>
      </div>
    </div>
  )
}
