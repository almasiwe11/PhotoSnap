export default function Arrow({
  color = "black",
  duration = 300,
}: {
  color?: string
  duration?: number
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="43"
      height="14"
      className={`group-hover:translate-x-4 cursor-pointer duration-${duration} ease-in-out`}
    >
      <g fill="none" fillRule="evenodd" stroke={color}>
        <path d="M0 7h41.864M35.428 1l6 6-6 6" />
      </g>
    </svg>
  )
}
