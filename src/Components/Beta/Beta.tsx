import BetaDes from "/shared/desktop/bg-beta.jpg"
import BetaTab from "/shared/tablet/bg-beta.jpg"
import BetaMob from "/shared/mobile/bg-beta.jpg"
import RespImage from "../Shared/RespImage"
import BetaText from "./BetaText"

export default function Beta() {
  return (
    <div className="relative mt-20">
      <RespImage
        desktop={BetaDes}
        mobile={BetaMob}
        tablet={BetaTab}
        alt="beta image"
      />
      <BetaText />
    </div>
  )
}
