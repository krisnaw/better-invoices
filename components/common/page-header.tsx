

function HeaderDescription({children}: { children: React.ReactNode }) {
  return (
    <div>
      {children}
    </div>
  )
}

function HeaderActions({children}: { children: React.ReactNode }) {
  return (
    <div>
      {children}
    </div>
  )
}

type Props = {
  title: string;
  children?: React.ReactNode;
}

function PageHeader({title, children}: Props) {
  return (
    <div className="border-b border-gray-200 pb-5 sm:flex sm:items-center sm:justify-between px-4 sm:px-6 lg:px-8">
      <div>
        <h3 className="text-base font-semibold text-gray-900">
          {title}
        </h3>
      </div>
      <div className="mt-3 sm:mt-0 sm:ml-4">
        {children}
      </div>
    </div>
  )
}

export {PageHeader, HeaderDescription, HeaderActions}
