import Logo from "../Shared/Logo"
import NavMenu from "../Shared/NavMenu"
import Button from "../Shared/Button"

export default function Header() {
  return (
    <div className="flex justify-between wrapper h-16 items-center">
      <Logo />
      <NavMenu
        ulStyle=" gap-8 font-bold hidden md:flex"
        liStyle="tracking-widest"
      />
      <Button text="get an invite" />
    </div>
  )
}
