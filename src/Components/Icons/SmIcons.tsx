import { useState } from "react"

import Facebook from "./Facebook"
import Instagram from "./Instagram"
import Pinterest from "./Pinterest"
import Twitter from "./Twitter"
import Youtube from "./Youtube"

type Props = {
  brand: "youtube" | "twitter" | "pinterest" | "facebook" | "instagram"
}

export default function SmIcons({ brand }: Props) {
  const [isHovered, setIsHovered] = useState(false)
  return (
    <svg
      className={`cursor-pointer scale-110 lg:scale-[125%]`}
      xmlns="http://www.w3.org/2000/svg"
      width="21"
      height="20"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {brand === "youtube" && <Youtube isHovered={isHovered} />}
      {brand === "twitter" && <Twitter isHovered={isHovered} />}
      {brand === "facebook" && <Facebook isHovered={isHovered} />}
      {brand === "pinterest" && <Pinterest isHovered={isHovered} />}
      {brand === "instagram" && <Instagram isHovered={isHovered} />}
    </svg>
  )
}
