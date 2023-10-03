import Info from "./Info"
import Stories from "../../Components/Stories/Stories"
import Features from "../../Components/Features/Features"
import TopOfPage from "../../Components/TopOfPage/TopOfPage"
import HeroDes from "/home/desktop/create-and-share.jpg"
import HeroTab from "/home/tablet/create-and-share.jpg"
import HeroMob from "/home/mobile/create-and-share.jpg"

export default function Home() {
  return (
    <>
      <TopOfPage
        tablet={HeroTab}
        desktop={HeroDes}
        mobile={HeroMob}
        color="black"
        alt="hero image"
        vh={true}
        title="Create and share your photo stories."
        subtitle="Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others."
        cta="get an invite"
      />
      <Info />
      <Stories num={4} />
      <div className="mb-24">
        <Features num={3} />
      </div>
    </>
  )
}
