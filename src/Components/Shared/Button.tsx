type Styles = {
  black: string
  white: string
}

type PropTypes = {
  text: string
  style?: keyof Styles
}

function Button({ text, style = "black" }: PropTypes) {
  const base =
    "hover:bg-gray hover:text-black duration-150 ease-in-out uppercase text-sm p-2.5 px-5 tracking-wider cursor-pointer hidden md:block "
  const styles = {
    black: "bg-black text-white",
    white: "bg-white text-black",
  }
  return <button className={base + " " + styles[style]}>{text}</button>
}

export default Button
