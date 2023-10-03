import { heading } from "../../Components/Tailwind/Heading"
import { features } from "./FeatureData"
export default function Table() {
  return (
    <div className="wrapper mt-20">
      <h1 className={`${heading.black} text-center mb-10`}>Compare</h1>
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
          {features.map((feature) => (
            <tr key={feature.name}>
              <td className="text-left uppercase">{feature.name}</td>
              <td>{feature.basic && "✓"}</td>
              <td>{feature.pro && "✓"}</td>
              <td>{feature.business && "✓"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
