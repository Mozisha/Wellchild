'use client';

import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

// The modal can receive a function to call when the user "signs" the form.
type CreditCardAuthModalProps = {
  onSignature: () => void;
}

export default function CreditCardAuthModal({ onSignature }: CreditCardAuthModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleSign = () => {
    // In a real app, you'd validate this form. For now, we just call the callback.
    onSignature();
    setIsOpen(false); // Close the modal
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <button className="text-teal-600 font-semibold underline hover:text-teal-700 transition-colors">here</button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg bg-gray-50 rounded-lg">
        <DialogHeader>
          <DialogTitle className="text-xl text-gray-800 text-center font-serif">Credit Card Authorization</DialogTitle>
        </DialogHeader>
        <div className="py-4 space-y-3 text-sm text-gray-600 max-h-[70vh] overflow-y-auto px-2">
            <p>By your electronic signature of this form, you authorize charges to your credit card through Stripe via SimplePractice for services rendered. These charges will appear on your bank/credit card statement as WellChild Inc. You have the right to request a paper copy of this document.</p>
            <p>I authorize WellChild Center For Development to charge my credit card through Stripe. I also agree that my credit card can be charged for any session that is not cancelled at least 48 hours prior to the scheduled session.</p>
            <p>I understand that this authorization will remain in effect until I cancel it in writing, and I agree to notify WellChild Center For Development in writing of any changes in my account information or termination of this authorization.</p>
            <p>I certify that I am an authorized user of this credit card and will not dispute these scheduled transactions with my credit card company as long as the transactions correspond to the terms indicated in this authorization form. I acknowledge that credit card transactions could be linked to Protected Health Information.</p>
          <div className="grid grid-cols-2 gap-4 pt-4">
            <div>
              <Label htmlFor="modal-firstName" className="font-medium">First Name</Label>
              <Input id="modal-firstName" placeholder="Lorem ipsum" className="mt-1"/>
            </div>
             <div>
              <Label htmlFor="modal-lastName" className="font-medium">Last Name</Label>
              <Input id="modal-lastName" placeholder="Lorem ipsum" className="mt-1"/>
            </div>
          </div>
          <div>
            <Label htmlFor="modal-date" className="font-medium">Date</Label>
            <Input id="modal-date" type="date" className="mt-1"/>
          </div>
        </div>
        <DialogFooter>
          <Button onClick={handleSign} className="w-full h-11 bg-[#FFDE59] text-black hover:bg-[#ffe97a] font-semibold">
            Sign to continue
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}