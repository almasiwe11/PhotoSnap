type Styles = {
  black: string
  white: string
}

type PropTypes = {
  text: string
  style?: keyof Styles
  className?: string
}

function Button({ text, style = "black", className }: PropTypes) {
  const base =
    "hover:bg-gray hover:text-black duration-150 ease-in-out uppercase text-sm p-3 px-5 tracking-wider cursor-pointer"
  const styles = {
    black: "bg-black text-white",
    white: "bg-white text-black",
  }
  return (
    <button className={base + ` ${className} ` + styles[style]}>{text}</button>
  )
}

export default Button
