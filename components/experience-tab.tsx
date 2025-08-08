interface ExperienceTabProps {
  title: string
  organization: string
  date: string
  points: string[]
}

export function ExperienceTab({ title, organization, date, points }: ExperienceTabProps) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all hover:shadow-lg">
      <div className="p-6">
        <h2 className="text-2xl font-bold">{title}</h2>
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mt-1 mb-4">
          <h3 className="text-lg font-medium">{organization}</h3>
          <span className="text-sm text-gray-500 mt-1 sm:mt-0">{date}</span>
        </div>
        <ul className="list-disc pl-5 space-y-2">
          {points.map((point, index) => (
            <li key={index} className="text-sm">
              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
