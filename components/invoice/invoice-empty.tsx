export default function InvoiceEmpty({className} : {className?: string}) {
  return (
    <div className={`relative ${className}`}>
      <svg fill="none" className="absolute inset-0 size-full stroke-gray-900/10">
        <defs>
          <pattern id="pattern-87beeb02-b726-4cd1-be69-ae5bc27986e9" width="10" height="10" x="0" y="0"
                   patternUnits="userSpaceOnUse">
            <path d="M-3 13 15-5M-5 5l18-18M-1 21 17 3"></path>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#pattern-87beeb02-b726-4cd1-be69-ae5bc27986e9)"
              stroke="none"></rect>
      </svg>
    </div>
  )
}