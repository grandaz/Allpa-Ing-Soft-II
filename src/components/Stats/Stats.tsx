const stats = [
    { id: 1, name: 'Multiples Productos'},
    { id: 2, name: 'Efectividad'},
    { id: 3, name: 'Confianza'},
  ]
  
  export default function Stats() {
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
              </div>
            ))}
          </dl>
        </div>
      </div>
    )
  }
  