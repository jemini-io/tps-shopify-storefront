import Image from "next/image"

interface CollectionTileProps {
  id: string
  title: string[]
  imageSrc: string
  imageAlt: string
  isSelected: boolean
  onClick: (id: string) => void
}

export default function CollectionTile({
  id,
  title,
  imageSrc,
  imageAlt,
  isSelected,
  onClick,
}: CollectionTileProps) {
  return (
    <a 
      href={`#${id}`}
      className="flex flex-col items-center group"
      onClick={() => onClick(id)}
    >
      <div className={`w-full aspect-square rounded-md overflow-hidden border mb-2 relative transition-all duration-150 ${
        isSelected
          ? 'scale-95 border-4 border-black'
          : 'border border-gray-200 group-hover:border-black'
      }`}>
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
        />
      </div>
      <div className="text-center text-gray-500">
        {title.map((line, index) => (
          <p 
            key={index}
            className={`font-medium text-xs ${isSelected ? 'text-black' : 'group-hover:text-black'}`}
          >
            {line}
          </p>
        ))}
      </div>
    </a>
  )
} 