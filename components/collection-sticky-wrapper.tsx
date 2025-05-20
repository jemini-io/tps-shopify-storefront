"use client"
import { useEffect, useState, ReactNode } from "react"

export default function CollectionStickyWrapper({ children }: { children: ReactNode }) {
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const collectionSection = document.getElementById('collection-section')
      const headerSection = document.querySelector('section.relative')
      if (collectionSection && headerSection) {
        const collectionRect = collectionSection.getBoundingClientRect()
        const headerRect = headerSection.getBoundingClientRect()
        setIsSticky(headerRect.bottom <= 0 && collectionRect.top <= 0)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      id="collection-section"
      className={`py-6 px-4 bg-[#f0ede5] transition-all duration-300 ${
        isSticky ? 'fixed top-0 left-0 right-0 z-50 shadow-md' : ''
      }`}
    >
      {children}
    </div>
  )
} 