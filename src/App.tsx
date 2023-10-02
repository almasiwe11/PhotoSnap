import Hero from "./Components/Hero/Hero"
import Info from "./Components/Info/Info"
import Stories from "./Components/Stories/Stories"
import Features from "./Components/Features/Features"
function App() {
  return (
    <div className="font-dm">
      <Hero />
      <Info />
      <Stories num={4} />
      <Features num={3} />
    </div>
  )
}

export default App
