import { useState } from "react"
import Switcher from "./Switcher"
import CardFlip from "./CardFlip"

export default function CardPrices() {
  const [isMonthly, setIsMonthly] = useState(false)
  return (
    <div className="wrapper mt-24">
      <div className="flex-center mb-12 gap-5">
        <span className={!isMonthly ? "font-bold" : ""}>Montly</span>
        <Switcher isMonthly={isMonthly} setIsMonthly={setIsMonthly} />
        <span className={isMonthly ? "font-bold" : ""}>Yearly</span>
      </div>

      <div className="flex flex-col lg:flex-row justify-between gap-6 md:gap-12 lg:gap-6 lg:items-center">
        <CardFlip
          isMonthly={isMonthly}
          name="Basic"
          subtitle="Includes basic usage of our platform. Recommended for new and aspiring photographers."
          priceMonth="19.00"
          priceYear="190.00"
        />
        <CardFlip
          isMonthly={isMonthly}
          name="Pro"
          subtitle="More advanced features available. Recommended for photography veterans and professionals."
          priceMonth="39.00"
          color="black"
          priceYear="390.00"
          backflip={true}
        />
        <CardFlip
          isMonthly={isMonthly}
          name="Business"
          subtitle="Additional features available such as more detailed metrics. Recommended for business owners."
          priceMonth="99.00"
          priceYear="990.00"
        />
      </div>
    </div>
  )
}
