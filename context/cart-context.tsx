"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import { useToast } from "@/components/ui/use-toast"

type CartItem = {
  id: string
  variantId: string
  productId: string
  title: string
  variantTitle: string
  image: string
  price: string
  quantity: number
}

type CartContextType = {
  cart: CartItem[]
  isCartOpen: boolean
  cartCount: number
  cartTotal: number
  toggleCart: () => void
  addToCart: (item: Omit<CartItem, "quantity"> & { quantity?: number }) => void
  removeFromCart: (id: string) => void
  updateQuantity: (id: string, quantity: number) => void
  clearCart: () => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [cartCount, setCartCount] = useState(0)
  const [cartTotal, setCartTotal] = useState(0)
  const { toast } = useToast()

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem("cart")
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart))
      } catch (e) {
        console.error("Failed to parse cart from localStorage", e)
      }
    }
  }, [])

  // Update localStorage when cart changes
  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cart))
    } else {
      localStorage.removeItem("cart")
    }

    // Update cart count and total
    const newCount = cart.reduce((sum, item) => sum + item.quantity, 0)
    setCartCount(newCount)

    const newTotal = cart.reduce((sum, item) => sum + Number.parseFloat(item.price) * item.quantity, 0)
    setCartTotal(newTotal)
  }, [cart])

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen)
  }

  const addToCart = (newItem: Omit<CartItem, "quantity"> & { quantity?: number }) => {
    const quantity = newItem.quantity || 1

    setCart((prevCart) => {
      // Check if item already exists in cart
      const existingItemIndex = prevCart.findIndex((item) => item.variantId === newItem.variantId)

      if (existingItemIndex > -1) {
        // Update quantity of existing item
        const updatedCart = [...prevCart]
        updatedCart[existingItemIndex].quantity += quantity
        return updatedCart
      } else {
        // Add new item to cart
        return [...prevCart, { ...newItem, quantity }]
      }
    })

    toast({
      title: "Added to cart",
      description: `${newItem.title} ${newItem.variantTitle ? `- ${newItem.variantTitle}` : ""} added to your cart`,
    })
  }

  const removeFromCart = (id: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.variantId !== id))
  }

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity < 1) return

    setCart((prevCart) => prevCart.map((item) => (item.variantId === id ? { ...item, quantity } : item)))
  }

  const clearCart = () => {
    setCart([])
    localStorage.removeItem("cart")
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        isCartOpen,
        cartCount,
        cartTotal,
        toggleCart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}
