export default function Footer() {
  return (
    <footer className="bg-black text-white py-16 ">
      <div className="wrapper grid grid-cols-footer">
        <div className="show col-span-2 md:col-span-1">Logo</div>
        <div className="show col-span-2 md:col-start-1 md:col-span-1 lg:col-start-2">
          Nav
        </div>
        <div className="show col-span-2 md:col-start-1 md:col-span-1">
          FACEBOOK
        </div>
        <div className="show col-span-2 md:col-start-3 md:col-span-1 md:row-start-1">
          Button
        </div>
        <div className="show col-span-2 md:col-start-3 md:row-stat-3 md:col-span-1">
          CopyRight
        </div>
      </div>
    </footer>
  )
}
