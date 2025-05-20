import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-coral text-white">
      <div className="p-6 grid gap-4">
        <div className="grid gap-3">
          <Link href="/collections" className="text-white font-medium">
            SHOP ALL
          </Link>
          <Link href="/collections/bundles" className="text-white font-medium">
            BUILD A BUNDLE
          </Link>
          <Link
            href="/collections/house-plants"
            className="text-white font-medium"
          >
            HOUSEPLANTS
          </Link>
          <Link
            href="/collections/garden-plants"
            className="text-white font-medium"
          >
            GARDEN PLANTS
          </Link>
          <Link
            href="/collections/hydro-aquatic"
            className="text-white font-medium"
          >
            HYDRO & AQUATIC
          </Link>
          <Link
            href="/collections/plant-supplements"
            className="text-white font-medium"
          >
            PLANT SUPPLEMENTS
          </Link>
        </div>

        <div className="h-px bg-white/20 my-2"></div>

        <div className="grid gap-3">
          <Link href="/account" className="text-white font-medium">
            MY ACCOUNT
          </Link>
          <Link href="/faq" className="text-white font-medium">
            ASK A QUESTION
          </Link>
          <Link href="/blog" className="text-white font-medium">
            BLOG: THE POUR SPOUT
          </Link>
          <Link href="/shipping" className="text-white font-medium">
            SHIPPING & RETURNS
          </Link>
          <Link href="/wholesale" className="text-white font-medium">
            WHOLESALE
          </Link>
          <Link href="/affiliates" className="text-white font-medium">
            AFFILIATES
          </Link>
        </div>

        <div className="flex justify-center mt-6 mb-4">
          <div className="relative w-80 h-16">
            <Image
              src="/logos/label_logo/tps_plant_food_white_horiz_label_logo.png"
              alt="TPS Plant Foods"
              fill
              className="object-contain"
            />
          </div>
        </div>

        <div className="text-center text-sm">
          <p>NOURISH EVERY PLANT</p>
        </div>

        <div className="text-center text-xs mt-4">
          <p>Copyright TPS Nutrients, 2025</p>
          <div className="flex justify-center gap-4 mt-2">
            <Link href="/terms" className="text-white underline">
              Terms & Conditions
            </Link>
            <Link href="/privacy" className="text-white underline">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
