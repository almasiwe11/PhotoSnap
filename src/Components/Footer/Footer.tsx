import Facebook from "../Icons/Facebook"
import Instagram from "../Icons/Instagram"
import Pinterest from "../Icons/Pinterest"
import Twitter from "../Icons/Twitter"
import Youtube from "../Icons/Youtube"
import Cta from "../Shared/Cta"
import Logo from "../Shared/Logo"
import NavMenu from "../Shared/NavMenu"

export default function Footer() {
  const footerNav = ["home", "stories", "features", "pricing"]
  return (
    <footer className="bg-black text-white py-16 ">
      <div className="wrapper md:gap-6 grid grid-cols-footer justify-items-center md:justify-items-stretch gap-2">
        <div className="flex col-span-2 md:col-span-1  gap-2">
          <Logo white={true} />
        </div>
        <div className=" col-span-2 md:col-start-1 md:col-span-1 md:row-start-3 flex gap-3 mb-8 mt-3 md:mb-0 md:mt-0">
          <Facebook style="scale-110 lg:scale-[125%]" />
          <Youtube style="scale-110 lg:scale-[125%]" />
          <Twitter style="scale-110 lg:scale-[125%]" />
          <Pinterest style="scale-110 lg:scale-[125%]" />
          <Instagram style="scale-110 lg:scale-[125%]" />
        </div>

        <div className="lg:justify-self-start col-span-2 md:col-start-1 md:col-span-1 lg:row-span-3 lg:col-start-2 lg:row-start-1">
          <NavMenu
            list={footerNav}
            ulStyle="mb-10 lg:mb-0 gap-3 lg:gap-5 lg:text-start lg:ml-32 flex lg:flex-col flex-col md:flex-row text-center font-bold"
          />
        </div>

        <div className="col-span-2 md:col-start-3 md:col-span-1 md:row-start-1 mt-24 md:mt-0 md:justify-self-end">
          <Cta mt={false} color="white" text="get an invite" />
        </div>
        <div className=" col-span-2 md:col-start-3 md:row-start-3 md:col-span-1 text-gray mt-6 md:mt-0">
          Copyright 2019. All Rights Reserved
        </div>
      </div>
    </footer>
  )
}
