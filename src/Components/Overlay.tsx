type Props = {
  isOpen: boolean
}

export default function Overlay({ isOpen }: Props) {
  if (!isOpen) return
  return <div className="fixed inset-0 z-10 bg-black/20"></div>
}
