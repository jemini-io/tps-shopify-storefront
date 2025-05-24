"use client"

import Link from "next/link"
import { Menu, Search, ShoppingBag } from "lucide-react"
import { useState, useEffect } from "react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Image from "next/image"
import { useCart } from "@/context/cart-context"
import CartDrawer from "./cart-drawer"
import SearchDialog from "./search-dialog"
import { homeLink, collectionLinks, accountLinks } from "@/lib/links"

const mainLinksList = [
  homeLink,
  collectionLinks.housePlants,
  collectionLinks.lawnGarden,
  collectionLinks.hydroAquatic,
  collectionLinks.specialtySupplements,
  collectionLinks.bundles,
]

const accountLinksList = [
  accountLinks.account,
  accountLinks.faq,
  accountLinks.blog
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const { toggleCart, cartCount } = useCart()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <div className="bg-coral text-white text-xs text-center py-1 overflow-hidden whitespace-nowrap">
        <div className="animate-marquee inline-block">
          BUY 3 SAVE $10 • FREE SHIPPING • BUY 3 SAVE $10 • FREE SHIPPING • BUY
          3 SAVE $10
        </div>
      </div>
      <header
        className={`bg-cream p-4 flex items-center justify-between ${
          isScrolled ? "sticky top-0 z-50 shadow-sm" : ""
        }`}
      >
        <Sheet>
          <SheetTrigger asChild>
            <button aria-label="Menu" className="p-2">
              <Menu className="h-6 w-6 text-gray-700" />
            </button>
          </SheetTrigger>
          <SheetContent side="left" className="bg-cream">
            <div className="flex flex-col gap-6 mt-8">
              {mainLinksList.map((link) => (
                <Link key={link.path} href={link.path} className="text-lg font-medium">
                  {link.label.menu}
                </Link>
              ))}
              <div className="h-px bg-gray-200 my-2"></div>
              {accountLinksList.map((link) => (
                <Link key={link.path} href={link.path} className="text-lg font-medium">
                  {link.label.menu}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>

        <Link href="/" className="flex items-center justify-center">
          <div className="relative w-20 h-8">
            <Image
              src="/logos/basic_leaf_logo/tps_basic_tps_leaf_light_tan.png"
              alt="TPS Plant Foods"
              fill
              className="object-contain"
            />
          </div>
        </Link>

        <div className="flex items-center gap-4">
          <button
            aria-label="Search"
            className="p-2"
            onClick={() => setIsSearchOpen(true)}
          >
            <Search className="h-5 w-5 text-gray-700" />
          </button>
          <button
            onClick={toggleCart}
            aria-label="Cart"
            className="p-2 relative"
          >
            <ShoppingBag className="h-5 w-5 text-gray-700" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-coral text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </header>
      <CartDrawer />
      <SearchDialog
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </>
  );
}
