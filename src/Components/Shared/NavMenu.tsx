import { Link } from "react-router-dom"

type PropTypes = {
  list?: string[]
  liStyle?: string
  ulStyle?: string
}

const navList = ["stories", "features", "pricing"]

function NavMenu({ list = navList, liStyle, ulStyle }: PropTypes): JSX.Element {
  return (
    <ul className={`${ulStyle} uppercase `}>
      {list.map((linkName) => (
        <Link
          to={linkName}
          key={linkName}
          className={`${liStyle} cursor-pointer duration-150 ease-in-out hover:text-gray`}
        >
          {linkName}
        </Link>
      ))}
    </ul>
  )
}

export default NavMenu
