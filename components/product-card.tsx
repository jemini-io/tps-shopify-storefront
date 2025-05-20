"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { formatPrice } from "@/lib/utils"
import { useCart } from "@/context/cart-context"
import { Button } from "@/components/ui/button"

export default function ProductCard({ product }: { product: any }) {
  const [isAdding, setIsAdding] = useState(false)
  const { addToCart } = useCart()
  const image = product.images?.edges[0]?.node
  const price = product.priceRange?.minVariantPrice

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()

    setIsAdding(true)

    addToCart({
      id: product.id,
      variantId: product.id, // Using product ID as variant ID for simplicity
      productId: product.id,
      title: product.title,
      variantTitle: "8 Ounces", // Default size
      image: image?.url || null,
      price: price?.amount || "14.99",
      quantity: 1,
    })

    setTimeout(() => {
      setIsAdding(false)
    }, 500)
  }

  // If no product is provided, return a placeholder
  if (!product) {
    return (
      <div className="group">
        <div className="bg-[#E8F4E5] rounded-lg overflow-hidden aspect-square relative mb-2">
          <Image src="/images/homepage_image_2.jpg" alt="Product placeholder" fill className="object-contain p-2" />
        </div>

        <div className="flex text-yellow-400 text-xs mb-1">
          {"★★★★★"}
          <span className="text-gray-500 ml-1 text-xs">200 reviews</span>
        </div>

        <h3 className="font-bold text-sm uppercase">Plant Food</h3>

        <div className="flex items-center justify-between mt-2">
          <div className="bg-gray-100 rounded px-2 py-1 text-xs">8 Ounces</div>
          <div className="font-medium">$14.99</div>
        </div>

        <Button
          onClick={(e) => e.preventDefault()}
          className="w-full bg-coral hover:bg-coral/90 text-white mt-2 py-1 text-sm"
        >
          ADD TO CART
        </Button>
      </div>
    )
  }

  return (
    <div className="group">
      <Link href={`/products/${product.handle}`} className="block">
        <div className="bg-[#E8F4E5] rounded-lg overflow-hidden aspect-square relative mb-2">
          {image ? (
            <Image
              src={image.url || "/images/homepage_image_2.jpg"}
              alt={image.altText || product.title}
              fill
              className="object-contain p-2"
            />
          ) : (
            <Image
              src="/images/homepage_image_2.jpg"
              alt={product.title}
              fill
              className="object-contain p-2"
            />
          )}
        </div>

        <div className="flex text-yellow-400 text-xs mb-1">
          {"★★★★★"}
          <span className="text-gray-500 ml-1 text-xs">{Math.floor(Math.random() * 1000) + 200} reviews</span>
        </div>

        <h3 className="font-bold text-sm uppercase">{product.title}</h3>

        <div className="flex items-center justify-between mt-2">
          <div className="bg-gray-100 rounded px-2 py-1 text-xs">8 Ounces</div>
          <div className="font-medium">{price ? formatPrice(price.amount, price.currencyCode) : "$14.99"}</div>
        </div>
      </Link>

      <Button
        onClick={handleAddToCart}
        disabled={isAdding}
        className="w-full bg-coral hover:bg-coral/90 text-white mt-2 py-1 text-sm"
      >
        {isAdding ? "ADDING..." : "ADD TO CART"}
      </Button>
    </div>
  )
}
