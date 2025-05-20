"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/context/cart-context"

export default function AddToCartButton({ product, variant }: { product: any; variant: any }) {
  const [isAdding, setIsAdding] = useState(false)
  const { addToCart } = useCart()

  const handleAddToCart = () => {
    setIsAdding(true)

    // Get the first image if available
    const image = product.images.edges[0]?.node.url || null

    addToCart({
      id: product.id,
      variantId: variant.id,
      productId: product.id,
      title: product.title,
      variantTitle: variant.title !== "Default Title" ? variant.title : "",
      image,
      price: variant.price.amount,
      quantity: 1,
    })

    setTimeout(() => {
      setIsAdding(false)
    }, 500)
  }

  return (
    <Button
      onClick={handleAddToCart}
      disabled={isAdding || !variant.availableForSale}
      className="w-full bg-coral hover:bg-coral/90 text-white py-6 text-lg"
    >
      {isAdding ? "ADDING..." : variant.availableForSale ? "ADD TO CART" : "SOLD OUT"}
    </Button>
  )
}
