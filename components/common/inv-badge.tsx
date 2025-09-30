type BadgeProps = {
  children: React.ReactNode
  variant: "solid" | "outline"
  color: "gray"
}

export default function InvBadge({children}: { children: React.ReactNode}) {
  return (
    <>
      <span className="capitalize inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 inset-ring inset-ring-gray-500/10">
        {children}
      </span>
    </>
  )
}
