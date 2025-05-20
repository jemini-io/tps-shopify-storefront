"use client"

import { useCart } from "@/context/cart-context"
import { formatPrice } from "@/lib/utils"
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Minus, Plus, X } from "lucide-react"
import Image from "next/image"

export default function CartDrawer() {
  const { cart, isCartOpen, toggleCart, removeFromCart, updateQuantity, cartTotal } = useCart()

  return (
    <Sheet open={isCartOpen} onOpenChange={toggleCart}>
      <SheetContent className="w-full sm:max-w-md overflow-y-auto bg-cream">
        <SheetHeader className="mb-4">
          <SheetTitle className="text-xl font-bold">Your Cart</SheetTitle>
        </SheetHeader>

        {cart.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-[60vh]">
            <p className="text-lg mb-4">Your cart is empty</p>
            <Button onClick={toggleCart} className="bg-coral hover:bg-coral/90 text-white">
              Continue Shopping
            </Button>
          </div>
        ) : (
          <>
            <div className="space-y-4 mb-6">
              {cart.map((item) => (
                <div key={item.variantId} className="flex gap-4 border-b pb-4">
                  <div className="w-20 h-20 bg-white rounded-md overflow-hidden relative flex-shrink-0">
                    {item.image ? (
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        fill
                        className="object-contain p-2"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                        <span className="text-gray-400">No image</span>
                      </div>
                    )}
                  </div>

                  <div className="flex-1">
                    <div className="flex justify-between">
                      <h3 className="font-medium">{item.title}</h3>
                      <button
                        onClick={() => removeFromCart(item.variantId)}
                        className="text-gray-400 hover:text-gray-600"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>

                    {item.variantTitle && <p className="text-sm text-gray-500">{item.variantTitle}</p>}

                    <div className="flex justify-between items-center mt-2">
                      <div className="flex items-center border rounded-md">
                        <button
                          onClick={() => updateQuantity(item.variantId, item.quantity - 1)}
                          className="px-2 py-1"
                          disabled={item.quantity <= 1}
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="px-2 text-sm">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.variantId, item.quantity + 1)} className="px-2 py-1">
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                      <p className="font-medium">
                        {formatPrice(String(Number.parseFloat(item.price) * item.quantity))}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t pt-4">
              <div className="flex justify-between mb-2">
                <span>Subtotal</span>
                <span className="font-medium">{formatPrice(String(cartTotal))}</span>
              </div>
              <p className="text-sm text-gray-500 mb-4">Shipping and taxes calculated at checkout</p>

              <Button className="w-full bg-coral hover:bg-coral/90 text-white mb-2">Checkout</Button>
              <Button variant="outline" onClick={toggleCart} className="w-full">
                Continue Shopping
              </Button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  )
}
