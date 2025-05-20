import { getCollections } from "@/lib/shopify"
import Image from "next/image"
import Link from "next/link"

export default async function CollectionsPage() {
  const { body } = await getCollections()
  const collections = body?.data?.collections?.edges || []

  return (
    <div className="bg-cream p-4">
      <h1 className="text-2xl font-bold mb-6">Shop by Collection</h1>

      <div className="grid gap-4">
        {collections.map((collection: any) => (
          <Link
            key={collection.node.id}
            href={`/collections/${collection.node.handle}`}
            className="block bg-white rounded-lg overflow-hidden shadow-sm"
          >
            <div className="aspect-[2/1] relative">
              {collection.node.image?.url ? (
                <Image
                  src={collection.node.image.url || "/placeholder.svg"}
                  alt={collection.node.title}
                  fill
                  className="object-cover"
                />
              ) : (
                <Image
                  src={`/placeholder.svg?height=200&width=400&query=${collection.node.title}`}
                  alt={collection.node.title}
                  fill
                  className="object-cover"
                />
              )}
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <h2 className="text-xl font-bold text-white">{collection.node.title}</h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
