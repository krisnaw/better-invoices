type Props = {
  title: string;
  descriptions: string;
  children?: React.ReactNode;
}

export default function PageHeader({title, descriptions, children}: Props) {
  return (
    <div className="border-b border-gray-200 pb-5 sm:flex sm:items-center sm:justify-between px-4 sm:px-6 lg:px-8">
      <div>
        <h3 className="text-base font-semibold text-gray-900">
          {title}
        </h3>
        <p className="mt-2 max-w-4xl text-sm text-gray-500">
          {descriptions}
        </p>
      </div>
      <div className="mt-3 sm:mt-0 sm:ml-4">
        {children}
      </div>
    </div>
  )
}

