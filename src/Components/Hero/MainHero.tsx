import HeroDes from "/home/desktop/create-and-share.jpg"
import HeroTab from "/home/tablet/create-and-share.jpg"
import HeroMob from "/home/mobile/create-and-share.jpg"
import RespImage from "../Shared/RespImage"
import HeroText from "./HeroText"

export default function MainHero() {
  return (
    <main className="flex-flex">
      <HeroText />
      <RespImage
        desktop={HeroDes}
        tablet={HeroTab}
        mobile={HeroMob}
        alt="Hero Image"
      />
    </main>
  )
}
