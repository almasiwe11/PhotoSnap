import { BrowserRouter, Route, Routes } from "react-router-dom"
import AppLayout from "./ui/AppLayout"
import Home from "./Pages/Home/Home"
import StoriesPage from "./Pages/Stories/StoriesPage"
import FeaturesPage from "./Pages/Features/FeaturesPage"
function App() {
  return (
    <div className="font-dm">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path="stories" element={<StoriesPage />} />
            <Route path="features" element={<FeaturesPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
