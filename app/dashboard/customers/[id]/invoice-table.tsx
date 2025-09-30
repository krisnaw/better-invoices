const people = [
  { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
  { name: 'Courtney Henry', title: 'Designer', email: 'courtney.henry@example.com', role: 'Admin' },
  { name: 'Tom Cook', title: 'Director of Product', email: 'tom.cook@example.com', role: 'Member' },
  { name: 'Whitney Francis', title: 'Copywriter', email: 'whitney.francis@example.com', role: 'Admin' },
  { name: 'Leonard Krasner', title: 'Senior Designer', email: 'leonard.krasner@example.com', role: 'Owner' },
  { name: 'Floyd Miles', title: 'Principal Designer', email: 'floyd.miles@example.com', role: 'Member' },
]

export default function InvoiceTable() {
  return (
    <div>
      <div className="mt-8 flow-root overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <table className="w-full text-left">
            <thead className="bg-white">
            <tr>
              <th scope="col" className="relative isolate py-3.5 pr-3 text-left text-sm font-semibold text-gray-900">
                Name
                <div className="absolute inset-y-0 right-full -z-10 w-screen border-b border-b-gray-200" />
                <div className="absolute inset-y-0 left-0 -z-10 w-screen border-b border-b-gray-200" />
              </th>
              <th
                scope="col"
                className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell"
              >
                Title
              </th>
              <th
                scope="col"
                className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 md:table-cell"
              >
                Email
              </th>
              <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                Role
              </th>
              <th scope="col" className="py-3.5 pl-3">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
            </thead>
            <tbody>
            {people.map((person) => (
              <tr key={person.email}>
                <td className="relative py-4 pr-3 text-sm font-medium text-gray-900">
                  {person.name}
                  <div className="absolute right-full bottom-0 h-px w-screen bg-gray-100" />
                  <div className="absolute bottom-0 left-0 h-px w-screen bg-gray-100" />
                </td>
                <td className="hidden px-3 py-4 text-sm text-gray-500 sm:table-cell">{person.title}</td>
                <td className="hidden px-3 py-4 text-sm text-gray-500 md:table-cell">{person.email}</td>
                <td className="px-3 py-4 text-sm text-gray-500">{person.role}</td>
                <td className="py-4 pl-3 text-right text-sm font-medium">
                  <a href="#" className="text-indigo-600 hover:text-indigo-900">
                    Edit<span className="sr-only">, {person.name}</span>
                  </a>
                </td>
              </tr>
            ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
