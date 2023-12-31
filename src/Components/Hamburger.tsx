type Props = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  isOpen: boolean
}

function Hamburger({ setIsOpen, isOpen }: Props) {
  return (
    <button
      id="menu-btn"
      type="button"
      className={`z-40 block hamburger md:hidden focus:outline-none ${
        isOpen && "open"
      } `}
      onClick={() => setIsOpen((prev) => !prev)}
    >
      <span className="hamburger-middle"></span>
      <span className="hamburger-bottom"></span>
    </button>
  )
}

export default Hamburger

/* .hamburger {
  cursor: pointer;
  width: 24px;
  height: 24px;
  transition: all 0.25s;
  position: relative;
}

.hamburger-top,
.hamburger-middle,
.hamburger-bottom {
  position: absolute;
  width: 24px;
  height: 2px;
  top: 0;
  left: 0;
  background: white;
  transform: rotate(0);
  transition: all 0.5s;
}

.hamburger-middle {
  transform: translateY(7px);
}

.hamburger-bottom {
  transform: translateY(14px);
}

.open {
  transform: rotate(90deg);
}

.open .hamburger-top {
  transform: rotate(45deg) translateY(6px) translateX(6px);
}

.open .hamburger-middle {
  display: none;
}

.open .hamburger-bottom {
  transform: rotate(-45deg) translateY(6px) translateX(-6px);
}

 */
