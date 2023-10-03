type Props = {
  isMonthly: boolean
  setIsMonthly: React.Dispatch<React.SetStateAction<boolean>>
}

function Switcher({ isMonthly, setIsMonthly }: Props) {
  return (
    <div
      className={`switcher ${isMonthly && "dark-bg"}`}
      onClick={() => setIsMonthly((prev) => !prev)}
    >
      <div className={`switcher__circle ${isMonthly ? "dark" : "prev"}`}></div>
    </div>
  )
}

export default Switcher
