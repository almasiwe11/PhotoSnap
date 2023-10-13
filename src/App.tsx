import { Suspense, lazy } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Fallback from "./Components/Fallback"

const AppLayout = lazy(() => import("./ui/AppLayout"))
const Home = lazy(() => import("./Pages/Home/Home"))
const StoriesPage = lazy(() => import("./Pages/Stories/StoriesPage"))
const FeaturesPage = lazy(() => import("./Pages/Features/FeaturesPage"))
const Pricing = lazy(() => import("./Pages/Pricing/Pricing"))

function App() {
  return (
    <div className="font-dm">
      <BrowserRouter>
        <Suspense fallback={<Fallback />}>
          <Routes>
            <Route path="/" element={<AppLayout />}>
              <Route index element={<Home />} />
              <Route path="stories" element={<StoriesPage />} />
              <Route path="features" element={<FeaturesPage />} />
              <Route path="pricing" element={<Pricing />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  )
}

export default App
