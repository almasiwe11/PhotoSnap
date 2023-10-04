import Button from "../Shared/Button"
import NavMenu from "../Shared/NavMenu"

type Props = {
  isOpen: boolean
}

export default function MobileMenu({ isOpen }: Props) {
  if (!isOpen) return
  return (
    <div className="absolute  left-0 right-0 top-[100%] bg-white h-72">
      <div className="wrapper flex flex-col items-center py-8">
        <NavMenu ulStyle="flex flex-col gap-3 font-bold text-center text-lg" />
        <hr className="mt-5  mb-5 w-full text-gray" />
        <Button style="black" text="get an invite" className="self-stretch" />
      </div>
    </div>
  )
}
