import Link from "next/link"
import Image from "next/image"
import { collectionLinks, accountLinks, legalLinks } from "@/lib/links";


export default function Footer() {
  return (
    <footer className="bg-coral text-white">
      <div className="p-6 grid gap-4">
        <div className="grid gap-3">
          {Object.values(collectionLinks).map((linkObject) => (
            <Link key={linkObject.path} href={linkObject.path} className="text-white font-medium">
              {linkObject.label.footer.toUpperCase()}
            </Link>
          ))}
        </div>

        <div className="h-px bg-white/20 my-2"></div>

        <div className="grid gap-3">
          {Object.values(accountLinks).map((linkObject) => (
            <Link key={linkObject.path} href={linkObject.path} className="text-white font-medium">
              {linkObject.label.footer.toUpperCase()}
            </Link>
          ))}
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
            {Object.values(legalLinks).map((linkObject) => (
              <Link key={linkObject.path} href={linkObject.path} className="text-white underline">
                {linkObject.label.footer}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
