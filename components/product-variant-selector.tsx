"use client"

import { useState } from "react"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { formatPrice } from "@/lib/utils"

export default function ProductVariantSelector({ product, variants }: { product: any; variants: any[] }) {
  const [selectedSize, setSelectedSize] = useState("8oz")

  // Group variants by size
  const sizeOptions = variants.reduce((acc: any, variant: any) => {
    const sizeOption = variant.selectedOptions.find((option: any) => option.name === "Size")
    if (sizeOption) {
      const size = sizeOption.value
      if (!acc[size]) {
        acc[size] = {
          value: size,
          price: variant.price.amount,
          currencyCode: variant.price.currencyCode,
        }
      }
    }
    return acc
  }, {})

  return (
    <div className="mb-6">
      <h2 className="font-bold mb-3">MOST POPULAR!</h2>

      <RadioGroup value={selectedSize} onValueChange={setSelectedSize} className="grid gap-4">
        {Object.values(sizeOptions).map((option: any) => (
          <div key={option.value} className="flex items-center justify-between border border-gray-200 rounded-md p-3">
            <div className="flex items-center gap-2">
              <RadioGroupItem value={option.value} id={option.value} />
              <Label htmlFor={option.value} className="font-medium">
                {option.value.toUpperCase()}
              </Label>
            </div>
            <span className="font-bold">{formatPrice(option.price, option.currencyCode)}</span>
          </div>
        ))}
      </RadioGroup>
    </div>
  )
}
