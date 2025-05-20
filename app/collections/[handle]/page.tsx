import { getCollectionByHandle, getCollections } from "@/lib/shopify"
import { notFound } from "next/navigation"
import Image from "next/image"
import ProductCard from "@/components/product-card"
import { Button } from "@/components/ui/button"
import StickyCategoryNav from "@/components/sticky-category-nav"

export default async function CollectionPage({ params }: { params: { handle: string } }) {
  const { handle } = params
  const { body } = await getCollectionByHandle(handle)
  const { body: collectionsData } = await getCollections()

  if (!body?.data?.collectionByHandle) {
    notFound()
  }

  const collection = body.data.collectionByHandle
  const products = collection.products.edges.map((edge: any) => edge.node)
  const collections = collectionsData?.data?.collections?.edges || []

  // Format the collection title for display
  const formattedTitle = collection.title.replace(/&/g, "&amp;")

  return (
    <div className="bg-cream">
      {/* Collection Header */}
      <div className="relative">
        <div className="bg-green-100 aspect-[2/1] relative">
          <Image
            src={`/placeholder.svg?height=300&width=600&query=${collection.title} plants`}
            alt={collection.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-white p-4">
            <h1 className="text-2xl font-bold mb-1">Grow beautiful</h1>
            <h1 className="text-3xl font-bold">{formattedTitle}</h1>
            <Button className="mt-4 bg-coral hover:bg-coral/90 text-white">SEE ALL</Button>
          </div>
        </div>

        {/* Sticky Category Navigation */}
        <StickyCategoryNav collections={collections} currentHandle={handle} />
      </div>

      {/* Products Grid */}
      <div className="p-4">
        <div className="grid grid-cols-2 gap-4">
          {products.map((product: any) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  )
}
