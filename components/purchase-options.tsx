"use client"

import { useState } from "react"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { formatPrice } from "@/lib/utils"

export default function PurchaseOptions({ product, variant }: { product: any; variant: any }) {
  const [purchaseType, setPurchaseType] = useState("onetime")

  // Calculate subscription price (15% off)
  const regularPrice = Number.parseFloat(variant.price.amount)
  const subscriptionPrice = (regularPrice * 0.85).toFixed(2)

  return (
    <div className="mb-6">
      <RadioGroup value={purchaseType} onValueChange={setPurchaseType} className="grid gap-4">
        <div className="flex items-center justify-between border border-gray-200 rounded-md p-3">
          <div className="flex items-center gap-2">
            <RadioGroupItem value="onetime" id="onetime" />
            <Label htmlFor="onetime" className="font-medium">
              ONE-TIME PURCHASE
            </Label>
          </div>
          <span className="font-bold">{formatPrice(variant.price.amount, variant.price.currencyCode)}</span>
        </div>

        <div className="flex items-center justify-between border border-gray-200 rounded-md p-3">
          <div className="flex items-center gap-2">
            <RadioGroupItem value="subscribe" id="subscribe" />
            <Label htmlFor="subscribe" className="font-medium">
              SUBSCRIBE, SAVE 15%
            </Label>
          </div>
          <span className="font-bold">{formatPrice(subscriptionPrice, variant.price.currencyCode)}</span>
        </div>
      </RadioGroup>

      <p className="text-xs text-gray-500 mt-2">
        Delivery every 3 months
        <br />
        Edit, pause, or cancel anytime
      </p>
    </div>
  )
}
