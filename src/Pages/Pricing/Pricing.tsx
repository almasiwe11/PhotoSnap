import PhotoText from "../../Components/PhotoText/PhotoText"
import PricingDes from "/pricing/desktop/hero.jpg"
import PricingTab from "/pricing/tablet/hero.jpg"
import PricingMob from "/pricing/mobile/hero.jpg"
import Beta from "../../Components/Beta/Beta"
import CardPrices from "./CardPrices"
import Table from "./Table"

export default function Pricing() {
  return (
    <div>
      <PhotoText
        desktop={PricingDes}
        tablet={PricingTab}
        mobile={PricingMob}
        alt="Girl with photograph image"
        title="pricing"
        color="black"
        vh={false}
        subtitle="Create a your stories, Photosnap is a platform for photographers and visual storytellers. It’s the simple way to create and share your photos."
      />
      <CardPrices />
      <Table />
      <Beta />
    </div>
  )
}
