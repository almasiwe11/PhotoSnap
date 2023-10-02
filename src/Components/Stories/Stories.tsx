import { stories } from "../Shared/StoriesData"
import Story from "./Story"

export default function Stories() {
  const homeStories = stories.slice(0, 4)
  return (
    <section className="">
      <Story stories={homeStories} />
    </section>
  )
}
