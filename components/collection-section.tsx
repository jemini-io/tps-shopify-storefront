"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

interface CollectionSectionProps {
  collections: any[]
}

export default function CollectionSection({ collections }: CollectionSectionProps) {
  const [isSticky, setIsSticky] = useState(false)
  const [selectedCollection, setSelectedCollection] = useState<string | null>(null)

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

  const handleCollectionClick = (collectionId: string) => {
    setSelectedCollection(collectionId)
  }

  return (
    <div 
      id="collection-section"
      className={`py-6 px-4 bg-[#f0ede5] transition-all duration-300 ${
        isSticky ? 'fixed top-0 left-0 right-0 z-50 shadow-md' : ''
      }`}
    >
      <h3 className="text-sm text-gray-500 uppercase mb-4 text-center">
        CHOOSE A COLLECTION
      </h3>

      <div className="grid grid-cols-5 gap-3 overflow-x-auto hide-scrollbar pb-2">
        {collections.map((collection: any) => (
          <a 
            key={collection.node.id}
            href={`#${collection.node.handle}`}
            className="flex flex-col items-center group"
            onClick={() => handleCollectionClick(collection.node.handle)}
          >
            <div className={`w-full aspect-square rounded-md overflow-hidden border mb-2 relative transition-all duration-150 ${
              selectedCollection === collection.node.handle
                ? 'scale-95 border-4 border-black'
                : 'border border-gray-200 group-hover:border-black'
            }`}>
              <Image
                src={collection.node.image?.url || '/placeholder.jpg'}
                alt={collection.node.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="text-center text-gray-500">
              {collection.node.title.split(' ').map((word: string, index: number) => (
                <p 
                  key={index}
                  className={`font-medium text-xs ${selectedCollection === collection.node.handle ? 'text-black' : 'group-hover:text-black'}`}
                >
                  {word}
                </p>
              ))}
            </div>
          </a>
        ))}
      </div>
      {isSticky && <div className="h-[120px]"></div>}
    </div>
  )
} 