type PropTypes = {
  list: string[]
  liStyle?: string
  ulStyle?: string
}

const navList = ["stories", "features", "pricing"]

function NavMenu({ list = navList, liStyle, ulStyle }: PropTypes): JSX.Element {
  return (
    <ul className={`${ulStyle} uppercase `}>
      {list.map((linkName) => (
        <li key={linkName} className={`${liStyle} cursor-pointer`}>
          {linkName}
        </li>
      ))}
    </ul>
  )
}

export default NavMenu
