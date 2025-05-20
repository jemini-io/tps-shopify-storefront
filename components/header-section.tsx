"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function HeaderSection() {
  return (
    <section className="relative px-4 py-4">
      <div className="grid grid-cols-2 gap-4">
        {/* Left Image */}
        <div className="h-[250px] relative rounded-md overflow-hidden">
          <Image 
            src="/images/export_product_standouts/product_page_hero_1.6.24/hero_water_plant.jpg" 
            alt="Water plant" 
            fill 
            className="object-cover object-right object-center" 
            priority 
          />
        </div>
        
        {/* Right Image with Overlay */}
        <div className="h-[250px] relative rounded-md overflow-hidden">
          <Image 
            src="/images/collection_tiles_images/lawn_and_garden_tile.jpg" 
            alt="Lawn & Garden" 
            fill 
            className="object-cover" 
            priority 
          />
          <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-end">
            <div className="mb-9 text-center">
            </div>
            <div className="mb-3 text-center">
              <h2 className="text-4xl font-bold text-white mb-8">Lawn & Garden</h2>
              <Button 
                className="bg-[var(--color-coral)] hover:bg-[var(--color-coral)]/90 text-white px-8 py-3 rounded-full"
                onClick={() => window.location.href = '#lawn-garden'}
              >
                SHOP
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 