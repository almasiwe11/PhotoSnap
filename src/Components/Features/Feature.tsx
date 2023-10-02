import { Feature as FeatureTypes } from "../../Types/FeatureTypes"

type Props = {
  feature: FeatureTypes
}

export default function Feature({ feature }: Props) {
  const { Icon, name, text } = feature
  return (
    <div className="flex flex-col gap-4 items-center text-center">
      <div className="mb-8 lg:mb-0 lg:h-20  flex-center">
        <Icon />
      </div>
      <p className="font-bold text-lg ">{name}</p>
      <span className="">{text}</span>
    </div>
  )
}
