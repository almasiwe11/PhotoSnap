import { Outlet } from "react-router"
import Footer from "../Components/Footer/Footer"
import Header from "../Components/Hero/Header"

export default function AppLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}
