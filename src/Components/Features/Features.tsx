import Feature from "./Feature"
import { allFeatures } from "./AllFeatures"

type PropTypes = {
  num?: number
}

export default function Features({ num }: PropTypes) {
  const displayFeatures = allFeatures.slice(0, num)
  return (
    <section className="wrapper">
      <div className="flex flex-col lg:grid grid-cols-stories mt-20 gap-8 md:gap-12 lg:gap-6">
        {displayFeatures.map((feature) => (
          <Feature key={feature.name} feature={feature}></Feature>
        ))}
      </div>
    </section>
  )
}
