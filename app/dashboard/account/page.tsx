import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle,} from "@/components/ui/card"
import {Input} from "@/components/ui/input"
import {Label} from "@/components/ui/label"
import {Button} from "@/components/ui/button"

export default function AccountPage() {
  return (
    <form>
      <Card className="max-w-sm">
        <CardHeader>
          <CardTitle>Username</CardTitle>
          <CardDescription>
            Your username is your public display name.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="username">Username</Label>
            <Input id="username" type="text" placeholder="Username" />
          </div>
        </CardContent>
        <CardFooter>
          <Button>Save</Button>
        </CardFooter>
      </Card>
    </form>
  )
}
