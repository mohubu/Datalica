import Card from './Card'

export default function ServiceCard({ icon: Icon, title, description }) {
  return (
    <Card>
      <div className="flex flex-col space-y-4">
        {Icon && (
          <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
            <Icon className="w-6 h-6" />
          </div>
        )}
        <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
        <p className="text-slate-600">{description}</p>
      </div>
    </Card>
  )
}
