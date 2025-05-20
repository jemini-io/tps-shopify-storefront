import Link from "next/link"
import Image from "next/image"

interface CollectionCardProps {
  collection: any
  size?: "small" | "medium" | "large"
}

export default function CollectionCard({ collection, size = "medium" }: CollectionCardProps) {
  const sizeClasses = {
    small: "w-16 h-16",
    medium: "aspect-square",
    large: "aspect-[2/1]",
  }

  return (
    <Link
      href={`/collections/${collection.node.handle}`}
      className={`relative rounded-md overflow-hidden bg-gray-100 ${sizeClasses[size]}`}
    >
      {collection.node.image?.url ? (
        <Image
          src={collection.node.image.url || "/placeholder.svg"}
          alt={collection.node.title}
          fill
          className="object-cover"
        />
      ) : (
        <Image
          src={`/placeholder.svg?height=200&width=200&query=${collection.node.title}`}
          alt={collection.node.title}
          fill
          className="object-cover"
        />
      )}
      <div className="absolute inset-0 bg-black/20 flex items-end p-2">
        <span className="text-xs font-bold text-center w-full bg-white/80 rounded-sm py-1">
          {collection.node.title}
        </span>
      </div>
    </Link>
  )
}
