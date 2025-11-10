'use client';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function CreditCardAuthModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="text-teal-600 font-semibold underline hover:text-teal-700">here</button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Credit Card Authorization</DialogTitle>
        </DialogHeader>
        <div className="py-4 space-y-4">
            <p className="text-sm text-gray-600">
                By your electronic signature of this form, you authorize charges to your credit card through Stripe via SimplePractice for services rendered. WellChild Inc. will appear on your bank/credit card statement as WellChild Inc. You have the right to request a paper copy of this document.
            </p>
            <p className="text-sm text-gray-600">
                I authorize WellChild Center for Development to charge my credit card through Stripe. I also agree that my credit card can be charged for cancellations or no-show (cancelled less than 48 hours prior to the scheduled session).
            </p>
             <p className="text-sm text-gray-600">
                I understand that this authorization will remain in effect until I cancel it in writing, and I agree to notify WellChild Center for Development in writing of any changes in my account information or termination of this authorization.
            </p>
             <p className="text-sm text-gray-600">
                I certify that I am an authorized user of this credit card and will not dispute these scheduled charges with my credit card or credit card company as long as the transactions correspond to the terms indicated in this authorization. I acknowledge that credit card transactions could be linked to Protected Health Information.
            </p>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="firstName">First Name</Label>
              <Input id="firstName" placeholder="Lorem ipsum" />
            </div>
             <div>
              <Label htmlFor="lastName">Last Name</Label>
              <Input id="lastName" placeholder="Lorem ipsum" />
            </div>
          </div>
          <div>
            <Label htmlFor="date">Date</Label>
            <Input id="date" type="date" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" className="w-full bg-[#FFDE59] text-[#3334B] hover:bg-[#ffe680]">Sign to Continue</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}