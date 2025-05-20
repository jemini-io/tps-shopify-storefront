import Image from "next/image"

interface ReviewCardProps {
  imageSrc: string
  name: string
  quote: string
  review: string
}

export default function ReviewCard({ imageSrc, name, quote, review }: ReviewCardProps) {
  return (
    <div className="w-64 border border-gray-200 rounded-lg p-4 bg-white">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
          <Image
            src={imageSrc}
            alt={name}
            width={40}
            height={40}
            className="object-cover w-full h-full"
          />
        </div>
        <div>
          <p className="font-medium">{name}</p>
          <p className="text-xs text-gray-500">Verified Buyer</p>
        </div>
      </div>
      <div className="flex text-yellow-400 mb-2">{"★★★★★"}</div>
      <h3 className="font-bold mb-2">{quote}</h3>
      <p className="text-sm">{review}</p>
    </div>
  )
} 