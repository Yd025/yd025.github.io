interface ServiceCardProps {
  title: string
  organization: string
  date: string
  description: string
  impact: string
  role: string
}

export function ServiceCard({ title, organization, date, description, impact, role }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all hover:shadow-lg">
      <div className="p-6">
        <h2 className="text-2xl font-bold">{title}</h2>
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mt-1 mb-4">
          <h3 className="text-lg font-medium">{organization}</h3>
          <span className="text-sm text-gray-500 mt-1 sm:mt-0">{date}</span>
        </div>

        <div className="space-y-4 mt-4">
          <div>
            <h4 className="text-sm font-semibold text-gray-700">Description</h4>
            <p className="text-sm mt-1">{description}</p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-700">Role</h4>
            <p className="text-sm mt-1">{role}</p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-700">Impact</h4>
            <p className="text-sm mt-1">{impact}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
