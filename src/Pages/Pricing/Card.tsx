import Button from "../../Components/Shared/Button"

type Props = {
  name: string
  subtitle: string
  price: string
  type: "monthly" | "yearly"
  color?: "gray" | "black"
}

export default function Card({
  name,
  subtitle,
  price,
  type,
  color = "gray",
}: Props) {
  return (
    <div
      className={`py-12 px-5  ${color === "gray" ? "bg-gray" : "bg-black"} `}
    >
      <div
        className={`flex flex-col items-center gap-5 ${
          color === "gray" ? "text-black" : "text-white"
        }`}
      >
        <h1 className={`capitalize font-bold text-2xl `}>{name}</h1>
        <p className="text-center">{subtitle}</p>
        <div className="flex flex-col gap-2 items-center">
          <span className="text-4xl font-bold ">${price}</span>
          <span className="">per {type === "yearly" ? "year" : "month"}</span>
        </div>
        <Button text="pick plan" style={color === "gray" ? "black" : "white"} />
      </div>
    </div>
  )
}
