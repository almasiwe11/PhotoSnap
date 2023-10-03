import Info from "./Info"
import Stories from "../../Components/Stories/Stories"
import Features from "../../Components/Features/Features"
import MainHero from "../../Components/Hero/MainHero"

export default function Home() {
  return (
    <>
      <MainHero />
      <Info />
      <Stories num={4} />
      <div className="mb-24">
        <Features num={3} />
      </div>
    </>
  )
}
