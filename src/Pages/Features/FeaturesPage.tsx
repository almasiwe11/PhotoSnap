import PhotoText from "../../Components/PhotoText/PhotoText"
import FeatureDes from "/features/desktop/hero.jpg"
import FeatureTab from "/features/tablet/hero.jpg"
import FeatureMob from "/features/mobile/hero.jpg"
import Features from "../../Components/Features/Features"
import Beta from "../../Components/Beta/Beta"

export default function FeaturesPage() {
  return (
    <>
      <PhotoText
        title="feature"
        subtitle="We make sure all of our features are designed to be loved by every aspiring and even professional photograpers who wanted to share their stories."
        mobile={FeatureMob}
        tablet={FeatureTab}
        desktop={FeatureDes}
        alt="man with a photograph image"
        gradient={true}
        color="black"
        vh={false}
      />
      <Features />
      <Beta />
    </>
  )
}
