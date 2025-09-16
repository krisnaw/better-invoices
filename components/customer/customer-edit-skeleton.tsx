import {Skeleton} from "@/components/ui/skeleton"
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card"
import {Button} from "@/components/ui/button";

export function CustomerEditSkeleton() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Edit customer</CardTitle>
        <CardDescription>Update the customer details below.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <Skeleton className="h-4 w-36" />
            <Skeleton className="h-10 w-full" />
          </div>
          <div className="space-y-2">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-10 w-full" />
          </div>
          <div className="space-y-2">
            <Skeleton className="h-4 w-32" />
            <Skeleton className="h-10 w-full" />
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-end gap-2">
        <Button asChild variant="outline" type="button">
          Cancel
        </Button>
        <Button type="submit">
          Save changes
        </Button>
      </CardFooter>
    </Card>
  )
}
