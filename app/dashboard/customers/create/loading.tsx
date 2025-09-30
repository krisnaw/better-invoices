import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle,} from "@/components/ui/card"
import {Skeleton} from "@/components/ui/skeleton"

export default function CreateCustomerLoading() {
  return (
    <Card className="max-w-md">
      <CardHeader className="space-y-2">
        <CardTitle>
          <Skeleton className="h-6 w-40" />
        </CardTitle>
        <CardDescription>
          <Skeleton className="h-4 w-56" />
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-6">
        <div className="space-y-4">
          <div className="grid gap-3">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-9 w-full" />
          </div>
          <div className="grid gap-3">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-9 w-full" />
          </div>
          <div className="grid gap-3">
            <Skeleton className="h-4 w-28" />
            <Skeleton className="h-9 w-full" />
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-end gap-2">
        <Skeleton className="h-9 w-24" />
        <Skeleton className="h-9 w-24" />
      </CardFooter>
    </Card>
  )
}
