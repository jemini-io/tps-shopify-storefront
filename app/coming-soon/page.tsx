import Image from 'next/image';
import Link from 'next/link';
import { Button } from "@/components/ui/button"
import { homeLinkObject } from '@/lib/links';

export default function ComingSoonPage() {
  return (
   <div className="relative flex items-center justify-center min-h-screen bg-cream">
      <Image
        src="/images/build_bundle_ad_background.jpg"
        alt="Coming Soon Background"
        fill
        className="object-cover z-0"
        priority
      />
      <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center z-10">
        <Image
          src="/logos/label_logo/leaf_icon.png"
          alt="Leaf Icon Logo"
          width={100}
          height={200}
          className="mb-6"
          priority
        />
        <h1 className="text-4xl font-bold mb-4 text-white">Coming Soon</h1>
        <p className="text-lg text-gray-200 text-center">
          This page is under construction. Please check back later!
        </p>
        <Link href={homeLinkObject.path} className="text-[var(--color-coral)] font-medium flex items-center">
          <Button className="mt-6 px-4 py-2 bg-white text-[var(--color-coral)] rounded hover:bg-gray-100 transition-colors">
            GO BACK HOME
          </Button>
        </Link>
      </div>
    </div>
  );
}