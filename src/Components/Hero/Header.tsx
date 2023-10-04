import Logo from "../Shared/Logo"
import NavMenu from "../Shared/NavMenu"
import Button from "../Shared/Button"
import { useState, useEffect } from "react"
import Hamburger from "../Hamburger"
import MobileMenu from "./MobileMenu"
import Overlay from "../Overlay"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  return (
    <>
      <header
        className={`${
          isOpen ? "locked" : ""
        } relative bg-white z-50 flex items-center  h-20`}
      >
        <div className="flex justify-between wrapper">
          <Logo />
          <NavMenu
            ulStyle=" gap-8 font-bold hidden md:flex"
            liStyle="tracking-widest "
          />
          <Button text="get an invite" className="hidden md:block" />
          <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />
          <MobileMenu isOpen={isOpen} />
        </div>
      </header>
      <Overlay isOpen={isOpen} />
    </>
  )
}
