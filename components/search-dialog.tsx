"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function SearchDialog({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState<any[]>([])
  const [isSearching, setIsSearching] = useState(false)

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!searchQuery.trim()) return

    setIsSearching(true)

    // Mock search results for demo purposes
    // In a real app, you would fetch from Shopify's API
    setTimeout(() => {
      setSearchResults([
        {
          id: "1",
          title: "Monstera Plant Food",
          handle: "monstera-plant-food",
          image: "/placeholder.svg?height=80&width=80&query=monstera plant food bottle",
          price: "$14.99",
        },
        {
          id: "2",
          title: "Indoor Plant Food",
          handle: "indoor-plant-food",
          image: "/placeholder.svg?height=80&width=80&query=indoor plant food bottle",
          price: "$14.99",
        },
        {
          id: "3",
          title: "Succulent Plant Food",
          handle: "succulent-plant-food",
          image: "/placeholder.svg?height=80&width=80&query=succulent plant food bottle",
          price: "$14.99",
        },
      ])
      setIsSearching(false)
    }, 500)
  }

  const clearSearch = () => {
    setSearchQuery("")
    setSearchResults([])
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-cream">
        <DialogHeader>
          <DialogTitle>Search Products</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSearch} className="flex gap-2 mt-2">
          <div className="relative flex-1">
            <Input
              placeholder="Search for products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pr-8"
            />
            {searchQuery && (
              <button type="button" onClick={clearSearch} className="absolute right-2 top-1/2 -translate-y-1/2">
                <X className="h-4 w-4 text-gray-400" />
              </button>
            )}
          </div>
          <Button type="submit" disabled={isSearching}>
            <Search className="h-4 w-4 mr-2" />
            Search
          </Button>
        </form>

        {isSearching && <div className="text-center py-8">Searching...</div>}

        {!isSearching && searchResults.length > 0 && (
          <div className="mt-4 space-y-4">
            {searchResults.map((result) => (
              <Link
                key={result.id}
                href={`/products/${result.handle}`}
                onClick={onClose}
                className="flex items-center gap-4 p-2 hover:bg-gray-100 rounded-md"
              >
                <div className="w-16 h-16 bg-white rounded-md overflow-hidden relative flex-shrink-0">
                  <Image
                    src={result.image || "/placeholder.svg"}
                    alt={result.title}
                    width={64}
                    height={64}
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="font-medium">{result.title}</h3>
                  <p className="text-sm text-gray-500">{result.price}</p>
                </div>
              </Link>
            ))}
          </div>
        )}

        {!isSearching && searchQuery && searchResults.length === 0 && (
          <div className="text-center py-8">
            <p>No products found for "{searchQuery}"</p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
