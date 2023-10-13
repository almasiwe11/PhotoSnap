import Header from "./Hero/Header"
import Spinner from "./Spinner"
export default function Fallback() {
  return (
    <div className="h-screen w-screen overflow-hidden">
      <Header />
      <Spinner />
    </div>
  )
}
