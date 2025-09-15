"use client"
import {Button} from "@/components/ui/button";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle,} from "@/components/ui/card";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import {z} from "zod";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.email({
    message: "Email is not valid.",
  }),
  billingEmail: z.email().nullable().optional(),
  phone: z.string().optional(),
  website: z.url().optional(),
  contact: z.string().optional(),
  addressLine1: z.string().optional(),
  addressLine2: z.string().optional(),
  city: z.string().optional(),
  state: z.string().optional(),
  country: z.string().optional(),
  countryCode: z.string().optional(),
  zip: z.string().optional(),
  vatNumber: z.string().optional(),
  note: z.string().optional(),
});


export default function CreateCustomerPage() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <Card>
          <CardHeader>
            <CardTitle>Customer Details</CardTitle>
            <CardDescription>
              Enter the customer's information below.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-6">
            {/* General Information Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium">General Information</h3>
              <div className="grid gap-3">
                <Label htmlFor="name">Name</Label>
                <Input id="name" type="text" placeholder="Acme Inc." />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="user@example.com" />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="billingEmail">Billing Email</Label>
                <Input id="billingEmail" type="email" placeholder="billing@example.com" />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" type="tel" placeholder="+1 234 567 890" />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="website">Website</Label>
                <Input id="website" type="url" placeholder="https://example.com" />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="contact">Contact Person</Label>
                <Input id="contact" type="text" placeholder="John Doe" />
              </div>
            </div>

            <Separator />

            {/* Details Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Details</h3>
              <div className="grid gap-3">
                <Label htmlFor="addressLine1">Address Line 1</Label>
                <Input id="addressLine1" type="text" placeholder="123 Main St" />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="addressLine2">Address Line 2</Label>
                <Input id="addressLine2" type="text" placeholder="Suite 100" />
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="grid gap-3">
                  <Label htmlFor="city">City</Label>
                  <Input id="city" type="text" placeholder="San Francisco" />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="state">State</Label>
                  <Input id="state" type="text" placeholder="CA" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="grid gap-3">
                  <Label htmlFor="zip">Zip Code</Label>
                  <Input id="zip" type="text" placeholder="94103" />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="countryCode">Country Code</Label>
                  <Input id="countryCode" type="text" placeholder="US" />
                </div>
              </div>
              <div className="grid gap-3">
                <Label htmlFor="vatNumber">VAT Number</Label>
                <Input id="vatNumber" type="text" placeholder="VAT123456789" />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="note">Notes</Label>
                <Input id="note" type="text" placeholder="Additional notes..." />
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-end gap-2">
            <Button variant="outline">Cancel</Button>
            <Button>Save Customer</Button>
          </CardFooter>
        </Card>
      </main>
    </div>
  );
}
