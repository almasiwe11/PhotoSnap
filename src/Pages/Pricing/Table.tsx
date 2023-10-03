import { heading } from "../../Components/Tailwind/Heading"

export default function Table() {
  const features = [
    {
      name: "unlimited story posting",
      basic: true,
      pro: true,
      business: true,
    },
    {
      name: "unlimited photo upload",
      basic: true,
      pro: true,
      business: true,
    },
    {
      name: "embedding custom content",
      basic: true,
      pro: true,
      business: true,
    },
    {
      name: "customize metadata",
      basic: true,
      pro: true,
      business: true,
    },
    {
      name: "advanced metadata",
      basic: true,
      pro: true,
      business: true,
    },
  ]
  return (
    <div className="wrapper mt-20">
      <h1 className={`${heading.black} text-center`}>Compare</h1>
      <table className="w-full text-left font-bold">
        <thead className="h-16">
          <tr className="border-b-2  border-black">
            <th className="text-left w-72">The Features</th>
            <th>Basic</th>
            <th>Pro</th>
            <th>Business</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="text-left uppercase">unlimited story posting</td>
            <td>✓</td>
            <td>✓</td>
            <td>✓</td>
          </tr>
          <tr>
            <td className="text-left uppercase">unlimited photo upload</td>
            <td>✓</td>
            <td>✓</td>
            <td>✓</td>
          </tr>
          <tr>
            <td className="text-left uppercase">customize metadata</td>
            <td></td>
            <td>✓</td>
            <td>✓</td>
          </tr>
          <tr>
            <td className="text-left uppercase">embedding custom content</td>
            <td></td>
            <td>✓</td>
            <td>✓</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
