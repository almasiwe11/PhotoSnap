import Hero from "./Components/Hero/Hero"
import Info from "./Components/Info/Info"
import Stories from "./Components/Stories/Stories"
import Features from "./Components/Features/Features"
import Footer from "./Components/Footer/Footer"
function App() {
  return (
    <div className="font-dm">
      <Hero />
      <Info />
      <Stories num={4} />
      <div className="mb-24">
        <Features num={3} />
      </div>
      <Footer />
    </div>
  )
}

export default App
