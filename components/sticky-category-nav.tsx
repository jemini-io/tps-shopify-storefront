"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

export default function StickyCategoryNav({
  collections,
  currentHandle,
}: { collections: any[]; currentHandle: string }) {
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      setIsSticky(offset > 300)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className={`bg-cream border-b z-10 ${isSticky ? "sticky top-0 shadow-sm" : ""}`}>
      <div className="overflow-x-auto">
        <div className="flex p-2 w-max">
          {collections.map((col: any) => (
            <Link
              key={col.node.id}
              href={`/collections/${col.node.handle}`}
              className={`px-3 py-2 whitespace-nowrap text-xs font-medium ${
                col.node.handle === currentHandle ? "text-coral" : "text-gray-700"
              }`}
            >
              {col.node.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
