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
      className={`py-12 md:py-6 lg:py-12 relative px-5 h-full   ${
        color === "gray" ? "bg-gray" : "bg-black lg:py-20"
      } `}
    >
      <div
        className={`flex flex-col md:grid md:grid-cols-2 lg:flex lg:items-center items-center md:items-start gap-5 ${
          color === "gray" ? "text-black" : "text-white"
        }`}
      >
        {color === "black" && (
          <div className="top-0 h-2 w-full lg:top-0 lg:h-2 lg:w-full lg:block absolute gradient md:w-2 md:left-0 md:h-full "></div>
        )}

        <h1 className={`capitalize font-bold text-2xl `}>{name}</h1>
        <p className="text-center col-start-1 md:text-left row-start-2 lg:text-center">
          {subtitle}
        </p>
        <div className="flex flex-col gap-2 items-center col-start-2 row-span-3 row-start-1">
          <span className="text-4xl font-bold ">${price}</span>
          <span className="">per {type === "yearly" ? "year" : "month"}</span>
        </div>
        <div className="col-start-1 w-full">
          <Button
            text="pick plan"
            style={color === "gray" ? "black" : "white"}
            className="w-full "
          />
        </div>
      </div>
    </div>
  )
}
